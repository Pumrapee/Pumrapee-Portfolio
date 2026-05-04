<script setup>
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
      class="fixed inset-0 bg-slate-950/80 flex items-center justify-center z-50 px-4"
    >
      <div class="rounded-lg border border-cyan-400/30 bg-slate-900 shadow-lg p-6 modal-content relative">
        <button
          @click="closeModal"
          class="absolute top-2 right-3 text-slate-400 hover:text-cyan-300 text-xl"
        >
          &times;
        </button>
        <h3 class="text-xl font-semibold mb-4 text-cyan-300">{{ project.title }}</h3>
        <img
          :src="project.img"
          alt="Project Image"
          class="modal-image mb-4 rounded-lg border border-slate-700"
        />
        <p class="text-slate-300">{{ project.fullDescription }}</p>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal-content {
  max-height: 80vh;
  max-width: 60%;
  overflow-y: auto;
  padding-right: 1rem;
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
  height: auto;
}
</style>
