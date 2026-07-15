import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { applyPalette, getStoredPalette } from '@/components/PalettePicker'

// Restore the previewed color palette before first paint (colors only; theme
// light/dark itself is handled by next-themes).
applyPalette(getStoredPalette());

createRoot(document.getElementById("root")!).render(<App />);
