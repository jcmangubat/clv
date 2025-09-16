import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Microscope,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  TestTube,
  Calendar
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You've been successfully subscribed to our newsletter.",
        variant: "default",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 pt-12 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="">
                {/* <Microscope className="h-7 w-7 text-white" /> */}
                <img src='/assets/images/logo-01.png' width="40"></img>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Central Lab Ventures, Inc.
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Davao City, Philippines
                </p>
              </div>
            </div>

            <div className="mb-6 p-4 rounded-lg border border-blue-100 dark:border-blue-800/50 bg-blue-50 dark:bg-blue-900/30 transition-colors duration-300">
              <div className="flex items-start space-x-2">
                <Users className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-300">
                    Classification
                  </p>
                  <p className="font-bold text-blue-900 dark:text-blue-200">
                    Non-Institution Based, Tertiary
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2 mb-2 mt-2">
                <Award className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-300">
                    DOH License No.
                  </p>
                  <p className="font-bold text-blue-900 dark:text-blue-200">
                    14-0022-24-CL-8
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2 mb-2">
                <Calendar className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-300">
                    Validity
                  </p>
                  <p className="font-bold text-blue-900 dark:text-blue-200">
                    01 January 2025 - 31 December 2025
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Providing accurate diagnostic services and innovative laboratory
              solutions for healthcare providers and communities across Mindanao
              since 2010.
            </p>

            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Services",
                "Accreditations",
                "Careers",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-slate-400 dark:bg-slate-500 rounded-full mr-2"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Clinical Pathology",
                "Microbiology Testing",
                "Molecular Diagnostics",
                "Corporate Health Packages",
                "Specialized Testing",
              ].map((service) => (
                <li key={service} className="flex items-start">
                  <TestTube className="h-4 w-4 text-blue-500 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
              Contact Us
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 dark:text-slate-300">
                    J.P. Laurel Ave, Bajada
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Davao City, 8000
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+63822345678"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  (082) 234-5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@centrallabventures.com"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  info@centrallabventures.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 dark:text-slate-300">
                    Mon-Fri: 8AM-5PM
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    Sat: 8AM-12PM
                  </p>
                </div>
              </li>
            </ul>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg transition-colors duration-300">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                Stay Updated
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                Subscribe to our newsletter for health tips and updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background dark:bg-background transition-colors"
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-700 transition-colors"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Central Lab Ventures, Inc. All
            rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "HIPAA Compliance"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>

        <div className="text-center text-xs mt-4 text-slate-500 dark:text-slate-400 transition-colors duration-300">
          <p>
            Made with ❤ by{" "}
            <Link
              to="#"
              className="text-blue-500 dark:hover:text-blue-400 hover:text-blue-700 transition-colors"
            >
              AppCura IT Ventures
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
