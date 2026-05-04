<script setup>
import { computed, ref } from "vue";
import projectsData from "../assets/projects-data.json";
import {
  CATEGORY_ORDER,
  getCategoryStyle,
  getToolCategory,
} from "../utils/toolCategories";

const projects = ref(projectsData);
const otherTools = [
  "Python",
  "MongoDB",
  "Express.js",
  "Linux CLI",
  "Go",
  "gRPC",
  "Protocol Buffers",
  "PostgreSQL",
  "Redis",
  "GitLab CI/CD",
  "AWS S3",
];

const categorizedTools = computed(() => {
  const uniqueTools = new Set();

  projects.value.forEach((project) => {
    project.technologies.forEach((tech) => uniqueTools.add(tech));
  });

  otherTools.forEach((tech) => uniqueTools.add(tech));

  const grouped = {};
  CATEGORY_ORDER.forEach((category) => {
    grouped[category] = [];
  });

  [...uniqueTools].sort().forEach((tool) => {
    const category = getToolCategory(tool);
    grouped[category].push(tool);
  });

  return CATEGORY_ORDER
    .filter((category) => grouped[category].length > 0)
    .map((category) => ({
      name: category,
      tools: grouped[category],
      ...getCategoryStyle(category),
    }));
});
</script>
<template>
  <section
    class="flex flex-col md:flex-row items-center text-center md:text-left gap-8 py-10"
  >
    <div class="md:w-1/3 flex justify-center">
      <img
        src="/profile-picture.jpg"
        alt="Nick"
        width="200"
        height="200"
        class="rounded-full border-2 border-cyan-400/60 shadow-xl shadow-cyan-900/40"
      />
    </div>

    <div
      class="md:w-2/3 flex flex-col items-center md:items-start px-6 py-6 rounded-xl border border-cyan-400/20 bg-slate-900/70"
    >
      <p class="text-xs tracking-widest text-cyan-300 mb-2">FULL-STACK DEVELOPER</p>
      <h1 class="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Pumrapee Chaisa</h1>
      <p class="text-base md:text-lg text-slate-300 max-w-2xl mb-4 leading-relaxed">
        Web developer skilled in Java Spring Boot and Vue Framework with three
        years of academic experience. Proficient in RESTful API design, database
        management, and authentication protocols. Currently pursuing a
        Bachelor's degree, eager to apply and expand my knowledge in real-world
        projects.
      </p>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div v-for="group in categorizedTools" :key="group.name">
          <h3
            class="text-xs tracking-wider uppercase mb-2 text-center md:text-left"
            :class="group.heading"
          >
            {{ group.name }}
          </h3>
          <ul class="flex flex-wrap justify-center md:justify-start gap-2">
            <li
              v-for="tool in group.tools"
              :key="tool"
              class="text-xs px-2 py-1 rounded border"
              :class="group.badge"
            >
              {{ tool }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
    <div
      v-for="project in projects"
      :key="project.title"
      class="p-4 rounded-lg border border-slate-700 bg-slate-900/70"
    >
      <img :src="project.img" alt="Project" class="w-full rounded-md mb-4 border border-slate-700" />
      <h3 class="text-xl font-semibold text-slate-100">{{ project.title }}</h3>
      <p class="text-slate-300 mt-2">{{ project.shortDescription }}</p>
    </div>
  </section>
</template>
<style></style>
