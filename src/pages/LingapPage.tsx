import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HeartHandshake,
  FileText,
  CheckCircle,
  Users,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";

const LingapPage = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Banner Image Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover transform scale-110"
          style={{
            backgroundImage: "url('/assets/images/LINGAP-PARA-SA-MAHIRAP.jpg')",
            willChange: "transform",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80"></div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <HeartHandshake className="h-5 w-5" />
              <span className="text-sm font-medium">
                Lingap Para sa Mahirap Program
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Healthcare Assistance for Indigent Patients
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              CLV partners with DSWD and Davao City Government to provide
              laboratory services to those in need through the Lingap Guarantee
              Letter.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Program Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Lingap Para sa Mahirap
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Central Lab Ventures (CLV) partners with the Department of Social
            Welfare and Development (DSWD) and the City Government of Davao to
            provide laboratory support under the Lingap Para sa Mahirap Program.
            This program helps indigent patients access diagnostic procedures at
            CLV without financial burden through the Lingap Guarantee Letter.
          </p>
        </div>

        {/* Who Can Avail */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Who Can Avail?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Davao City Residents
                  </h4>
                  <p className="text-gray-600 text-sm">
                    With a valid Barangay Certificate as proof of residency
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Physician-Endorsed Patients
                  </h4>
                  <p className="text-gray-600 text-sm">
                    With supporting medical documents and doctor's request
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Indigent Beneficiaries
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Assessed and qualified under the Lingap program criteria
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                alt="Lingap program beneficiaries"
                className="w-full h-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
            {/* Floating benefit card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">No Cost</div>
                  <div className="text-sm text-gray-600">
                    For qualified patients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements and Process */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Medical Documents
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Original Medical Abstract or Clinical Summary from your
                      doctor
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Doctor's Request
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Official request for laboratory procedures
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Price Quotation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Official quotation from Central Lab Ventures
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Barangay Certificate
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Proof of Davao City residency
                    </p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Prepare Documents
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Secure all requirements listed above
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Submit to Lingap
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Submit documents to the Lingap office for evaluation
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Get Guarantee Letter
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Obtain the official Lingap Guarantee Letter
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visit CLV</h4>
                    <p className="text-gray-600 text-sm">
                      Present the Guarantee Letter and proceed with laboratory
                      procedures
                    </p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Location and Contact */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-indigo-600" />
                Lingap Office Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Address:</h4>
                <p className="text-gray-600">
                  Lingap Para sa Mahirap Office
                  <br />
                  Davao City Hall, San Pedro Street
                  <br />
                  Davao City, Philippines
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Operating Hours:
                </h4>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 5:00 PM
                  <br />
                  Saturday: 8:00 AM - 12:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Contact Information:
                </h4>
                <p className="text-gray-600">
                  Phone: <strong>(082) 228-4283</strong>
                  <br />
                  Email: <strong>lingap@davaocity.gov.ph</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <HeartHandshake className="h-5 w-5 text-purple-600" />
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                At <span className="font-semibold">CLV</span>, we believe access
                to diagnostic healthcare should not be limited by financial
                capacity. Partnering with the Lingap Program allows us to extend{" "}
                <span className="italic">
                  affordable, accessible, and compassionate care
                </span>{" "}
                to those who need it most.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">
                  Our Promise to You:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    No out-of-pocket expenses for qualified patients
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    Compassionate and respectful treatment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    Quick processing of Lingap Guarantee Letters
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-500" />
                    High-quality diagnostic services
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA section */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Need Assistance with Lingap?
          </h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Our team is ready to help you navigate the Lingap application
            process and access the laboratory services you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              className="bg-white text-indigo-600 hover:bg-indigo-50"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Visit Lingap Office
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call (082) 228-4283
            </Button>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-indigo-100">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Monday-Saturday service</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              <span>Government-recognized program</span>
            </div>
            <div className="flex items-center gap-1">
              <HeartHandshake className="h-4 w-4" />
              <span>No cost for qualified patients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LingapPage;