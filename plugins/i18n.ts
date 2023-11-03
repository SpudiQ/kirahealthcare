import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { useLocale } from "~/composables/locale";

export default defineNuxtPlugin(({vueApp}) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        warnHtmlMessage: false,
        strictMessage: false,
        locale: useLocale().value,
        messages
    })

    vueApp.use(i18n)
})