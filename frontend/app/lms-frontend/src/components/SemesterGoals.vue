<script setup>
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

const goals = ref([
    {
        title: "Be as involved in the different courses as possible", 
        items: [
            "Open the course forum at least once a week, ask anything that needs clarification, and answer other students questions.",
            "Compare homework with other students, even if the answer is correct.",
            "Initiate conversations with students who are learning the same courses, and make friends.",
            "Join the WhatsApp, Discord and Telegram groups - and participate!"
        ]
    },
    {
        title: "Get to the finals with a good proficiency in the studied material", 
        items: [
            "Make notes on the textbooks while studying from them.",
            "Read the chapter for the next lecture ahead of time.",
            "Watch the recommended instructors if the default one isn’t good enough."
        ]
    },
    {
        title: "Exhibit great knowledge at the finals, and score high", 
        items: [
            "Practice as many exams as possible. Practice makes perfect!",
            "Schedule the finals at a reasonable time, so that there will be enough time to practice.",
            "Study with other students, even if they are studying for a different course."
        ]
    },
    {
        title: "Finish all 3 course in this semester", 
        items: [
            "Monitor the proficiency level in the studied material during the semester, in order to have enough time to improve.",
            "Even if an exam seems like the score won’t be at the wanted level, go to the exam. Real exams a great tool for understanding what needs to improve."
        ]
    },
])
</script>

<template>
    <h2>Semester Goals</h2>

    <Accordion>
        <AccordionTab v-for="goal in goals" :key="goal.title" :header="goal.title">
            <ul>
                <li v-for="item in goal.items"> {{ item }}</li>
            </ul>
        </AccordionTab>
    </Accordion>
</template>

<style>
.goal-title {
    font-weight: 300;
    text-decoration: underline;
}
</style>