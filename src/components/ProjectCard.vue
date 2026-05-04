<script setup>
import { computed, defineProps } from "vue";
import {
  CATEGORY_ORDER,
  getCategoryStyle,
  getToolCategory,
} from "../utils/toolCategories";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["open-modal"]);

const handleShowDetails = () => {
  emit("open-modal", props.project);
};

const categorizedTechnologies = computed(() => {
  const grouped = {};
  CATEGORY_ORDER.forEach((category) => {
    grouped[category] = [];
  });

  props.project.technologies.forEach((tech) => {
    grouped[getToolCategory(tech)].push(tech);
  });

  return CATEGORY_ORDER.filter((category) => grouped[category].length > 0).map(
    (category) => ({
      name: category,
      technologies: grouped[category],
      ...getCategoryStyle(category),
    })
  );
});
</script>

<template>
  <div class="h-full rounded-lg p-6 hover-effect border border-slate-700 bg-slate-900/80 flex flex-col">
    <h3 class="text-xl font-semibold text-slate-100">{{ project.title }}</h3>
    <p class="mt-2 text-slate-300">{{ project.shortDescription }}</p>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div v-for="group in categorizedTechnologies" :key="group.name">
        <p class="text-[10px] uppercase tracking-wider mb-1" :class="group.heading">
          {{ group.name }}
        </p>
        <ul class="flex flex-wrap gap-1">
          <li
            v-for="tech in group.technologies"
            :key="tech"
            class="text-xs border px-2 py-1 rounded"
            :class="group.badge"
          >
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-auto pt-6 flex space-x-4">
      <a
        :href="project.link"
        target="_blank"
        class="inline-block text-cyan-300 hover:text-cyan-200"
      >
        View Project
      </a>
      <button
        @click="handleShowDetails"
        class="inline-block text-cyan-300 hover:text-cyan-200"
      >
        Show Details
      </button>
    </div>
  </div>
</template>

<style scoped>
.hover-effect {
  transition: transform 0.3s, border-color 0.3s;
}
.hover-effect:hover {
  transform: translateY(-4px);
  border-color: rgba(103, 232, 249, 0.5);
}

li {
  white-space: nowrap;
  overflow: hidden;
}
</style>
