// vite.config.js
import { defineConfig } from "file:///app/node_modules/vite/dist/node/index.js";
import react from "file:///app/node_modules/@vitejs/plugin-react-swc/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react({ include: "**/*.jsx" })],
  server: {
    hmr: true,
    host: true,
    strictPort: true,
    watch: {
      usePolling: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtyZWFjdCh7aW5jbHVkZTogJyoqLyouanN4J30pXSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIGhtcjogdHJ1ZSxcclxuICAgICAgICBob3N0OiB0cnVlLFxyXG4gICAgICAgIHN0cmljdFBvcnQ6IHRydWUsXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgdXNlUG9sbGluZzogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThMLFNBQVMsb0JBQW9CO0FBQzNOLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsTUFBTSxFQUFDLFNBQVMsV0FBVSxDQUFDLENBQUM7QUFBQSxFQUN0QyxRQUFRO0FBQUEsSUFDSixLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixPQUFPO0FBQUEsTUFDSCxZQUFZO0FBQUEsSUFDaEI7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
