import { defineClientConfig } from 'vuepress/client'
import Layout from "./layouts/Layout.vue";
import NotFound from "./layouts/NotFound.vue";
import Folder from "./layouts/Folder.vue";
import File from "./layouts/File.vue";
import "./css/main.css"

if (!__VUEPRESS_SSR__) {console.log("WELCOME!")}
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        // Minimal config for debugging - logging router state
        if (!__VUEPRESS_SSR__) {
            console.log('[DEBUG] Client-side enhance called');
            console.log('[DEBUG] Current route:', router.currentRoute.value);
            router.afterEach((to, from) => {
                console.log('[DEBUG] Route changed:', from.path, '->', to.path);
            });
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
