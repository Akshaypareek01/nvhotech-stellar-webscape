import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { SwatchBook, X, Check } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export const PALETTE_STORAGE_KEY = 'nvho-palette';
export const DEFAULT_PALETTE = 'palm-marigold';

type Swatch = { bg: string; primary: string; accent: string };

export type PaletteDef = {
  id: string;
  name: string;
  tagline: string;
  light: Swatch;
  dark: Swatch;
};

/** Swatch hexes mirror the CSS variable values in index.css (light + dark designed per palette). */
export const PALETTES: PaletteDef[] = [
  {
    id: 'palm-marigold',
    name: 'Palm & Marigold',
    tagline: 'Deep green, warm marigold CTAs (current)',
    light: { bg: '#F7F8F4', primary: '#1E5C46', accent: '#EFA727' },
    dark: { bg: '#0E1613', primary: '#6CC5A0', accent: '#F2B33D' },
  },
  {
    id: 'inkwell-ember',
    name: 'Inkwell & Ember',
    tagline: 'Deep indigo with ember-orange heat',
    light: { bg: '#F6F7FA', primary: '#3D43A2', accent: '#E8632C' },
    dark: { bg: '#12141F', primary: '#9BA3EE', accent: '#F0803F' },
  },
  {
    id: 'porcelain-oxblood',
    name: 'Porcelain & Oxblood',
    tagline: 'Warm gallery neutrals, burgundy and brass',
    light: { bg: '#F8F7F5', primary: '#7C2D3E', accent: '#C99242' },
    dark: { bg: '#171112', primary: '#D98A96', accent: '#D9A455' },
  },
  {
    id: 'slate-citron',
    name: 'Slate & Citron',
    tagline: 'Cool petrol blue-greys, sharp citron',
    light: { bg: '#F4F6F7', primary: '#1F5F6B', accent: '#E3C51F' },
    dark: { bg: '#101415', primary: '#6FB9C7', accent: '#E9D04B' },
  },
  {
    id: 'fig-honey',
    name: 'Fig & Honey',
    tagline: 'Dark plum with honeyed apricot',
    light: { bg: '#F8F6F8', primary: '#6D2E5B', accent: '#F0A05A' },
    dark: { bg: '#191019', primary: '#D49ACB', accent: '#F2B071' },
  },
  {
    id: 'noir-scarlet',
    name: 'Noir & Scarlet',
    tagline: 'Monochrome graphite, one scarlet accent',
    light: { bg: '#F7F7F8', primary: '#2E3238', accent: '#C63A4B' },
    dark: { bg: '#141518', primary: '#C9CDD4', accent: '#ED6A76' },
  },
  {
    id: 'navy-champagne',
    name: 'Navy & Champagne',
    tagline: 'Classic luxury: deep navy, champagne gold',
    light: { bg: '#F7F6F2', primary: '#1F3A6E', accent: '#D4AF37' },
    dark: { bg: '#10141D', primary: '#8FA8DC', accent: '#E0BC4C' },
  },
  {
    id: 'espresso-crema',
    name: 'Espresso & Crema',
    tagline: 'Roasted browns with caramel warmth',
    light: { bg: '#F8F5F1', primary: '#5C4030', accent: '#E0A35C' },
    dark: { bg: '#16100C', primary: '#C99B72', accent: '#E8B06A' },
  },
  {
    id: 'graphite-blush',
    name: 'Graphite & Blush',
    tagline: 'Quiet-luxury charcoal with dusty rose',
    light: { bg: '#F7F5F5', primary: '#37424E', accent: '#E2A6AC' },
    dark: { bg: '#131215', primary: '#AFBCC9', accent: '#E8A8AF' },
  },
  {
    id: 'ultramarine-sand',
    name: 'Ultramarine & Sand',
    tagline: 'Klein-blue editorial on raw canvas',
    light: { bg: '#F8F6F0', primary: '#2B3FBF', accent: '#DCC393' },
    dark: { bg: '#0F1120', primary: '#97A5F2', accent: '#E3C88F' },
  },
  {
    id: 'verdigris-copper',
    name: 'Verdigris & Copper',
    tagline: 'Weathered patina green, warm copper',
    light: { bg: '#F3F7F6', primary: '#0F6B60', accent: '#C87A50' },
    dark: { bg: '#0D1514', primary: '#5FC2B4', accent: '#DB8F63' },
  },
];

