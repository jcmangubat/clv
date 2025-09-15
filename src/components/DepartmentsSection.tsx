import React from "react";
import { Microscope, Activity, Cpu, Pill } from "lucide-react";

type DepartmentColor = "blue" | "teal" | "sky" | "indigo";

interface Department {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: DepartmentColor; // <-- ensures color is only allowed values
}

const departments: Department[] = [
  {
    icon: Microscope,
    title: "Biomedical Research",
    description:
      "Advanced cellular and molecular research driving discoveries.",
    color: "blue", // ✅ typed correctly
  },
  {
    icon: Activity,
    title: "Diagnostics & Testing",
    description: "Precision diagnostic solutions with cutting-edge testing.",
    color: "teal",
  },
  {
    icon: Cpu,
    title: "Healthcare Technology",
    description: "AI-powered medical devices and digital health solutions.",
    color: "sky",
  },
  {
    icon: Pill,
    title: "Pharmaceutical Innovations",
    description: "Drug discovery and development programs.",
    color: "indigo",
  },
];

const getColorClasses = (color: DepartmentColor) => {
  const colors: Record<DepartmentColor, string> = {
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    teal: "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400",
    sky: "bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400",
    indigo:
      "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
  };
  return colors[color] ?? "bg-gray-100 text-gray-600";
};

const DepartmentsSection = () => {
  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Departments & Divisions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our specialized departments work collaboratively to advance
            healthcare through innovative research and cutting-edge technology
            solutions.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-lg ${getColorClasses(
                    dept.color
                  )} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent
                    className="h-8 w-8"
                    aria-label={`${dept.title} icon`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {dept.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {dept.description}
                </p>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
