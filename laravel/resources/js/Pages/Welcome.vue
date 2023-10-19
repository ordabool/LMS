<script setup>
import { Head } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
</script>

<template>
    <Head title="Welcome" />

    <GuestLayout>
    <a :href="route('register')"> Register </a>
    &middot;
    <a :href="route('login')" as="button">
        Log In
    </a>

    <h1>Welcome!</h1>
    </GuestLayout>

</template>

<style>

</style>
