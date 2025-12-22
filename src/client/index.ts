import { defineClientConfig } from 'vuepress/client'
import Layout from "./layouts/Layout.vue";
import NotFound from "./layouts/NotFound.vue";
import Folder from "./layouts/Folder.vue";
import File from "./layouts/File.vue";
import "./css/main.css"

if (!__VUEPRESS_SSR__) {console.log("WELCOME!")}
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        // Vuetify initialization has been removed as it was causing routing issues
        // and is not currently being used in any components.
        // 
        // This enhance function is kept for potential future use (e.g., adding plugins).
        // If Vuetify is needed in the future, components can be imported individually.
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

