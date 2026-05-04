export const CATEGORY_ORDER = [
  "Backend",
  "Frontend",
  "Database",
  "Monitoring",
  "DevOps",
  "Testing",
  "Tools",
  "Design",
  "Other",
];

const TOOL_CATEGORY_MAP = {
  Java: "Backend",
  Go: "Backend",
  "Spring Boot": "Backend",
  "Node.js": "Backend",
  "Express.js": "Backend",
  gRPC: "Backend",
  "Protocol Buffers": "Backend",
  Python: "Backend",
  Javascript: "Frontend",
  "Vue.js": "Frontend",
  MySQL: "Database",
  PostgreSQL: "Database",
  MongoDB: "Database",
  Redis: "Database",
  InfluxDB: "Database",
  Prometheus: "Monitoring",
  Grafana: "Monitoring",
  Docker: "DevOps",
  Ansible: "DevOps",
  "GitLab CI/CD": "DevOps",
  "AWS S3": "DevOps",
  k6: "Testing",
  Git: "Tools",
  Canva: "Design",
  "Linux CLI": "Tools",
};

const CATEGORY_STYLES = {
  Backend: {
    heading: "text-emerald-300",
    badge: "border-emerald-400/40 bg-emerald-950/40 text-emerald-200",
  },
  Frontend: {
    heading: "text-sky-300",
    badge: "border-sky-400/40 bg-sky-950/40 text-sky-200",
  },
  Database: {
    heading: "text-violet-300",
    badge: "border-violet-400/40 bg-violet-950/40 text-violet-200",
  },
  Monitoring: {
    heading: "text-orange-300",
    badge: "border-orange-400/40 bg-orange-950/40 text-orange-200",
  },
  DevOps: {
    heading: "text-amber-300",
    badge: "border-amber-400/40 bg-amber-950/40 text-amber-200",
  },
  Testing: {
    heading: "text-rose-300",
    badge: "border-rose-400/40 bg-rose-950/40 text-rose-200",
  },
  Tools: {
    heading: "text-cyan-300",
    badge: "border-cyan-400/40 bg-cyan-950/40 text-cyan-200",
  },
  Design: {
    heading: "text-pink-300",
    badge: "border-pink-400/40 bg-pink-950/40 text-pink-200",
  },
  Other: {
    heading: "text-slate-300",
    badge: "border-slate-400/40 bg-slate-950/40 text-slate-200",
  },
};

export const getToolCategory = (tool) => TOOL_CATEGORY_MAP[tool] || "Other";

export const getCategoryStyle = (category) =>
  CATEGORY_STYLES[category] || CATEGORY_STYLES.Other;
