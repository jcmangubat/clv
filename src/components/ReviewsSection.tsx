import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import styles from "./ReviewsSection.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ReviewsSection = () => {
  const clientReviews = [
    {
      id: 1,
      project: "biogen-ph",
      projectName: "Biogen Philippines Partnership",
      review:
        "Central Lab Ventures provided precise diagnostic support for our clinical trials. Their speed, compliance, and professionalism ensured smooth study execution with zero delays.",
      author: "Dr. Andrea Lim",
      position: "Clinical Research Director",
      source: "LinkedIn",
      rating: 5,
      date: "June 2023",
    },
    {
      id: 2,
      project: "city-hospital",
      projectName: "City General Hospital",
      review:
        "From patient testing to critical diagnostics, CLV has been a trusted partner. Their results are fast, accurate, and fully DOH and ISO compliant.",
      author: "Dr. Julius Ramos",
      position: "Medical Director",
      source: "Google Reviews",
      rating: 5,
      date: "April 2023",
    },
    {
      id: 3,
      project: "agritech",
      projectName: "AgriTech Nutrition Study",
      review:
        "CLV turned complex testing requirements into clear, actionable data. Their lab team maintained accountability and transparency throughout our research program.",
      author: "Rico Mendoza",
      position: "Lead Scientist",
      source: "Facebook",
      rating: 4,
      date: "March 2023",
    },
    {
      id: 4,
      project: "heritage-health",
      projectName: "Heritage Health Clinic",
      review:
        "Kailangan namin ng laboratory partner na maingat at eksakto. Central Lab Ventures delivered with compassion, precision, at mataas na respeto sa pasyente.",
      author: "Ana Santos",
      position: "Clinic Manager",
      source: "Google Reviews",
      rating: 5,
      date: "February 2023",
    },
    {
      id: 5,
      project: "mission-chapel",
      projectName: "Mission Chapel Health Drive",
      review:
        "Their health screenings were handled with care and respect. CLV balanced medical accuracy with community sensitivity — a rare and valuable trait in healthcare.",
      author: "Elder Joseph",
      position: "Program Coordinator",
      source: "Instagram",
      rating: 5,
      date: "January 2023",
    },
    {
      id: 6,
      project: "university-lab",
      projectName: "University Research Lab",
      review:
        "Ang among bagong research collaboration, klaro nga gipangulohan sa mga eksperto. CLV delivered fast, clean, and reliable lab data that elevated our projects.",
      author: "Dr. Liza Uy",
      position: "Dean of Science",
      source: "Google Reviews",
      rating: 5,
      date: "December 2022",
    },
    {
      id: 7,
      project: "wakoh-pharma",
      projectName: "Wakoh Pharma Facility",
      review:
        "We had shifting requirements for drug testing. CLV helped us prioritize and phase studies efficiently, delivering insights aligned with our brand and compliance needs.",
      author: "Kenji Wakoh",
      position: "Operations Director",
      source: "LinkedIn",
      rating: 4,
      date: "November 2022",
    },
    {
      id: 8,
      project: "mang-inasal-health",
      projectName: "Mang Inasal Employee Health Drive",
      review: "Solid service. No hassles, quick results.",
      author: "Jessa Cruz",
      position: "HR Manager",
      source: "Facebook",
      rating: 5,
      date: "October 2022",
    },
    {
      id: 9,
      project: "verdon-research",
      projectName: "Verdon Life Sciences",
      review:
        "CLV understood our vision for high-end biotech testing. Their team executed with polish, from sample handling to data validation. The results speak volumes.",
      author: "Marco Verdon",
      position: "Research Lead",
      source: "Instagram",
      rating: 5,
      date: "September 2022",
    },
    {
      id: 10,
      project: "davao-health-park",
      projectName: "Davao Health Tech Park",
      review:
        "CLV handled our health screening labs with military-grade precision. From sample logistics to reporting, everything was delivered ahead of schedule.",
      author: "Engr. Paolo Reyes",
      position: "Facilities Lead",
      source: "LinkedIn",
      rating: 5,
      date: "August 2022",
    },
    {
      id: 11,
      project: "san-pedro-hospital",
      projectName: "San Pedro Hospital",
      review:
        "Hospital diagnostics require zero error. CLV worked seamlessly with our physicians, delivering patient-focused lab results that meet strict DOH standards.",
      author: "Dr. Nina Soriano",
      position: "Chief of Labs",
      source: "Google Reviews",
      rating: 5,
      date: "July 2022",
    },
    {
      id: 12,
      project: "agro-bio-complex",
      projectName: "Agro Bio Complex",
      review:
        "We needed a partner for scale, logistics, and remote research. CLV adapted fast, built strong lab processes, and kept our agri-biotech ops running smoothly.",
      author: "Miguel de la Peña",
      position: "Research Operations Manager",
      source: "Facebook",
      rating: 4,
      date: "June 2022",
    },
    {
      id: 13,
      project: "city-health-center",
      projectName: "City Health Center Annex",
      review:
        "Public health projects are tough — compliance, politics, and deadlines. CLV navigated all three with professionalism and care. The annex is now a DOH benchmark.",
      author: "Atty. Grace Llamas",
      position: "City Health Architect",
      source: "LinkedIn",
      rating: 5,
      date: "May 2022",
    },
    {
      id: 14,
      project: "charles-research",
      projectName: "Charles Research Project",
      review:
        "Even in his own initiative, Charles upheld the highest lab standards. The project is a masterclass in precision, methodology, and ethical science.",
      author: "Arch. Benjie Cruz",
      position: "Scientific Consultant",
      source: "Instagram",
      rating: 5,
      date: "April 2022",
    },
  ];

  // Function to render star rating
  const renderRating = (rating: number) => {
    return (
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  // Function to get source icon
  const getSourceIcon = (source: string) => {
    switch (source.toLowerCase()) {
      case "linkedin":
        return "👔";
      case "facebook":
        return "📘";
      case "google reviews":
        return "🔍";
      case "instagram":
        return "📸";
      default:
        return "💬";
    }
  };

  return (
    <section
      className="relative flex items-center bg-blue-50"
      style={{ paddingTop: "60px", paddingBottom: "60px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="row">
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
              Client Reviews
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              What our clients say
            </motion.p>
          </motion.div>

          {/* <div
            className="section-header offset-lg-4"
            style={{
              textShadow: "rgb(0, 0, 0) 1px 1px 2px",
            }}
          >
            <h2 className={`${styles.light} text-uppercase mb-3 left-pattern`}>
              Client Reviews
            </h2>
            <h3 className={`${styles.light} text-uppercase`}>
              What our clients say
            </h3>
          </div> */}

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesOffsetBefore={0} // space before first card
            slidesOffsetAfter={0} // space after last card
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            keyboard={{ enabled: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
            className="review-swiper py-5"
          >
            {clientReviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className={`${styles.reviewCard} h-100`}>
                  {/* Card Header with Project Info */}
                  <div className={styles.cardHeader}>
                    <div className={styles.projectInfo}>
                      <span className={styles.projectIcon}>🏗️</span>
                      <div>
                        <h4 className={styles.projectName}>
                          {review.projectName}
                        </h4>
                        <span className={styles.reviewDate}>{review.date}</span>
                      </div>
                    </div>
                    <div className={styles.verifiedBadge}>
                      <span>✓</span> Verified
                    </div>
                  </div>

                  {/* Rating */}
                  <div className={styles.ratingContainer}>
                    {renderRating(review.rating)}
                  </div>

                  {/* Review Content */}
                  <div className={styles.reviewContent}>
                    <blockquote className={styles.reviewText}>
                      "{review.review}"
                    </blockquote>
                  </div>

                  {/* Author Info */}
                  <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>
                      {review.author.charAt(0)}
                    </div>
                    <div className={styles.authorDetails}>
                      <div className={styles.authorName}>{review.author}</div>
                      <div className={styles.authorPosition}>
                        {review.position}
                      </div>
                    </div>
                    <div className={styles.sourceInfo}>
                      <span className={styles.sourceIcon}>
                        {getSourceIcon(review.source)}
                      </span>
                      <span className={styles.sourceText}>{review.source}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
