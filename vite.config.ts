import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
const DEV = 'development';
// const PROD = "production";
const env = process.env.NODE_ENV;
export default defineConfig({
  plugins: [uni()],
  build: {
    sourcemap: env === DEV
  },
});
