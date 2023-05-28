import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@src", replacement: resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
    ],
  },
  server: {
    proxy: {
      // 로컬 환경에서만 프록시를 적용할 경로 및 대상을 설정합니다.
      "/dev": {
        target:
          "http://k8s-default-backuser-6b57e68a13-216944686.ap-northeast-2.elb.amazonaws.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, ""),
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        sw: "./sw.js",
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
});
