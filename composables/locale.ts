import {useCookie, useRequestHeaders, useState} from "#app";

export const useLocale = () => useState<string>('locale', () => useDefaultLocale().value)

export const useDefaultLocale = (fallback = 'ru') => {
    const locale = ref(fallback)
    const localeCookie = useCookie('lang')

    if (localeCookie.value) {
        locale.value = localeCookie.value

    } else if (process.client) {
        const navLang = useLocales().value.find(e => e.code === navigator.language)
        if (navLang) {
            locale.value = navLang.code
        }
    } else if (process.server) {
        const reqLocale = useLocales().value.find(e => e.code === useRequestHeaders()['accept-language']?.split(',')[0])
        if (reqLocale) {
            locale.value = reqLocale.code
        }
    }

    return locale
}

export const setLocale = (lang: string) => {
    const useLocaleCookie = useCookie('lang')
    useLocaleCookie.value = lang
}

export const useLocales = () => {
    const locales = ref([
        {
            code: 'ru',
        },
        {
            code: 'en'
        }
    ])
    return locales
}
