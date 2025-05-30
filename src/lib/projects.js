// Sample project data
const projects = [
  {
    slug: "r-pandey-and-associates",
    title: "R Pandey and Associates",
    description:
      "R. Pandey & Associates, one of the leading chartered accountants firm in Nepal.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    image: "/images/rpa-associate.png",
    link: "https://rpanepal.com.np/",
    featured: true,
  },
  {
    slug: "maya-party-place",
    title: "Maya Party Place",
    description:
      "Maya party palace is one of the best and growing party palace in Kanchanpur.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/maya-party-palace.png",
    link: "https://dreamy-noyce-adaddb.netlify.app/",
    featured: true,
  },
  {
    slug: "construction-company",
    title: "Construction Company",
    description:
      "A construction company website showcasing services and projects.",
    tags: ["React", "Firebase", "Material UI"],
    image: "/images/construction.png",
    link: "https://www.youtube.com/watch?v=f3Qv4qa1w0A&ab_channel=KapilDevPant",
    featured: true,
  },
  {
    slug: "notes-app",
    title: "Notes App",
    description:
      "A simple notes app to view, read, and upload notes with a user-friendly interface.",
    tags: ["React", "Firebase", "Material UI"],
    image: "/images/university-images/notes.png",
    link: "/universities",
    // github: "https://www.github.com/yourusername/task-manager",
    featured: true,
  },
];

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
