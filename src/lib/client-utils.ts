// Global error boundary and console management
if (typeof window !== 'undefined') {
  // Suppress hydration warnings in production
  if (process.env.NODE_ENV === 'production') {
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('Warning: Extra attributes from the server') ||
         args[0].includes('Warning: Text content did not match') ||
         args[0].includes('Hydration failed because the initial UI'))
      ) {
        return;
      }
      originalError.apply(console, args);
    };
  }

  // Handle browser extension interference
  window.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    if (body && !body.hasAttribute('data-new-gr-c-s-check-loaded')) {
      body.setAttribute('data-new-gr-c-s-check-loaded', '14.1248.0');
      body.setAttribute('data-gr-ext-installed', '');
    }
  });
}

export {};
