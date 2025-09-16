import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AccreditationsPage() {
  const [selectedCert, setSelectedCert] = useState<null | {
    id: number;
    title: string;
    image: string;
  }>(null);

  const certificates = [
    {
      id: 1,
      title: "DOH License (Sample Only)",
      image: "/assets/certs/doh-lto.png",
    },
    {
      id: 2,
      title: "ISO 15189 Accreditation (Sample Only)",
      image: "/assets/certs/Iso-15189.jpg",
    },
    {
      id: 3,
      title: "PhilHealth Accreditation (Sample Only)",
      image: "/assets/certs/philhealth-accred.jpg",
    },
    {
      id: 4,
      title: "DTI Accreditation (Sample Only)",
      image: "/assets/certs/dti-accred.png",
    },
    {
      id: 5,
      title: "ISO 9001 Certification (Sample Only)",
      image: "/assets/certs/iso-9001.jpg",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Licenses & Accreditations
        </motion.h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Central Lab Ventures is committed to delivering world-class diagnostic
          services. Below are our official licenses and accreditations that
          ensure we meet the highest standards of quality and reliability.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-contain p-4 bg-gray-100 dark:bg-gray-700"
              />
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)} // close when clicking backdrop
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()} // prevent backdrop click
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition"
              >
                ✕
              </button>

              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
              <div className="mt-4 text-center text-white text-lg font-semibold">
                {selectedCert.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AccreditationsPage;
