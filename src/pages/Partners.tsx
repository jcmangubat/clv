import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Building, University, Hospital, Zap, FlaskConical, Dna, TrendingUp, Handshake, Users, Rocket } from "lucide-react";

export default function Partners() {
  const partners = [
    { icon: Building, name: "Pharma Corp" },
    { icon: University, name: "Research Inst." },
    { icon: Hospital, name: "Medical Center" },
    { icon: Zap, name: "BioTech Inc." },
    { icon: FlaskConical, name: "Lab Solutions" },
    { icon: Dna, name: "Gene Labs" },
  ];

  const caseStudies = [
    {
      icon: TrendingUp,
      title: "Accelerated Drug Discovery",
      description:
        "Partnered with a leading pharmaceutical company to reduce drug discovery timelines by 40% through AI-powered screening platforms and automated laboratory workflows.",
      metric: "40% faster discovery",
    },
    {
      icon: Users,
      title: "Clinical Trial Optimization",
      description:
        "Collaborated with a major medical center to streamline clinical trial processes, improving patient recruitment by 60% and reducing trial duration by 25%.",
      metric: "60% better recruitment",
    },
    {
      icon: FlaskConical,
      title: "Sustainable Lab Operations",
      description:
        "Implemented green chemistry practices at a biotech startup, reducing chemical waste by 50% while maintaining research quality and accelerating innovation timelines.",
      metric: "50% waste reduction",
    },
    {
      icon: Dna,
      title: "AI-Powered Analytics",
      description:
        "Developed custom machine learning models for a research institute, enabling breakthrough discoveries in protein folding with 70% improved prediction accuracy.",
      metric: "70% improved accuracy",
    },
  ];

  const partnershipTypes = [
    {
      icon: Handshake,
      title: "Strategic Alliances",
      description:
        "Long-term partnerships focused on joint innovation and technology development across multiple research areas.",
    },
    {
      icon: Users,
      title: "Research Collaborations",
      description:
        "Collaborative research projects with academic institutions and industry leaders to advance scientific knowledge.",
    },
    {
      icon: Rocket,
      title: "Innovation Partnerships",
      description:
        "Joint ventures and startup incubations focused on bringing cutting-edge technologies to market.",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partners & Collaborations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic partnerships with leading organizations worldwide, driving
            collaborative innovation and scientific excellence.
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {partners.map((partner) => {
              const IconComponent = partner.icon;
              return (
                <div key={partner.name} className="bg-muted rounded-lg p-6 text-center">
                  <IconComponent className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <div className="text-sm font-medium">{partner.name}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-center mb-12">
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => {
              const IconComponent = study.icon;
              return (
                <motion.div key={study.title} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="text-primary text-3xl mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                      <p className="text-muted-foreground mb-4">{study.description}</p>
                      <div className="flex items-center text-sm text-primary">
                        <span className="font-medium">{study.metric}</span>
                        <span className="ml-2">→</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Partnership Types */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {partnershipTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <motion.div key={type.title} variants={fadeInUp} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
