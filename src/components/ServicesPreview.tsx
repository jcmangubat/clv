import { motion } from "framer-motion";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Bot, Dna, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import { staggerContainer, fadeInUp } from "@/lib/animations";

function ServicesPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent"
          >
            Our Core Services
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive laboratory solutions designed to accelerate
            scientific discovery and innovation
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Biotech Research */}
          <motion.div variants={fadeInUp}>
            <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Biotech Research" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <Dna className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Biotech Research
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Advanced biotechnology research and development services for
                  pharmaceutical and life sciences companies.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Learn More →
                  </Link>
                  <div className="flex -space-x-2">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                      alt="Filipino Scientist" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                      alt="Filipino Researcher" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                      alt="Filipino Biotech Specialist" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Laboratory Solutions */}
          <motion.div variants={fadeInUp}>
            <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="AI Laboratory Solutions" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  AI Laboratory Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Intelligent automation and AI-powered analytics to optimize
                  laboratory workflows and data processing.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                  >
                    Learn More →
                  </Link>
                  <div className="flex -space-x-2">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                      alt="Filipino AI Specialist" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                      alt="Filipino Data Scientist" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                      alt="Filipino Tech Expert" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Clinical Research */}
          <motion.div variants={fadeInUp}>
            <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Clinical Research" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <FlaskConical className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Clinical Research
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Comprehensive clinical trial support and regulatory compliance
                  services for medical research.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                  >
                    Learn More →
                  </Link>
                  <div className="flex -space-x-2">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                      alt="Filipino Medical Researcher" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                      alt="Filipino Clinical Specialist" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                      alt="Filipino Healthcare Professional" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Bottom "See All" Link */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:from-blue-700 hover:to-indigo-700"
          >
            Explore All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesPreview;