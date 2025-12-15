import { defineClientConfig } from 'vuepress/client'
import Layout from "./layouts/Layout.vue";
import NotFound from "./layouts/NotFound.vue";
import Folder from "./layouts/Folder.vue";
import File from "./layouts/File.vue";
import "./css/main.css"

if (!__VUEPRESS_SSR__) {console.log("WELCOME!")}
export default defineClientConfig({
    async enhance({ app, router, siteData }) {
        // Only initialize Vuetify on client side to avoid CSS import errors during SSR
        if (!__VUEPRESS_SSR__) {
            const vuetifyModule = await import("./plugins/vuetify.js");
            const vuetify = vuetifyModule.default;
            app.use(vuetify);
            
            // Helper function to check if a path looks like a file (ends with extension)
            const hasFileExtension = (path: string) => /\.[a-zA-Z0-9]+$/.test(path);
            
            // Handle initial URL without trailing slash before router resolves
            // This prevents showing 404 page when accessing URLs directly
            const currentPath = window.location.pathname;
            // Only add trailing slash if path doesn't end with / and doesn't look like a file
            if (!currentPath.endsWith('/') && !hasFileExtension(currentPath)) {
                // Use URL constructor for safer URL manipulation
                const url = new URL(window.location.href);
                url.pathname = currentPath + '/';
                const newPath = url.pathname + url.search + url.hash;
                window.history.replaceState(null, '', newPath);
            }
            
            router.beforeEach((to) => {
                if (!to.path.endsWith('/') && !hasFileExtension(to.path)) {
                    return {
                        path: to.path + '/',
                        query: to.query,
                        hash: to.hash,
                    }
                }
            })
        }
    },
    setup() {},
    rootComponents: [],
    layouts:{
        Layout,
        NotFound,
        File,
        Folder
    }
})