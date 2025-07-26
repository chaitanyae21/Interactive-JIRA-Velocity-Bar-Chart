import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the React app. Using the React plugin enables
// support for JSX and the modern React refresh capability. More options
// can be added here as the project grows.
export default defineConfig({
  plugins: [react()],
});
