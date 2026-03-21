<script setup>
defineProps({
    author: String
})
</script>

<template>
    <div>
        <blockquote>
            <slot />
        </blockquote>
        <cite v-if="author">- {{ author }}</cite>
    </div>
</template>