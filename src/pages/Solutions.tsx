import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Microscope, Brain, Users, Leaf } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: Microscope,
      gradient: "from-blue-500 to-purple-600",
      title: "Biotech Innovation",
      description: "Next-generation biotechnology solutions for pharmaceutical and life sciences",
      areas: [
        {
          title: "Gene Therapy",
          description: "Advanced gene editing and therapy development platforms",
        },
        {
          title: "Protein Engineering",
          description: "Custom protein design and optimization services",
        },
        {
          title: "Drug Discovery",
          description: "Accelerated drug development and screening platforms",
        },
      ],
    },
    {
      icon: Brain,
      gradient: "from-teal-500 to-blue-600",
      title: "AI for Laboratories",
      description: "Intelligent laboratory automation and AI-powered research acceleration",
      areas: [
        {
          title: "Smart Automation",
          description: "Robotic systems with intelligent decision-making capabilities",
        },
        {
          title: "Predictive Analytics",
          description: "Machine learning models for research outcome prediction",
        },
        {
          title: "Data Mining",
          description: "Advanced algorithms for pattern discovery in complex datasets",
        },
      ],
    },
    {
      icon: Users,
      gradient: "from-purple-500 to-pink-600",
      title: "Clinical Research Excellence",
      description: "Comprehensive clinical trial support and medical research services",
      areas: [
        {
          title: "Trial Design",
          description: "Expert protocol development and study design optimization",
        },
        {
          title: "Regulatory Affairs",
          description: "FDA and international regulatory compliance support",
        },
        {
          title: "Patient Recruitment",
          description: "Strategic patient enrollment and retention programs",
        },
      ],
    },
    {
      icon: Leaf,
      gradient: "from-green-500 to-teal-600",
      title: "Sustainable Science",
      description: "Eco-friendly laboratory practices and green chemistry solutions",
      areas: [
        {
          title: "Green Chemistry",
          description: "Environmentally friendly chemical processes and methodologies",
        },
        {
          title: "Waste Reduction",
          description: "Innovative waste minimization and recycling programs",
        },
        {
          title: "Energy Efficiency",
          description: "Sustainable laboratory design and energy management systems",
        },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized expertise across multiple scientific domains, delivering
            innovative solutions that address complex research challenges.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div key={solution.title} variants={fadeInUp}>
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`bg-gradient-to-r ${solution.gradient} text-white w-16 h-16 rounded-full flex items-center justify-center mr-6`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{solution.title}</h2>
                        <p className="text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {solution.areas.map((area) => (
                        <div key={area.title}>
                          <h3 className="font-semibold mb-2">{area.title}</h3>
                          <p className="text-sm text-muted-foreground">{area.description}</p>
                        </div>
                      ))}
                    </div>
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
