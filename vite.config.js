import { defineConfig } from "vite";

export default defineConfig({
  // other config options...
  plugins: [
    // remove the vite:react-swc plugin from the plugins array
    // {
    //   name: 'vite:react-swc',
    //   // other options...
    // },
  ],
});
