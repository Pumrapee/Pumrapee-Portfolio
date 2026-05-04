<template>
  <div class="education-card p-4 rounded-lg flex items-center space-x-4 border border-slate-700 bg-slate-900/80">
    <img :src="education.img" alt="Institution Logo" class="w-16 h-16 rounded-md border border-slate-700" />
    <div>
      <h3 class="text-xl font-semibold text-slate-100">{{ education.name }}</h3>
      <p class="text-slate-300">{{ education.description }}</p>
      <p class="text-cyan-300 text-sm mt-1">{{ education.year }}</p>
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
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.education-card:hover {
  transform: scale(1.01);
  border-color: rgba(103, 232, 249, 0.5);
}
</style>
  
