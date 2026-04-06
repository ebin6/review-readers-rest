const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "Django / Flask", level: 90 },
      { name: "React.js", level: 80 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "PostgreSQL / MySQL", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "Linux / CLI", level: 80 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Technical Training", level: 95 },
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 88 },
      { name: "Team Collaboration", level: 85 },
      { name: "Project Management", level: 78 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary uppercase tracking-wider">Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              My <span className="gradient-text">tech stack</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-card border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h3 className="text-lg font-bold mb-6 text-foreground">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full gradient-bg transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
