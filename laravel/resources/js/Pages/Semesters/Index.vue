<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { useForm, Head } from '@inertiajs/vue3';

const semester = useForm({
    name: '',
    start_date: null,
    end_date: null,
});
</script>

<template>
    <Head title="Semesters" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Semesters</h2>
        </template>

        <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <form @submit.prevent="semester.post(route('semesters.store'), { onSuccess: () => semester.reset() })">
                <div class="flex p-2">
                    <label for="semesterName" class="flex-initial w-1/3">Semester Name:</label>
                    <InputText id="semesterName" type="text" v-model="semester.name" class="flex-initial  w-2/3"/>
                </div>
                <div class="flex p-2">
                    <label for="startDate" class="flex-initial w-1/3">Start Date:</label>
                    <Calendar inputId="startDate" v-model="semester.start_date" class="flex-initial  w-2/3" dateFormat="dd/mm/yy" showButtonBar showIcon />
                </div>
                <div class="flex p-2">
                    <label for="endDate" class="flex-initial w-1/3">End Date:</label>
                    <Calendar inputId="endDate" v-model="semester.end_date" class="flex-initial  w-2/3" dateFormat="dd/mm/yy" showButtonBar showIcon  />
                </div>
                <!-- <textarea :placeholder="semester.errors.message"></textarea> -->
                <PrimaryButton class="mt-4">Create Semester</PrimaryButton>
            </form>



            <!-- <form @submit.prevent="form.post(route('chirps.store'), { onSuccess: () => form.reset() })">
                <textarea
                    v-model="form.message"
                    placeholder="What's on your mind?"
                    class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                ></textarea>
                <InputError :message="form.errors.message" class="mt-2" />
                <PrimaryButton class="mt-4">Chirp</PrimaryButton>
            </form> -->

            <!-- <div class="mt-6 bg-white shadow-sm rounded-lg divide-y">
                <Chirp
                    v-for="chirp in chirps"
                    :key="chirp.id"
                    :chirp="chirp"
                />
            </div> -->

        </div>
    </AuthenticatedLayout>
</template>
