import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anitha Menon",
    role: "Founder, GreenCart",
    text: "Ebin built our entire e-commerce platform from scratch. He was professional, responsive, and delivered on time. Our online sales increased by 40% within the first month!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Rahul Sharma",
    role: "CTO, FinEdge Technologies",
    text: "Ebin's Python expertise is top-notch. He automated our reporting pipeline and saved us 20 hours per week. A reliable developer who truly understands backend architecture.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Priya Nair",
    role: "Student, CodeCraft Academy",
    text: "Ebin is the best trainer I've had. He explains complex concepts simply and patiently. Thanks to his bootcamp, I landed my first developer job within 3 months!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              What people <span className="gradient-text">say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors relative"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-bold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
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
