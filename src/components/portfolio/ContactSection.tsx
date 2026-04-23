import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const [submitting, setSubmitting] = useState(false);

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScQGYToFjZjG75Rr07Y_tam2mN1Q7uc-idpRxXlDkAfdyYKdQ/formResponse";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const body = new FormData();
      body.append("entry.1222672494", formData.name);
      body.append("entry.1307432019", formData.email);
      body.append("entry.576013532", formData.message);

      // Google Forms doesn't return CORS headers, so use no-cors.
      // The request still reaches Google and the response is recorded.
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary uppercase tracking-wider">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Let's <span className="gradient-text">connect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, freelance opportunities, or training collaborations. Drop me a message!
              </p>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "ebin.dev@gmail.com", href: "mailto:ebin.dev@gmail.com" },
                  { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: MapPin, label: "Kochi, Kerala, India", href: "#" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card"
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-card resize-none"
              />
              <Button type="submit" disabled={submitting} className="w-full gradient-bg hover:opacity-90">
                <Send className="h-4 w-4 mr-2" />
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
