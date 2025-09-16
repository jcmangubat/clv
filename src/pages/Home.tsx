import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";
import {
  Dna,
  Bot,
  FlaskConical,
  Microscope,
  Brain,
  Users,
  Leaf,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import SolutionsPreview from "@/components/SolutionsPreview";
import DepartmentsSection from "@/components/DepartmentsSection";
import CommunityCarePreview from "@/components/CommunityCarePreview";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <ServicesPreview />

      <CommunityCarePreview />

      {/* Solutions Preview */}
      <SolutionsPreview />

      <ReviewsSection />

      {/* Departments Section */}
      <DepartmentsSection />
    </div>
  );
}
