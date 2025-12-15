import { defineClientConfig } from 'vuepress/client'
import Layout from "./layouts/Layout.vue";
import NotFound from "./layouts/NotFound.vue";
import Folder from "./layouts/Folder.vue";
import File from "./layouts/File.vue";
import "./css/main.css"

if (!__VUEPRESS_SSR__) {console.log("WELCOME!")}
export default defineClientConfig({
    enhance({ app, router, siteData }) {
        // Only initialize Vuetify on client side to avoid CSS import errors during SSR
        if (!__VUEPRESS_SSR__) {
            import("./plugins/vuetify.js").then((vuetifyModule) => {
                app.use(vuetifyModule.default);
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