export function applyPalette(id: string) {
  if (id === DEFAULT_PALETTE) {
    document.documentElement.removeAttribute('data-palette');
  } else {
    document.documentElement.setAttribute('data-palette', id);
  }
  try {
    localStorage.setItem(PALETTE_STORAGE_KEY, id);
  } catch {
    /* private mode — preview still works for the session */
  }
}

export function getStoredPalette(): string {
  try {
    const stored = localStorage.getItem(PALETTE_STORAGE_KEY);
    if (stored && PALETTES.some((p) => p.id === stored)) return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_PALETTE;
}

/**
 * Header control that opens a right-side drawer listing the palette previews.
 * Colors-only theming: applies data-palette on <html>; persists in localStorage.
 */
export function PalettePicker({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(DEFAULT_PALETTE);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setActive(getStoredPalette());
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // ESC to close + focus the panel when opened
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    panelRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  const select = (id: string) => {
    applyPalette(id);
    setActive(id);
  };

  if (!mounted) {
    return (
      <span
        className={cn(
          'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-transparent',
          className
        )}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          'relative z-[60] inline-flex h-11 min-h-[44px] w-11 min-w-[44px] shrink-0 touch-manipulation items-center justify-center rounded-xl',
          'border border-border bg-card/80 text-muted-foreground shadow-sm backdrop-blur-sm',
          'transition-colors hover:bg-primary/15 hover:text-foreground hover:border-primary/30',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'active:scale-95',
          className
        )}
        aria-label="Preview color themes"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <SwatchBook className="h-5 w-5" strokeWidth={2} />
      </button>

      {/* Portal to <body>: the header's transform/backdrop-filter makes it the
          containing block for fixed descendants, which crops the overlay. */}
      {open &&
        createPortal(
        <div className="fixed inset-0 z-[90]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] animate-fade-in"
            onClick={close}
            aria-hidden
          />

          {/* Drawer panel */}
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Color theme preview"
            tabIndex={-1}
            className={cn(
              'absolute right-0 top-0 h-full w-full max-w-[340px] overflow-y-auto',
              'bg-card border-l border-border shadow-2xl outline-none',
              'animate-slide-in-right'
            )}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-border bg-card/95 px-5 py-4 backdrop-blur-sm">
              <div>
                <h2 className="text-base font-bold text-foreground">Color themes</h2>
                <p className="text-xs text-muted-foreground">
                  Preview only — colors change, everything else stays.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close theme preview"
                className="inline-flex h-10 w-10 min-h-[40px] min-w-[40px] shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul className="flex flex-col gap-2 p-4" role="list">
              {PALETTES.map((p) => {
                const sw = isDark ? p.dark : p.light;
                const selected = active === p.id;
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => select(p.id)}
                      aria-pressed={selected}
                      className={cn(
                        'flex w-full min-h-[64px] items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card',
                        selected
                          ? 'border-primary bg-primary/10 shadow-sm'
                          : 'border-border hover:border-primary/40 hover:bg-primary/5'
                      )}
                    >
                      {/* Swatch dots: bg / primary / accent */}
                      <span className="flex shrink-0 items-center -space-x-1.5" aria-hidden>
                        <span
                          className="h-6 w-6 rounded-full border border-border"
                          style={{ background: sw.bg }}
                        />
                        <span
                          className="h-6 w-6 rounded-full border border-card"
                          style={{ background: sw.primary }}
                        />
                        <span
                          className="h-6 w-6 rounded-full border border-card"
                          style={{ background: sw.accent }}
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-bold text-foreground">
                          {p.name}
                        </span>
                        <span className="block truncate text-xs text-muted-foreground" title={p.tagline}>
                          {p.tagline}
                        </span>
                      </span>
                      {selected && <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />}
                    </button>
                  </li>
                );
              })}
            </ul>

            <p className="px-5 pb-6 text-xs leading-relaxed text-muted-foreground">
              Your pick is remembered on this device. Toggle light/dark to see each
              palette's designed counterpart.
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
