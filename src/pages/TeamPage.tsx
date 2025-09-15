import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  FlaskConical,
  Briefcase,
  Linkedin,
  Twitter,
  Mail,
  Star,
  Award,
  Stethoscope,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";


interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  category: Category;
}

/* ---------------- Data ---------------- */
const physicians: Physician[] = [
  {
    type: "physician",
    name: "Dr. Maria Lourder Benetiz",
    specialty: "Internal Medicine",
    experience: "24 years",
    education: "University of the Philippines Manila",
    bio: "Specializes in complex internal medicine cases with focus on preventive care.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "physician",
    name: "Dr. Laarni Catotal",
    specialty: "Psychology",
    experience: "17 years",
    education: "Ateneo de Manila University",
    bio: "Expert in cognitive behavioral therapy and mental health counseling.",
    image:
      "https://images.unsplash.com/photo-1650546321210-9d5ee3cffcdd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "physician",
    name: "Dr. Femy Chenfoo",
    specialty: "Dermatology",
    experience: "9 years",
    education: "De La Salle University",
    bio: "Specializes in both medical and cosmetic dermatology treatments.",
    image:
      "https://images.unsplash.com/photo-1650784853783-68052c97ebfb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "physician",
    name: "Dr. Robertito Bartolome",
    specialty: "Gynecology",
    experience: "25 years",
    education: "University of Santo Tomas",
    bio: "Leading expert in diabetes and thyroid disorders management.",
    image:
      "https://images.unsplash.com/photo-1706065264583-55f1a8549769?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "physician",
    name: "Dr. Romy Faustino",
    specialty: "Neurology",
    experience: "32 years",
    education: "University of the Philippines Diliman",
    bio: "Specializes in stroke management and neurodegenerative disorders.",
    image:
      "https://images.unsplash.com/photo-1609562041037-fcab28514e56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "physician",
    name: "Dr. Paul Mendez",
    specialty: "General Medicine",
    experience: "8 years",
    education: "Far Eastern University",
    bio: "Provides comprehensive primary care with focus on family medicine.",
    image:
      "https://images.unsplash.com/photo-1701980889802-55ff39e2e973?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU1fHxmaWxpcGlubyUyMG1lZGljYWwlMjBkb2N0b3J8ZW58MHwwfDB8fHwy",
  },
];

const technicians: Technician[] = [
  {
    type: "technician",
    name: "Anna Lopez",
    role: "Senior Lab Technician",
    experience: "8 years",
    expertise: "Hematology & Microbiology",
    bio: "Leads our special testing department with precision and expertise.",
    image:
      "https://images.unsplash.com/photo-1618053448748-b7251851d014?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "technician",
    name: "Eric Mendez",
    role: "Clinical Lab Analyst",
    experience: "6 years",
    expertise: "Biochemistry & Immunology",
    bio: "Specializes in complex diagnostic procedures and quality control.",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "technician",
    name: "Sophia Ramos",
    role: "Pathology Assistant",
    experience: "4 years",
    expertise: "Histopathology & Cytology",
    bio: "Expert in tissue sample preparation and microscopic analysis.",
    image:
      "https://images.unsplash.com/photo-1684125483810-b4c196bc9162?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const executives: Executive[] = [
  {
    type: "executive",
    name: "Mrs. Vanessa Guillen Ramos, MBA",
    role: "Operations Manager",
    experience: "22 years",
    expertise: "Healthcare Administration",
    bio: "Oversees daily operations and ensures quality service delivery.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "executive",
    name: "Dr. Romy Datilang",
    role: "Chief Executive Officer",
    experience: "29 years",
    expertise: "Strategic Leadership",
    bio: "Provides vision and strategic direction for CLV's growth.",
    image:
      "https://images.unsplash.com/photo-1603775493298-e06a5f21e46c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "executive",
    name: "Ms Maria Pilapil",
    role: "Finance Director",
    experience: "18 years",
    expertise: "Financial Management",
    bio: "Manages financial planning and ensures sustainable growth.",
    image:
      "https://images.unsplash.com/photo-1650784854310-d1db219ecc36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

/* ---------------- Card Component ---------------- */
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  index,
  category,
}) => (
  <motion.div
    variants={fadeInUp}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    custom={index * 0.1}
    className="group relative h-full"
  >
    <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
      <div className="relative overflow-hidden h-64">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="text-white">
            <p className="text-sm font-medium">
              {member.experience} experience
            </p>
            {member.type === "physician" && (
              <p className="text-xs opacity-80">{member.education}</p>
            )}
            {(member.type === "technician" || member.type === "executive") && (
              <p className="text-xs opacity-80">{member.expertise}</p>
            )}
          </div>
        </div>
      </div>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {member.name}
            </CardTitle>
            <div className="flex items-center mt-1">
              {category === "physicians" && (
                <Stethoscope className="h-4 w-4 text-blue-500 dark:text-blue-400 mr-1" />
              )}
              {category === "technicians" && (
                <FlaskConical className="h-4 w-4 text-green-500 dark:text-green-400 mr-1" />
              )}
              {category === "executives" && (
                <Briefcase className="h-4 w-4 text-purple-500 dark:text-purple-400 mr-1" />
              )}
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                {member.type === "physician" ? member.specialty : member.role}
              </span>
            </div>
          </div>
          <div className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {member.experience}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {member.bio}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
              <Mail className="h-5 w-5" />
            </button>
          </div>
          <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium flex items-center">
            View Profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const TeamPage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2 rounded-full mb-6"
          >
            <Users className="h-5 w-5" />
            <span className="text-sm font-medium">Our Team</span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Meet Our <span className="text-blue-600 dark:text-blue-400">Expert Team</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            At Central Lab Ventures (CLV), our strength comes from the expertise
            and dedication of our team. From physicians and laboratory
            technicians to our executive leadership, each member plays a vital
            role in delivering reliable healthcare solutions.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">6</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Expert Physicians</div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Lab Technicians</div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Executive Leaders</div>
          </motion.div>
        </motion.div>

        {/* Physicians Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full">
              <Stethoscope className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Our Physicians</h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {physicians.map((doctor, idx) => (
              <TeamMemberCard
                key={idx}
                member={doctor}
                index={idx}
                category="physicians"
              />
            ))}
          </div>
        </motion.div>

        {/* Laboratory Technicians Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full">
              <FlaskConical className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Laboratory Technicians</h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicians.map((tech, idx) => (
              <TeamMemberCard
                key={idx}
                member={tech}
                index={idx}
                category="technicians"
              />
            ))}
          </div>
        </motion.div>

        {/* Executives Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-purple-600 text-white px-6 py-3 rounded-full">
              <Briefcase className="h-6 w-6" />
              <h2 className="text-2xl font-bold">Executive Leadership</h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((exec, idx) => (
              <TeamMemberCard
                key={idx}
                member={exec}
                index={idx}
                category="executives"
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            We're always looking for talented professionals who share our
            passion for healthcare excellence. Explore career opportunities at
            Central Lab Ventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-50 transition-colors">
              View Open Positions
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              Contact HR Department
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPage;