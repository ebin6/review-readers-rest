import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Ebin. Built with <Heart className="h-3 w-3 text-destructive" /> using React & Vite.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/ebin" },
              { icon: Linkedin, href: "https://linkedin.com/in/ebin" },
              { icon: Mail, href: "mailto:ebin.dev@gmail.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
