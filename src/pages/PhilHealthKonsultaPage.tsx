import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  UserCheck,
  Heart,
  CheckCircle,
  Users,
  FileText,
  CreditCard,
  Clock,
  Shield,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";

const PhilHealthKonsultaPage = () => {

  const benefits = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Free Doctor Consultations",
      description:
        "Access to qualified medical professionals without consultation fees",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Free Diagnostic Tests",
      description:
        "Essential laboratory tests and medical examinations at no cost",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Free Essential Medicines",
      description: "Access to primary care medicines prescribed by our doctors",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Comprehensive Coverage",
      description:
        "Diabetes, heart, and kidney care services for all Filipino citizens",
    },
  ];

  const registrationSteps = [
    {
      step: "1",
      title: "Visit Central Lab Tower",
      description:
        "Come to 3rd floor, Central Lab Tower, E. Quirino Avenue, Davao City (beside Jotel Inn, along Bangko Sentral ng Pilipinas)",
      icon: <Users className="h-5 w-5" />,
    },
    {
      step: "2",
      title: "Bring Valid Government-Issued ID",
      description:
        "Any valid ID such as driver's license, passport, voter's ID, or senior citizen ID",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      step: "3",
      title: "Present PhilHealth Number",
      description:
        "Bring your PhilHealth card or number. Don't have one? Our staff will assist you in getting registered",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      step: "4",
      title: "Fill Out Konsulta Registration Form",
      description:
        "Complete the registration form onsite with assistance from our friendly staff",
      icon: <FileText className="h-5 w-5" />,
    },
  ];

  return (
    <section
      id="konsulta"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50"
    >
      {/* Banner Image Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover transform scale-110"
          style={{
            backgroundImage: "url('/assets/images/philhealth-konsulta.jpg')",
            willChange: "transform",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-900/80"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <UserCheck className="h-5 w-5" />
              <span className="text-sm font-medium">
                PhilHealth Konsulta Program
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Healthcare for All Filipinos
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              As a certified PhilHealth Konsulta Provider, we offer free primary
              healthcare services to all Filipino citizens under the Universal
              Health Care Law.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Benefits section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              What's Included in PhilHealth Konsulta?
            </h3>
            <p className="text-gray-600 mb-8">
              PhilHealth Konsulta provides comprehensive primary healthcare
              services at no cost, ensuring that quality healthcare is
              accessible to every Filipino, regardless of economic status.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629976532461-563f742de47f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxpcGlubyUyMGZhbWlseSUyMGhlYWx0aHxlbnwxfHx8fDE3NTcyNTMxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Filipino family health"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
            {/* Floating benefit card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">100% Free</div>
                  <div className="text-sm text-gray-600">
                    For all Filipino citizens
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration process */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How to Register for PhilHealth Konsulta
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Registration is simple and free. Our team will guide you through
              the process to ensure you can access all available benefits.
            </p>
          </div>

          {/* Steps with visual timeline */}
          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-blue-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {registrationSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center group">
                  {/* Step number and icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 absolute -top-2 -right-2 shadow-md">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <h4 className="font-bold text-lg text-gray-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>

                    {/* Progress indicator for mobile */}
                    <div className="mt-4 flex justify-center lg:hidden">
                      <div className="flex space-x-1">
                        {registrationSteps.map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i === index ? "bg-blue-500" : "bg-gray-300"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-green-700">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Start Registration
                </div>
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-blue-200 hover:bg-blue-50">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call for Assistance
                </div>
              </button>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Registration takes only 15-20 minutes. No appointment needed.
            </p>
          </div>
        </div>

        {/* Eligibility and coverage */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Who Can Register?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">All Filipino citizens</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">No income requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">No age restrictions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    Both urban and rural residents
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-700">
                    Individuals and families
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Covered Services
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-700">
                    Diabetes management and monitoring
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-700">Heart health checkups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-700">
                    Kidney function assessments
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-700">
                    Preventive health screenings
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-700">
                    Health education and counseling
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        {/* Location and contact information */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Visit Us for Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Address:</h4>
                <p className="text-gray-600">
                  3rd floor, Central Lab Tower
                  <br />
                  E. Quirino Avenue, Davao City
                  <br />
                  (beside Jotel Inn, along Bangko Sentral ng Pilipinas)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Operating Hours:
                </h4>
                <p className="text-gray-600">
                  Monday - Saturday: 7:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  For Questions:
                </h4>
                <p className="text-gray-600">
                  Call us at <strong>(082) 226-2530</strong>
                  <br />
                  Our staff can answer any Konsulta-related questions
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-green-50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                Pre-Registration Option
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Speed up your on-site registration by providing some basic
                information ahead of time.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">
                  What you'll need:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Full name and contact information
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    PhilHealth number (if available)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Address and employment details
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Emergency contact information
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Start Pre-Registration Form
              </Button>
            </CardContent>
          </Card>
        </div>
        {/* CTA section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Register for Free Healthcare?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Visit Central Lab Tower today and let our team help you register for
            PhilHealth Konsulta. Quality healthcare should never be a financial
            burden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              className="bg-white text-green-600 hover:bg-green-50"
            >
              <UserCheck className="h-4 w-4 mr-2" />
              Visit Us to Register
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-800 dark:border-gray-600 dark:text-white hover:bg-transparent dark:hover:bg-transparent"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Call (082) 226-2530
            </Button>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-green-100">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Quick 15-20 minute process</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span>Government-backed program</span>
            </div>
            <div className="flex items-center gap-1">
              <CreditCard className="h-4 w-4" />
              <span>Absolutely free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhilHealthKonsultaPage;