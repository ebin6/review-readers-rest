import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 animate-fade-up">
            <div className="w-32 h-32 mx-auto rounded-full gradient-bg p-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Ebin - Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Status badge */}
          <div className="animate-fade-up-delay-1">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for freelance work
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-up-delay-2 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Ebin</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl font-medium">
              Developer & Trainer
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up-delay-3 leading-relaxed">
            Python Developer · Freelance Web Application Developer · Technical Trainer
            <br className="hidden sm:block" />
            with 3+ years of experience building scalable solutions.
          </p>

          {/* CTA & Social */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              Let's Work Together
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-8 animate-fade-up-delay-4">
            {[
              { icon: Github, href: "https://github.com/ebin", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/ebin", label: "LinkedIn" },
              { icon: Mail, href: "mailto:ebin.dev@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
