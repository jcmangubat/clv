import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import CountUp from "react-countup";
import React from "react";

function HeroSection() {
  return (
    <section
      className="relative flex items-center bg-blue-50"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <div className="absolute inset-0 gradient-bg" />
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-lighten opacity-30"
        style={{
          backgroundImage: "url('/assets/images/central-lab-002.jpg')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Welcome Heading */}
        <motion.div
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="text-left mb-12">
            <h1 className="text-9xl md:text-6xl font-extrabold text-gray-50">
              WELCOME TO CENTRAL LAB
            </h1>
            <p className="mt-2 text-3xl text-blue-100">
              We are your Trusted Lab Partner in Davao City
              <br /> We are innovating scientific solutions to give you accurate
              diagnostic services.
            </p>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Why Choose Box */}
          <div className="lg:col-span-4 flex">
            <motion.div
              initial={{ scale: 0.25 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 0.5,
                ease: "backOut",
              }}
            >
              <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 flex flex-col justify-between w-full">
                <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
                  Why Choose Us?
                </h3>
                <p className="text-base lg:text-lg mb-8 leading-relaxed">
                  We provide cutting-edge laboratory solutions powered by
                  advanced technology and expert professionals. With a
                  commitment to accuracy, speed, and innovation, we ensure
                  reliable results that empower better decisions.
                </p>
                <div className="text-center mt-auto">
                  <a
                    href="#about"
                    className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-5 py-2 rounded-full transition"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Icon Boxes */}
          <div className="lg:col-span-8 flex items-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {/* Card 1 */}
              <motion.div
                initial={{ scale: 0.25 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-blue-900 mb-2">
                    Accurate & Reliable Results
                  </h4>
                  <p className="text-gray-600 text-sm">
                    To have become{" "}
                    <strong>
                      DOH-Certified Labs with ISO 15189 Compliance
                    </strong>
                    , our advanced testing ensures precision and consistency,
                    giving you results you can trust every time.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ scale: 0.25 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-blue-900 mb-2">
                    Fast Turnaround Time
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We deliver results quickest at 24–48 Hours for Most Major
                    Clinical Tests—minimizing wait times and uncertainty
                    ensuring you have the insights you need without unnecessary
                    delays.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ scale: 0.25 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-blue-900 mb-2">
                    Professional Insights
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Abnormal results? Urgent cases? Our team contacts you
                    directly, explains next steps, and coordinates with your
                    doctor. We don’t just report data—we partner in your care.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "backOut",
            type: "spring",
            stiffness: 50,
          }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
        >
          <Card className="stats-card bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <CountUp
                end={15}
                duration={10}
                suffix="+"
                className="text-6xl font-bold mb-2"
              />
              <div className="text-sm opacity-80">Years Experience</div>
            </CardContent>
          </Card>

          <Card className="stats-card bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <CountUp
                end={200}
                duration={5}
                suffix="+"
                className="text-6xl font-bold mb-2"
              />
              <div className="text-sm opacity-80">Global Partners</div>
            </CardContent>
          </Card>

          <Card className="stats-card bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <CountUp
                end={500}
                duration={5}
                suffix="+"
                className="text-6xl font-bold mb-2"
              />
              <div className="text-sm opacity-80">Completed Projects</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
