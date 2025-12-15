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
            
            // Handle initial URL without trailing slash before router resolves
            // This prevents showing 404 page when accessing URLs directly
            const currentPath = window.location.pathname;
            if (!currentPath.endsWith('/') && !currentPath.includes('.')) {
                // Replace the current URL with trailing slash before Vue Router processes it
                const newPath = currentPath + '/' + window.location.search + window.location.hash;
                window.history.replaceState(null, '', newPath);
            }
            
            router.beforeEach((to) => {
                if (!to.path.endsWith('/') && !to.path.includes('.')) {
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