<script setup>
import { ref } from 'vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import Navbar from '@/Components/Navbar.vue';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <Navbar />

    <slot />
</template>
