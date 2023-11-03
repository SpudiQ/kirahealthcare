<template>
    <NuxtLayout>
        <p class="mr-5">{{ $t('auth.Authorization') }}</p>
        <button class="mr-5" @click="changeLocale('en')">en</button>
        <button @click="changeLocale('ru')">ru</button>
    </NuxtLayout>
</template>


<script setup lang="ts">
import { setLocale } from '@/composables/locale'

const changeLocale = (locale: string) => {
  setLocale(locale)
  location.reload()
}
</script>