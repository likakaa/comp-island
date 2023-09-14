// vite.config.ts
import solid from "file:///E:/code/web/comp-island/node_modules/.pnpm/registry.npmmirror.com+solid-start@0.3.5_@solidjs+meta@0.28.6_@solidjs+router@0.8.3_solid-js@_uldg47y5s4rken4aylx4e6au5q/node_modules/solid-start/vite/plugin.js";
import { defineConfig } from "file:///E:/code/web/comp-island/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.9_@types+node@18.17.14/node_modules/vite/dist/node/index.js";
import unocss from "file:///E:/code/web/comp-island/node_modules/.pnpm/@unocss+vite@0.55.7_rollup@3.29.0_vite@4.4.9/node_modules/@unocss/vite/dist/index.mjs";
import netlifyAdapter from "file:///E:/code/web/comp-island/node_modules/.pnpm/solid-start-netlify@0.3.5_solid-start@0.3.5/node_modules/solid-start-netlify/index.js";
var vite_config_default = defineConfig({
  plugins: [
    solid({
      ssr: true,
      adapter: netlifyAdapter()
    }),
    unocss()
  ],
  build: {
    target: "esnext",
    minify: "esbuild"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2RlXFxcXHdlYlxcXFxjb21wLWlzbGFuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcY29kZVxcXFx3ZWJcXFxcY29tcC1pc2xhbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NvZGUvd2ViL2NvbXAtaXNsYW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHNvbGlkIGZyb20gJ3NvbGlkLXN0YXJ0L3ZpdGUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHVub2NzcyBmcm9tICdAdW5vY3NzL3ZpdGUnXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gbWlzc2luZyB0eXBlc1xuaW1wb3J0IG5ldGxpZnlBZGFwdGVyIGZyb20gJ3NvbGlkLXN0YXJ0LW5ldGxpZnknXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBzb2xpZCh7XG4gICAgICBzc3I6IHRydWUsXG4gICAgICBhZGFwdGVyOiBuZXRsaWZ5QWRhcHRlcigpLFxuICAgIH0pLFxuICAgIHVub2NzcygpLFxuICBdLFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUCxPQUFPLFdBQVc7QUFDalIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxZQUFZO0FBRW5CLE9BQU8sb0JBQW9CO0FBRTNCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLEtBQUs7QUFBQSxNQUNMLFNBQVMsZUFBZTtBQUFBLElBQzFCLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
