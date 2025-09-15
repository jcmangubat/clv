import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  const timeline = [
    {
      year: "2008",
      title: "Foundation",
      description:
        "Central Lab Ventures was founded with a vision to revolutionize laboratory research and development.",
    },
    {
      year: "2012",
      title: "First Major Partnership",
      description:
        "Established partnerships with leading pharmaceutical companies, expanding our research capabilities.",
    },
    {
      year: "2016",
      title: "AI Integration",
      description:
        "Pioneered the integration of artificial intelligence in laboratory automation and data analysis.",
    },
    {
      year: "2020",
      title: "Global Expansion",
      description:
        "Expanded operations globally with research facilities across five continents.",
    },
    {
      year: "2024",
      title: "Sustainable Innovation",
      description:
        "Launched our sustainable science initiative, focusing on eco-friendly laboratory practices.",
    },
  ];

  const stats = [
    { number: "50+", label: "Patents Filed" },
    { number: "200+", label: "Research Collaborations" },
    { number: "1000+", label: "Innovations Delivered" },
    { number: "25", label: "Countries Served" },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Central Lab Ventures</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering scientific innovation for over 15 years, we transform complex
            research challenges into breakthrough solutions that advance human knowledge
            and improve lives globally.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To accelerate scientific discovery through innovative laboratory solutions
              and strategic partnerships that drive meaningful progress in research and
              development.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the global leader in laboratory innovation, creating a world where
              scientific breakthroughs happen faster, more efficiently, and with greater
              impact.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Excellence, integrity, collaboration, and innovation guide everything we
              do. We believe in ethical science and sustainable practices that benefit
              all.
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center"
              >
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold mr-6">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Counters */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp}>
              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
