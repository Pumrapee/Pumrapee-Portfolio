<script setup>
import { computed } from "vue";
import {
  CATEGORY_ORDER,
  getCategoryStyle,
  getToolCategory,
} from "../utils/toolCategories";

const toolsUsed = [
  "Go",
  "Java",
  "Spring Boot",
  "gRPC",
  "Protocol Buffers",
  "PostgreSQL",
  "Docker",
  "GitLab CI/CD",
  "AWS S3",
  "Redis",
];

const categorizedTools = computed(() => {
  const grouped = {};
  CATEGORY_ORDER.forEach((category) => {
    grouped[category] = [];
  });

  toolsUsed.forEach((tool) => {
    grouped[getToolCategory(tool)].push(tool);
  });

  return CATEGORY_ORDER.filter((category) => grouped[category].length > 0).map(
    (category) => ({
      name: category,
      tools: grouped[category],
      ...getCategoryStyle(category),
    })
  );
});
</script>

<template>
  <section class="container mx-auto p-4 md:p-8">
    <h2 class="text-3xl font-bold mb-6 text-cyan-300">Work Experience</h2>

    <div class="rounded-xl border border-cyan-400/20 bg-slate-900/70 p-6 md:p-8">
      <p class="text-xs tracking-widest text-cyan-300 mb-2">JAN 6, 2025 - JUL 31, 2025</p>
      <h3 class="text-2xl font-semibold text-slate-100">Backend Engineer Intern</h3>
      <p class="text-base text-slate-300 mt-1 mb-4">Bluebik Company</p>
      <p class="text-sm text-slate-400 mb-5">AOA team under Blueplus+ (Orbit Digital)</p>

      <div class="space-y-4 text-slate-300 leading-relaxed">
        <p>
          Contributed to a multi-service backend ecosystem for the AOA platform, with domain services
          such as account, mission, campaign, partner, merchant, notification, payment, and
          transaction reporting.
        </p>

        <ul class="list-disc pl-5 space-y-2">
          <li>Worked in a microservices architecture using Go and Java services.</li>
          <li>Built and integrated gRPC APIs with shared protobuf contracts.</li>
          <li>Handled PostgreSQL-backed services and SQL migration workflows.</li>
          <li>Supported BFF-to-service integration for mobile application requests.</li>
          <li>Used Docker, Make-based workflows, and GitLab pipelines for delivery.</li>
        </ul>

        <div class="pt-2">
          <h4 class="text-slate-100 font-semibold mb-3">Tools Used</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div v-for="group in categorizedTools" :key="group.name">
              <p class="text-[10px] uppercase tracking-wider mb-1" :class="group.heading">
                {{ group.name }}
              </p>
              <ul class="flex flex-wrap gap-1">
                <li
                  v-for="tool in group.tools"
                  :key="tool"
                  class="text-xs border px-2 py-1 rounded"
                  :class="group.badge"
                >
                  {{ tool }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
