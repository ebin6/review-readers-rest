import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Freelance Web Application Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2023 – Present",
    description:
      "Building custom web applications for startups and small businesses using Django, React, and PostgreSQL. Delivered 20+ projects including e-commerce platforms, booking systems, and internal dashboards.",
    tags: ["Django", "React", "PostgreSQL", "REST API", "Docker"],
  },
  {
    role: "Python Developer",
    company: "TechSphere Solutions",
    location: "Bangalore, India",
    period: "Jun 2022 – Dec 2022",
    description:
      "Developed automation scripts, data pipelines, and backend services in Python. Collaborated with cross-functional teams to deliver scalable solutions for fintech clients.",
    tags: ["Python", "Flask", "Pandas", "AWS", "CI/CD"],
  },
  {
    role: "Technical Trainer",
    company: "CodeCraft Academy",
    location: "Kochi, India",
    period: "Mar 2021 – May 2022",
    description:
      "Conducted instructor-led bootcamps on Python, Django, and web development. Designed curriculum and mentored 200+ students, with an 85% placement rate.",
    tags: ["Python", "Django", "JavaScript", "Teaching", "Curriculum Design"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary uppercase tracking-wider">Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              My <span className="gradient-text">journey</span> so far
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full gradient-bg border-4 border-background -translate-x-[7px] md:-translate-x-[8px] mt-6 z-10" />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-6 md:ml-0 md:w-1/2 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors ${
                      index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                    }`}
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium text-sm mt-1">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {exp.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
