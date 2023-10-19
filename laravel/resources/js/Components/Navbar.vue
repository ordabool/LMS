<script setup>
import { ref } from 'vue';
import Menubar from 'primevue/menubar';
import { usePage } from '@inertiajs/vue3';

const items = ref([ ]);

const page = usePage();
const loggedIn = page.props.auth.user;

if (loggedIn) {
    items.value = [
        { label: 'Dashboard', url: route('dashboard') },
        { label: 'Semesters', url: route('semesters.index') },
        {
            label: page.props.auth.user.name,
            items: [
                {
                    label: 'Profile',
                    url: route('profile.edit')
                },
                {
                    label: 'Log Out',
                    url: route('logout'),
                }
            ]
        },
    ]
} else {
    items.value = [
        { label: 'Home', url: route('/') },
        { label: 'Login', url: route('login') },
        { label: 'Register', url: route('register') },
    ]
}
</script>

<template>
    <Menubar :model="items">
        <template #item="{ label, item, props, root, hasSubmenu }">
            <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                <a :href="routerProps.href" v-bind="props.action" @click="routerProps.navigate">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </router-link>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
                <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
            </a>
        </template>
    </Menubar>
</template>
