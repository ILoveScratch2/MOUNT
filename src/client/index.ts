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
            
            // Handle client-side navigation (e.g., clicking links)
            // Initial URL normalization is handled by a script in the HTML head
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