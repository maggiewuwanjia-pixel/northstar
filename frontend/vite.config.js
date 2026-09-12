import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 前端通过 /api 代理访问 FastAPI（127.0.0.1:8000），避免 CORS 且部署后无需改地址
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // 监听 0.0.0.0（IPv4+IPv6），避免只绑 IPv6 localhost 导致部分工具连不上
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true
      }
    }
  }
})
