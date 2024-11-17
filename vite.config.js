import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_API_KEY1': JSON.stringify(env.REACT_APP_AI_KEY1),
      'process.env.REACT_APP_API_KEY2': JSON.stringify(env.REACT_APP_API_KEY2),
      'process.env.REACT_APP_API_KEY3': JSON.stringify(env.REACT_APP_API_KEY3),
      'process.env.REACT_APP_API_KEY4': JSON.stringify(env.REACT_APP_API_KEY4),
      'process.env.REACT_APP_API_KEY5': JSON.stringify(env.REACT_APP_API_KEY5)
    },
    plugins: [react()],
  }
})