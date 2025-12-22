import { defineClientConfig } from 'vuepress/client'
import Layout from "./layouts/Layout.vue";
import NotFound from "./layouts/NotFound.vue";
import Folder from "./layouts/Folder.vue";
import File from "./layouts/File.vue";
import "./css/main.css"

if (!__VUEPRESS_SSR__) {console.log("WELCOME!")}
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        // Only initialize Vuetify on client side to avoid SSR/hydration mismatch
        // Vuetify is not used during SSR to prevent conflicts with VuePress routing
        if (!__VUEPRESS_SSR__) {
            // Import Vuetify dynamically only on client side
            import("./plugins/vuetify.js").then(({ default: vuetify }) => {
                app.use(vuetify);
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