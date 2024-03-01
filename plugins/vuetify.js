import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {VIcon} from "vuetify/components";
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        icons: {
            iconfont: 'mdi', // default - only for display purposes
            values: {
                customIcon: {
                    component: VIcon, // Use Vuetify's VIcon component
                    props: { // Props to pass to VIcon
                        icon: 'custom-icon-name', // Name of the icon you want to use
                    },
                },
                // Add more custom icons if needed
            },
        },
        ssr: true,
        components,
        directives,
    });

    nuxtApp.vueApp.use(vuetify);
});
