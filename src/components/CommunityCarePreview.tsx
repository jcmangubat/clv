import { Stethoscope, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const CommunityCarePreview = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover transform scale-110"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          willChange: 'transform'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-indigo-900/70 to-purple-900/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Community Care Programs
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            At CLV, we believe quality healthcare should be accessible to all.
            Our community-focused programs support preventive care and patient
            assistance in partnership with national and local health
            initiatives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Konsulta */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10"></div>
            <div className="relative h-48 overflow-hidden">
              <img
                src="/assets/images/philhealth-konsulta.jpg"
                alt="Healthcare consultation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative z-20 p-8 pt-12">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600/20 backdrop-blur-sm p-3 rounded-full">
                  <Stethoscope className="w-8 h-8 text-blue-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                CLV Konsulta Services
              </h3>
              <p className="text-blue-100 mb-6">
                Comprehensive primary care and diagnostics aligned with
                PhilHealth Konsulta, helping patients access preventive care and
                checkups.
              </p>
              <Link
                to="/community/konsulta"
                className="inline-flex items-center text-blue-300 font-medium hover:text-blue-100 transition-colors"
              >
                See More Details →
              </Link>
            </div>
          </div>
          
          {/* Patient Assistance */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent z-10"></div>
            <div className="relative h-48 overflow-hidden">
              <img
                src="/assets/images/LINGAP-PARA-SA-MAHIRAP.jpg"
                alt="Patient assistance program"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative z-20 p-8 pt-12">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-600/20 backdrop-blur-sm p-3 rounded-full">
                  <HeartHandshake className="w-8 h-8 text-indigo-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                CLV Patient Assistance Program
              </h3>
              <p className="text-blue-100 mb-6">
                Inspired by Lingap, this program provides financial support and
                subsidies for laboratory services, ensuring no patient is left
                behind.
              </p>
              <Link
                to="/community/lingap"
                className="inline-flex items-center text-indigo-300 font-medium hover:text-indigo-100 transition-colors"
              >
                See More Details →
              </Link>
            </div>
          </div>
        </div>
        
        {/* <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:from-blue-600 hover:to-indigo-700"
          >
            View All Community Programs
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default CommunityCarePreview;