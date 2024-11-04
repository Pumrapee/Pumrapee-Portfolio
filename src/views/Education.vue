<script setup>
import EducationCard from '../components/EducationCard.vue';
import EducationData from '../assets/education-data.json'
</script>

<template>
  <section class="container mx-auto p-8">
    <h2 class="text-3xl font-bold mb-4">Education</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <EducationCard v-for="(edu, index) in EducationData" :key="index" :education="edu" />
    </div>
  </section>
</template>