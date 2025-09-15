import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { MapPin, Building, Calendar, Clock } from "lucide-react";
import { z } from "zod";
import { useState } from "react";

const applicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  position: z.string().min(1, "Please select a position"),
  resume: z.any().refine((files) => files?.length > 0, "Resume is required"),
  coverLetter: z.string().optional(),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationForm) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted!",
      description: "Your application has been received. Our HR team will review it and contact you soon.",
    });
    
    reset();
  };

  const jobs = [
    {
      id: 1,
      title: "Senior Research Scientist - Biotech",
      department: "Research & Development",
      location: "Davao City",
      type: "Full-time",
      posted: "2 days ago",
      description:
        "Lead biotechnology research projects focused on gene therapy and protein engineering. Collaborate with cross-functional teams to advance innovative therapeutic solutions.",
    },
    {
      id: 2,
      title: "AI/ML Engineer - Laboratory Automation",
      department: "Data Science",
      location: "Digos City",
      type: "Full-time",
      posted: "5 days ago",
      description:
        "Develop and implement machine learning models for laboratory automation and predictive analytics. Work with cutting-edge AI technologies to optimize research workflows.",
    },
    {
      id: 3,
      title: "Clinical Research Manager",
      department: "Clinical Affairs",
      location: "Davao City",
      type: "Full-time",
      posted: "1 week ago",
      description:
        "Oversee clinical trial operations and ensure regulatory compliance. Lead cross-functional teams to deliver high-quality clinical research programs.",
    },
    {
      id: 4,
      title: "Laboratory Operations Specialist",
      department: "Operations",
      location: "Panabo City",
      type: "Full-time",
      posted: "3 days ago",
      description:
        "Manage daily laboratory operations and ensure compliance with safety and quality standards. Coordinate with research teams to optimize laboratory efficiency.",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of scientific
            research and laboratory innovation. Discover exciting career
            opportunities with us.
          </p>
        </motion.div>

        {/* Job Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12 justify-center"
        >
          <Select onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="research">Research & Development</SelectItem>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="clinical">Clinical Affairs</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="san-francisco">Davao City</SelectItem>
              <SelectItem value="boston">Panabo City</SelectItem>
              <SelectItem value="london">Digos City</SelectItem>
              <SelectItem value="remote">Tagum City</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Experience Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Experience Levels</SelectItem>
              <SelectItem value="entry">Entry Level</SelectItem>
              <SelectItem value="mid">Mid Level</SelectItem>
              <SelectItem value="senior">Senior Level</SelectItem>
              <SelectItem value="executive">Executive</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-6 mb-16"
        >
          {jobs.map((job, index) => (
            <motion.div key={job.id} variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold mr-4">{job.title}</h3>
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm mb-3 flex-wrap gap-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Posted {job.posted}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button data-testid={`apply-job-${job.id}`}>Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Apply for a Position</h2>
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
                      <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
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
                      <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
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
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="position">Position of Interest *</Label>
                  <Controller
                    name="position"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger data-testid="select-position">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="senior-research-scientist">
                            Senior Research Scientist - Biotech
                          </SelectItem>
                          <SelectItem value="ai-ml-engineer">
                            AI/ML Engineer - Laboratory Automation
                          </SelectItem>
                          <SelectItem value="clinical-research-manager">
                            Clinical Research Manager
                          </SelectItem>
                          <SelectItem value="lab-operations-specialist">
                            Laboratory Operations Specialist
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.position && (
                    <p className="text-destructive text-sm mt-1">{errors.position.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="resume">Resume/CV *</Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    {...register("resume")}
                    data-testid="input-resume"
                  />
                  {errors.resume && (
                    <p className="text-destructive text-sm mt-1">{String(errors.resume.message)}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    rows={4}
                    placeholder="Tell us why you're interested in joining our team..."
                    {...register("coverLetter")}
                    data-testid="textarea-cover-letter"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  data-testid="submit-application"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
