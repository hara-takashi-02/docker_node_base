import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: './',
  server: {
      host: true,
      hmr: {
          host: 'localhost',    // 開発環境のdockerのhostを設定してあげる
      },
      watch: {
          usePolling: true,    // WindowsのWSL2でも動くように設定
      },
  },
  resolve: {
      // 相対パスの共通設定
      alias: {
          '@': '/src',
      },
  },
  build: {
    // 空ファイルも出力
    emptyOutDir: true,
    /*rollupOptions: {
        output: {
            // ビルド時にハッシュをつけない
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            // assetFileNames: `assets/[name].[ext]`,

            // 出力先を分ける
            assetFileNames: (assetInfo: any) => {
                if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
                    return 'assets/images/[name].[ext]';
                }
                if (/\.css$/.test(assetInfo.name)) {
                    return 'assets/css/[name].[ext]';
                }
                if (/\.js$/.test(assetInfo.name)) {
                    return 'assets/js/[name].[ext]';
                }
                return 'assets/[name].[ext]';
            },
        }
    }*/
  },
})
