import { createRoot } from 'react-dom/client';
import App from './App';
import "uikit/dist/css/uikit.min.css";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// 1. Error handling for ResizeObserver
const originalError = console.error;
console.error = (...args) => {
  if (args.some(arg => typeof arg === 'string' && arg.includes('ResizeObserver'))) {
    return; // Silently ignore ResizeObserver errors
  }
  originalError.apply(console, args);
};

// 2. Safe UIkit initialization with error boundary
const initUIkit = () => {
  try {
    UIkit.use(Icons);
  } catch (error) {
    if (!error.message.includes('ResizeObserver')) {
      console.warn('UIkit initialization error:', error);
    }
  }
};
// 3. Wait for DOM to be fully ready
document.addEventListener('DOMContentLoaded', () => {
  // 4. Initialize UIkit after a slight delay
  setTimeout(initUIkit, 150);
  
  // 5. Create root and render
  const root = createRoot(document.getElementById('root'));
  
  // 6. Additional safety checks
  if (typeof window !== 'undefined') {
    // 7. Request animation frame for smoother initialization
    requestAnimationFrame(() => {
      root.render(<App />);
    });
  } else {
    root.render(<App />);
  }
});

// 8. Global error handler for uncaught exceptions
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('ResizeObserver')) {
    event.preventDefault();
  }
});