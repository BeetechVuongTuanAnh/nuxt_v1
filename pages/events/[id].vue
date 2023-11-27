<template>
    <div>events id: {{ $route.params.id }}</div>
</template>

<script setup lang="ts">
    const nuxt = useNuxtApp();
    console.log(nuxt);
</script>