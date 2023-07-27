<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      if (to.path === '/')
        return navigateTo({ path: '/web' })
    },
  ],
})
</script>

<template>
  <div />
</template>
