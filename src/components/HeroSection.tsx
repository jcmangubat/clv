import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import CountUp from "react-countup";
import React from "react";
import RandomRotatedDiv from "./RandomRotateDiv";
import BouncingRotatedDiv from "./BouncingRotateDiv";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      className="relative flex items-center bg-blue-50"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <div className="absolute inset-0 overflow-hidden gradient-bg">
        {/* <RandomRotatedDiv /> */}
        <BouncingRotatedDiv />
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-lighten opacity-30"
        style={{
          backgroundImage: "url('/assets/images/central-lab-001.jpg')",
        }}
      />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Welcome Heading */}
        <motion.div
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="text-left mb-12">
            <h1
              className="text-9xl md:text-6xl font-extrabold text-gray-50 
       drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] 
       dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            >
              WELCOME TO CENTRAL LAB
            </h1>
            <p
              className="mt-2 text-3xl text-blue-100 
       drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] 
       dark:drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]"
            >
              We are your Trusted Lab Partner in Davao City
              <br /> We are innovating scientific solutions to give you accurate
              diagnostic services.
            </p>

            {/* Accreditation Badges */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Link to="/certificates" className="cursor-pointer">
                <Badge
                  variant="secondary"
                  className="gap-2 px-4 py-2 shadow-md hover:shadow-xl transition hover:scale-105 cursor-pointer"
                >
                  <img
                    src="/assets/badges/doh.png"
                    alt="DOH Licensed"
                    className="w-5 h-5 object-contain"
                  />
                  <span>DOH Licensed</span>
                </Badge>
              </Link>

              <Link to="/certificates" className="cursor-pointer">
                <Badge
                  variant="secondary"
                  className="gap-2 px-4 py-2 shadow-md hover:shadow-xl transition hover:scale-105 cursor-pointer"
                >
                  <img
                    src="/assets/badges/ISO-15189.png"
                    alt="DOH Licensed"
                    className="w-5 h-5 object-contain"
                  />
                  <span>ISO 15189 Accredited</span>
                </Badge>
              </Link>

              <Link to="/certificates" className="cursor-pointer">
                <Badge
                  variant="secondary"
                  className="gap-2 px-4 py-2 shadow-md hover:shadow-xl transition hover:scale-105 cursor-pointer"
                >
                  <img
                    src="/assets/badges/Philhealth-logo.png"
                    alt="PhilHealth Accredited"
                    className="w-5 h-5 object-contain"
                  />
                  <span>PhilHealth Accredited</span>
                </Badge>
              </Link>

              <Link to="/certificates" className="cursor-pointer">
                <Badge
                  variant="secondary"
                  className="gap-2 px-4 py-2 shadow-md hover:shadow-xl transition hover:scale-105 cursor-pointer"
                >
                  <img
                    src="/assets/badges/iso-9001.png"
                    alt="ISO 9001 Certified"
                    className="w-5 h-5 object-contain"
                  />
                  <span>ISO 9001 Certified</span>
                </Badge>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-4">
          {/* Why Choose Box */}
          <div className="lg:col-span-4 flex hover:scale-105">
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
              <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between w-full">
                <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
                  Why Choose Us?
                </h3>
                <p className="text-base lg:text-lg mb-8 leading-relaxed">
                  We provide cutting-edge laboratory solutions powered by
                  advanced technology and expert professionals. With a
                  commitment to accuracy, speed, and innovation, we ensure
                  reliable results that empower better decisions.
                </p>
                <div className="flex justify-center gap-4 mt-auto">
                  {/* First button - Learn More */}
                  <Link
                    to="/about"
                    className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-5 py-2 rounded-full transition transition transform hover:scale-105"
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
                  </Link>

                  {/* Second button - Book Appointment (orange) */}
                  <Link
                    to="/booking"
                    className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2 rounded-full transition transition transform hover:scale-105"
                  >
                    Book Now!
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
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Icon Boxes */}
          <div className="lg:col-span-8 flex items-center">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {/* Card 1 */}
              <motion.div
                initial={{ scale: 0.25 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105">
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
                    As a{" "}
                    <strong>
                      DOH-certified laboratory with ISO 15189 compliance
                    </strong>
                    , we uphold the highest standards of accuracy and
                    reliability. Our advanced technology and strict quality
                    practices ensure precise, consistent results you can trust
                    for confident decision-making.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ scale: 0.25 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105">
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
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105">
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
