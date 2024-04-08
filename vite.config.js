import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


  server: {

    // headers: {
    //   'Content-Security-Policy': "img-src 'self' https://photo.teamrabbil.com",


    // },
    proxy: {
      '/api/': {
        // target: 'http://localhost:5000',
        target: 'https://bikroybackend.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/')
      }
    }
  }
})


//https://bikroybackend.onrender.com/api/v1/UserLogin/bidyutsikder420@gmail.com/1234


