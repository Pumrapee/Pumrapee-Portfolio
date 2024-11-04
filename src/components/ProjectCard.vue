<script setup>
import { defineProps } from "vue";

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
</script>

<template>
  <div class="bg-white shadow-lg rounded-lg p-6 hover-effect">
    <h3 class="text-xl font-semibold">{{ project.title }}</h3>
    <p class="mt-2 text-gray-700">{{ project.shortDescription }}</p>
    <ul class="flex flex-wrap mt-4">
      <li
        v-for="tech in project.technologies"
        :key="tech"
        class="text-sm bg-gray-200 px-2 py-1 rounded mr-1 mb-1"
      >
        {{ tech }}
      </li>
    </ul>
    <div class="flex space-x-4">
      <a
        :href="project.link"
        target="_blank"
        class="mt-4 inline-block text-blue-500 hover:underline"
      >
        View Project
      </a>
      <button
        @click="handleShowDetails"
        class="mt-4 inline-block text-blue-500 hover:underline"
      >
        Show Details
      </button>
    </div>
  </div>
</template>

<style scoped>
.hover-effect {
  transition: transform 0.3s, box-shadow 0.3s;
}
.hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
}

li {
  white-space: nowrap;
  overflow: hidden;
}
</style>
