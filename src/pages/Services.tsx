import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Dna, Bot, FlaskConical, TestTubeDiagonal, Leaf, TrendingUp, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Dna,
      title: "Biotech Research & Development",
      description:
        "Advanced biotechnology research services including genetic analysis, protein engineering, and drug discovery platforms.",
      features: [
        "Genomic sequencing and analysis",
        "Protein structure determination",
        "Drug screening platforms",
      ],
    },
    {
      icon: Bot,
      title: "AI Laboratory Solutions",
      description:
        "Intelligent automation and AI-powered analytics to optimize laboratory workflows and enhance data processing capabilities.",
      features: [
        "Automated data analysis",
        "Predictive modeling",
        "Workflow optimization",
      ],
    },
    {
      icon: FlaskConical,
      title: "Clinical Research Support",
      description:
        "Comprehensive clinical trial support and regulatory compliance services for medical research and pharmaceutical development.",
      features: [
        "Clinical trial design",
        "Regulatory compliance",
        "Data management",
      ],
    },
    {
      icon: TestTubeDiagonal,
      title: "Chemical Analysis",
      description:
        "Precision chemical analysis and testing services using state-of-the-art instrumentation and methodologies.",
      features: [
        "Spectroscopy analysis",
        "Chromatography testing",
        "Quality assurance",
      ],
    },
    {
      icon: Leaf,
      title: "Environmental Testing",
      description:
        "Comprehensive environmental monitoring and testing services to ensure compliance and sustainability.",
      features: [
        "Water quality testing",
        "Air quality monitoring",
        "Soil contamination analysis",
      ],
    },
    {
      icon: TrendingUp,
      title: "Data Analytics & Consulting",
      description:
        "Expert data analysis and scientific consulting services to help you derive meaningful insights from your research.",
      features: [
        "Statistical analysis",
        "Research strategy",
        "Project management",
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive laboratory solutions designed to accelerate your research
            and drive innovation across multiple scientific disciplines.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="service-card h-full hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="text-primary text-4xl mb-6">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="text-primary font-medium hover:underline"
                      data-testid={`service-learn-more-${index}`}
                    >
                      Learn More →
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
