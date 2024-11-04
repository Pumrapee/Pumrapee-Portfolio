<script setup>
import { ref } from "vue";
import ProjectCard from "../components/ProjectCard.vue";
import ProjectModal from "../components/ProjectModal.vue";
import projectsData from "../assets/projects-data.json";

const projects = ref(projectsData);
const isModalOpen = ref(false);
const selectedProject = ref(null);

const openProjectModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeProjectModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
};
</script>

<template>
  <section class="container mx-auto p-8">
    <h2 class="text-3xl font-bold mb-4">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        @open-modal="openProjectModal"
      />
    </div>

    <ProjectModal
      :isOpen="isModalOpen"
      :project="selectedProject || {}"
      @close="closeProjectModal"
    />
  </section>
</template>
