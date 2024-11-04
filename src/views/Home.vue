<script setup>
import { ref } from "vue";
import projectsData from "../assets/projects-data.json";
const projects = ref(projectsData);
const tools = ref([]);

projects.value.forEach((project) => {
  project.technologies.forEach((tech) => {
    if (!tools.value.includes(tech)) {
      tools.value.push(tech);
    }
  });
});
</script>
<template>
  <section
    class="flex flex-col md:flex-row items-center text-center md:text-left py-20"
  >
    <div class="md:w-1/3 flex justify-center mb-8 md:mb-0">
      <img
        src="/profile-picture.jpg"
        alt="Nick"
        width="200"
        height="200"
        class="shadow-lg"
      />
    </div>

    <div class="md:w-2/3 flex flex-col items-center md:items-start px-4">
      <h1 class="text-5xl font-bold text-blue-500 mb-4">Pumrapee Chaisa</h1>
      <p class="text-xl text-gray-600 max-w-md mb-4">
        Web developer skilled in Java Spring Boot and Vue Framework with three
        years of academic experience. Proficient in RESTful API design, database
        management, and authentication protocols. Currently pursuing a
        Bachelor's degree, eager to apply and expand my knowledge in real-world
        projects.
      </p>

      <ul
        class="text-gray-500 flex flex-wrap justify-center md:justify-start space-x-2"
      >
        <li
          v-for="tool in tools"
          :key="tool"
          class="bg-gray-100 text-sm px-2 py-1 rounded mb-2 border border-gray-300"
        >
          {{ tool }}
        </li>
      </ul>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
    <div
      v-for="project in projects"
      :key="project.title"
      class="bg-white p-4 shadow rounded-lg"
    >
      <img :src="project.img" alt="Project" class="w-full rounded-md mb-4" />
      <h3 class="text-xl font-semibold text-gray-800">{{ project.title }}</h3>
      <p class="text-gray-600 mt-2">{{ project.shortDescription }}</p>
    </div>
  </section>
</template>
<style></style>
