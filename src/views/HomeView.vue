<script setup lang="ts">
import OwnersList from '../components/OwnersList.vue'
</script>

<template>
  <main class="w-full">
    <div class="w-full px-4 md:px-6 lg:px-8 py-8">
      <h1 class="text-4xl font-bold mb-4" style="color: #2563eb !important">
        <i class="fas fa-users mr-2"></i>
        <span style="color: #2563eb !important">Pet Owners</span>
      </h1>
      <OwnersList />
    </div>
  </main>
</template>
