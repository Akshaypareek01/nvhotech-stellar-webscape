import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { applyPalette, DEFAULT_PALETTE } from '@/components/PalettePicker'

// Always use Palm & Marigold in dark mode; ignore stored palette preferences.
applyPalette(DEFAULT_PALETTE);
try {
  localStorage.removeItem('nvho-palette');
} catch {
  /* localStorage unavailable */
}

createRoot(document.getElementById("root")!).render(<App />);
