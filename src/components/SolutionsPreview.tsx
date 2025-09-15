import { staggerContainer, fadeInUp, scaleOnHover } from "@/lib/animations";
import { motion } from "framer-motion";
import { Microscope, Brain, Users, Leaf} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function SolutionsPreview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Expert Solutions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Specialized expertise across multiple scientific domains
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div
            variants={scaleOnHover}
            whileHover="hover"
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Microscope className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Biotech Innovation</h3>
            <p className="text-sm text-muted-foreground">
              Next-generation biotechnology solutions
            </p>
          </motion.div>

          <motion.div
            variants={scaleOnHover}
            whileHover="hover"
            className="text-center"
          >
            <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">AI for Labs</h3>
            <p className="text-sm text-muted-foreground">
              Intelligent laboratory automation
            </p>
          </motion.div>

          <motion.div
            variants={scaleOnHover}
            whileHover="hover"
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Clinical Research</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive clinical trial support
            </p>
          </motion.div>

          <motion.div
            variants={scaleOnHover}
            whileHover="hover"
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Sustainable Science</h3>
            <p className="text-sm text-muted-foreground">
              Eco-friendly laboratory practices
            </p>
          </motion.div>
        </motion.div>

        {/* 🔗 Bottom "See All" Link */}
        <div className="text-center mt-12">
          <Link
            to="/solutions"
            className="inline-block text-lg font-semibold text-primary hover:underline"
          >
            See All Solutions →
          </Link>
        </div>
        
      </div>
    </section>
  );
}

export default SolutionsPreview;
