<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-4 pt-20 pb-16">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
<style>
@import 'tailwindcss/tailwind.css';
</style>
