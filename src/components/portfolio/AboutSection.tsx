import { Code2, GraduationCap, Briefcase, Award } from "lucide-react";

const highlights = [
  { icon: Briefcase, value: "3+", label: "Years Experience" },
  { icon: Code2, value: "50+", label: "Projects Completed" },
  { icon: GraduationCap, value: "200+", label: "Students Trained" },
  { icon: Award, value: "15+", label: "Happy Clients" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Passionate about <span className="gradient-text">building & teaching</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About text */}
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                I'm a versatile developer and technical trainer based in India with over 3 years of hands-on experience
                in Python development, freelance web application development, and technical training.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey began with a deep curiosity for how things work behind the screen. Since then, I've built
                everything from automation scripts and REST APIs to full-stack web applications for startups and
                small businesses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a trainer, I've conducted workshops and bootcamps on Python, Django, React, and web development
                fundamentals, helping over 200 aspiring developers kickstart their careers.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {["Python", "Django", "React", "JavaScript", "PostgreSQL", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <item.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-foreground">{item.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
