<script setup>
defineProps({
    author: String
})
</script>

<template>
    <div>
        <blockquote>
            &quot;<slot />&quot;
        </blockquote>
        <cite v-if="author">- {{ author }}</cite>
    </div>
</template>