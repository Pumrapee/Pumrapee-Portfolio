<template>
  <header class="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-md z-10">
    <div class="container mx-auto flex justify-between">
      <div class="text-white font-bold text-xl">Portfolio</div>
      <nav class="flex space-x-4">
        <router-link to="/" class="text-white hover:text-gray-300">Home</router-link>
        <router-link to="/about" class="text-white hover:text-gray-300">About</router-link>
        <router-link to="/projects" class="text-white hover:text-gray-300">Projects</router-link>
        <router-link to="/education" class="text-white hover:text-gray-300">Education</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
nav ul li a:hover {
  color: #4ade80;
}
</style>
