import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ShopEase – E-Commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart, payment integration via Razorpay, and admin dashboard. Built for a local retail business.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Django", "React", "PostgreSQL", "Razorpay"],
    github: "https://github.com/ebin/shopease",
    live: "https://shopease-demo.vercel.app",
  },
  {
    title: "LearnHub – LMS Platform",
    description: "A learning management system with course creation, video hosting, quizzes, and progress tracking. Used by 500+ students in online bootcamps.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    tags: ["Django", "JavaScript", "AWS S3", "Stripe"],
    github: "https://github.com/ebin/learnhub",
    live: "https://learnhub-demo.vercel.app",
  },
  {
    title: "TaskFlow – Project Manager",
    description: "A Kanban-style project management tool with real-time updates, team collaboration, and analytics. Built as a freelance project for a tech startup.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/ebin/taskflow",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    title: "DataPulse – Analytics Dashboard",
    description: "An automated data pipeline and dashboard for a fintech client. Processes 100K+ records daily and visualizes KPIs with interactive charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Python", "Pandas", "Flask", "Chart.js"],
    github: "https://github.com/ebin/datapulse",
    live: "",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary uppercase tracking-wider">Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured <span className="gradient-text">work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
