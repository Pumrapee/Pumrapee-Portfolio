<script setup>
import Projects from "@/views/Projects.vue";
import { defineProps } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  project: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);
const closeModal = () => {
  emit("close");
};
</script>

<template>
  <teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 modal-content relative">
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <h3 class="text-xl font-semibold mb-4">{{ project.title }}</h3>
        <img
          :src="project.img"
          alt="Project Image"
          class="modal-image mb-4 rounded-lg"
        />
        <p class="text-gray-700">{{ project.fullDescription }}</p>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal-content {
  max-height: 80vh; /* Maximum height of the modal */
  max-width: 60%; /* Optional: set a maximum width */
  overflow-y: auto; /* Enable vertical scrolling */
  padding-right: 1rem; /* Add padding for scrollbar visibility */
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 90%;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .modal-content {
    max-width: 95%;
    padding: 0.5rem;
  }
}

.modal-image {
  width: 100%;
  height: auto; /* Maintain aspect ratio of the image */
}
</style>
