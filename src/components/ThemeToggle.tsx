import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

type ThemeToggleProps = {
  /** Optional extra classes for the icon button */
  className?: string;
};

/**
 * Switches between light and dark themes; preference is persisted by next-themes.
 * Uses a ≥44px touch target and a subtle repeating animation so the control is easier to spot and tap.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <button
      type="button"
      className={cn(
        'group relative z-[60] inline-flex h-11 min-h-[44px] w-11 min-w-[44px] shrink-0 touch-manipulation items-center justify-center rounded-xl',
        'border border-border bg-card/80 text-muted-foreground shadow-sm backdrop-blur-sm',
        'transition-colors hover:bg-primary/15 hover:text-foreground hover:border-primary/30',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'active:scale-95',
        className
      )}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <span
        className="animate-theme-toggle-hint group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused]"
        aria-hidden
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-amber-400" strokeWidth={2} />
        ) : (
          <Moon className="h-5 w-5 text-primary" strokeWidth={2} />
        )}
      </span>
    </button>
  );
}
