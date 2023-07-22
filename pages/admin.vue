<script setup lang="ts">
const layout = 'admin'
</script>

<template>
  <div class="h-full w-full">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
