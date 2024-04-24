<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts"></script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 1;
  filter: blur(1rem);
}

*{
      /* background-image: url('florest.jpg'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}


</style>