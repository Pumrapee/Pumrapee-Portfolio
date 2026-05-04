<template>
  <header
    class="fixed top-0 left-0 w-full border-b border-cyan-400/20 bg-slate-950/90 backdrop-blur z-20"
  >
    <div class="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
      <div class="font-bold text-lg tracking-wide text-cyan-300">
        &lt;pumrapee.dev /&gt;
      </div>
      <nav class="flex items-center gap-5 text-sm text-slate-300">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/education" class="nav-link">Education</router-link>
        <router-link to="/work-experience" class="nav-link">Work Experience</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  transition: color 0.2s ease;
}

.nav-link:hover,
.router-link-active {
  color: #67e8f9;
}
</style>
