interface BaseMember {
  name: string;
  experience: string;
  bio: string;
  image: string;
}

interface Physician extends BaseMember {
  type: "physician";
  specialty: string;
  education: string;
}

interface Technician extends BaseMember {
  type: "technician";
  role: string;
  expertise: string;
}

interface Executive extends BaseMember {
  type: "executive";
  role: string;
  expertise: string;
}

type TeamMember = Physician | Technician | Executive;

type Category = "physicians" | "technicians" | "executives";