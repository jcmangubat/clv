import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Microscope, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You have been successfully subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-muted border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Microscope className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Central Lab Ventures</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Innovating scientific solutions for a better tomorrow through
              cutting-edge research and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" data-testid="social-linkedin">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="social-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="social-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="social-youtube">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Biotech Research</span>
              </li>
              <li>
                <span className="text-muted-foreground">AI Laboratory Solutions</span>
              </li>
              <li>
                <span className="text-muted-foreground">Clinical Research</span>
              </li>
              <li>
                <span className="text-muted-foreground">Environmental Testing</span>
              </li>
              <li>
                <span className="text-muted-foreground">Data Analytics</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest research insights and
              company news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="newsletter-email"
              />
              <Button type="submit" className="w-full" data-testid="newsletter-submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Central Lab Ventures. All rights reserved. |{" "}
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
