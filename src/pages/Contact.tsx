import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Phone, Mail, MapPin, AlertTriangle, Map, Clock } from "lucide-react";
import { z } from "zod";
import LocationMap from "@/components/LocationMap";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description:
        "Thank you for your inquiry. We will get back to you within 24 hours.",
    });

    reset();
  };

  const offices = [
    {
      name: "Davao City Head Quarter",
      address: [
        "3rd Floor",
        "Central Lab Tower",
        "Elpidio Quirino Ave",
        "Poblacion District",
        "Davao City",
        "Davao del Sur",
      ],
      phone: "+63 (0943) 460 3369",
      email: "contactus@centrallabventures.com",
    },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team to discuss your research needs,
            partnership opportunities, or any questions about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        {...register("firstName")}
                        data-testid="input-first-name"
                      />
                      {errors.firstName && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        {...register("lastName")}
                        data-testid="input-last-name"
                      />
                      {errors.lastName && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      data-testid="input-email"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      {...register("company")}
                      data-testid="input-company"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Controller
                      name="subject"
                      control={control}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger data-testid="select-subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general-inquiry">
                              General Inquiry
                            </SelectItem>
                            <SelectItem value="partnership">
                              Partnership Opportunity
                            </SelectItem>
                            <SelectItem value="services">
                              Service Information
                            </SelectItem>
                            <SelectItem value="support">
                              Technical Support
                            </SelectItem>
                            <SelectItem value="careers">
                              Career Opportunities
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Please provide details about your inquiry..."
                      {...register("message")}
                      data-testid="textarea-message"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    data-testid="submit-contact"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Office Information */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div key={office.name}>
                      <h4 className="font-semibold mb-2">{office.name}</h4>
                      <div className="text-muted-foreground">
                        {office.address.map((line, index) => (
                          <div key={index}>{line}</div>
                        ))}
                      </div>
                      <div className="text-muted-foreground mt-2">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          {office.phone}
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {office.email}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-destructive mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Emergency Contact
                </h3>
                <p className="text-destructive/80">
                  For urgent laboratory safety issues or emergencies:
                  <br />
                  <strong>24/7 Emergency Line: +1 (555) 911-SAFE</strong>
                </p>
              </CardContent>
            </Card>

            {/* Map Placeholder
            <Card className="bg-muted">
              <CardContent className="p-8">
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">
                      Google Maps integration would be embedded here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </motion.div>
        </div>
      </div>
      <LocationMap />
    </div>
  );
}
