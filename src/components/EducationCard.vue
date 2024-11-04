<template>
    <div class="education-card bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <img :src="education.img" alt="Institution Logo" class="w-16 h-16" />
      <div>
        <h3 class="text-xl font-semibold">{{ education.name }}</h3>
        <p class="text-gray-600">{{ education.description }}</p>
        <p class="text-gray-500 text-sm">{{ education.year }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    education: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .education-card {
    transition: transform 0.2s ease;
  }
  .education-card:hover {
    transform: scale(1.02);
  }
  </style>
  