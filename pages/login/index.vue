<template>
    <NuxtLayout name="blank">
        <logo/>
        <form @submit.prevent="sendAuth" class="p-2">
            <input class="m-1" style="border: 1px solid black;" type="text" v-model="creds.email"/>
            <input class="m-1" style="border: 1px solid black;" type="password" v-model="creds.password"/>
            <button style="border: 1px solid black;" type="submit">submit</button>
        </form>
    </NuxtLayout>
</template>

<script setup>
const supabase = useSupabaseClient()

const creds = {
    email: '',
    password: ''
}

const router = useRouter()

const sendAuth = async () => {
    const { data, error } = await supabase.auth.signInWithPassword(creds)

    if(data) {
        router.push('/')
    }   
}
</script>