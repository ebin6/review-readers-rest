import { Link } from "react-router-dom";
import { Book, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Book className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-semibold">BookReview</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Discover your next favorite book. Read reviews from fellow book lovers 
              and share your thoughts on the stories that move you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/books" className="text-sm text-muted-foreground hover:text-foreground transition-elegant">
                  All Books
                </Link>
              </li>
              <li>
                <Link to="/authors" className="text-sm text-muted-foreground hover:text-foreground transition-elegant">
                  Authors
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-elegant">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-md bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-elegant"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-elegant"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BookReview. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
