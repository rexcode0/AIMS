"use client";

import { Monitor } from "lucide-react";
import { BranchPageTemplate } from "@/components/branch-page-template";

const cseData = {
  id: "cse",
  name: "CSE",
  fullName: "Computer Science Engineering",
  tagline: "Architecting the digital future through algorithms, AI, and innovation.",
  icon: Monitor,
  color: "from-teal-500/20 to-emerald-500/10",
  primaryColor: "teal",
  about:
    "The Department of Computer Science Engineering at AIMS is dedicated to nurturing future-ready engineers through a rigorous curriculum blending theoretical foundations with hands-on project experience. With cutting-edge labs and experienced faculty, CSE students excel in software engineering, artificial intelligence, data science, and systems programming.",
  highlights: [
    { label: "Students Enrolled", value: "480" },
    { label: "Faculty Members", value: "18" },
    { label: "Labs", value: "5" },
    { label: "Years of Excellence", value: "20+" },
  ],
  programs: [
    "B.E. Computer Science Engineering",
    "M.E. Computer Science & Engineering",
    "PhD in Computer Science",
    "Diploma in Programming",
    "Certificate: AI & ML",
    "Certificate: Cybersecurity",
  ],
  hod: {
    name: "Dr. Anil Sharma",
    designation: "Professor & Head of Department — CSE",
    bio: "Dr. Anil Sharma holds a PhD in Computer Science from IIT Bombay and brings 18+ years of teaching and research experience. He specializes in Data Structures, Algorithmics, and Competitive Programming. Under his leadership, the CSE department has achieved 100% placement for 5 consecutive years and established industry partnerships with Google, Microsoft, and Infosys.",
    initials: "AS",
    // TODO: Replace with /assets/faculty/sharma.jpg
    photoPath: "/assets/faculty/sharma.jpg",
    cabin: "Room 301, 3rd Floor",
    officeHours: "Mon–Fri, 10:00 AM – 12:00 PM",
  },
  faculty: [
    {
      name: "Dr. Anil Sharma",
      designation: "Professor & HOD",
      subjects: ["Data Structures", "Algorithms", "Competitive Programming"],
      experience: "18 years",
      initials: "AS",
      photoPath: "/assets/faculty/sharma.jpg",
      // TODO: Replace with Supabase Storage URL
      // videoUrl: "https://PROJECT.supabase.co/storage/v1/object/public/faculty-videos/sharma_intro.mp4"
    },
    {
      name: "Prof. Kavita Joshi",
      designation: "Associate Professor",
      subjects: ["Machine Learning", "Artificial Intelligence", "Python"],
      experience: "12 years",
      initials: "KJ",
      photoPath: "/assets/faculty/joshi.jpg",
    },
    {
      name: "Dr. Ramesh Nair",
      designation: "Assistant Professor",
      subjects: ["Operating Systems", "Linux", "Systems Programming"],
      experience: "9 years",
      initials: "RN",
      photoPath: "/assets/faculty/nair.jpg",
    },
    {
      name: "Prof. Priya Desai",
      designation: "Associate Professor",
      subjects: ["Computer Networks", "Network Security", "TCP/IP"],
      experience: "11 years",
      initials: "PD",
      photoPath: "/assets/faculty/desai.jpg",
    },
    {
      name: "Dr. Suhas Patil",
      designation: "Professor",
      subjects: ["Database Management", "Big Data", "SQL", "NoSQL"],
      experience: "15 years",
      initials: "SP",
      photoPath: "/assets/faculty/patil.jpg",
    },
    {
      name: "Prof. Anjali Mehta",
      designation: "Assistant Professor",
      subjects: ["Web Development", "React", "Node.js"],
      experience: "7 years",
      initials: "AM",
      photoPath: "/assets/faculty/mehta.jpg",
    },
  ],
  labs: [
    { name: "Programming Lab A", capacity: 30, description: "Intel i7 workstations, Visual Studio, IntelliJ IDEA", available: true },
    { name: "AI/ML Research Lab", capacity: 20, description: "GPU workstations, TensorFlow, PyTorch, CUDA toolkit", available: false },
    { name: "Cybersecurity Lab", capacity: 25, description: "Penetration testing tools, Kali Linux, Wireshark", available: true },
    { name: "Software Project Lab", capacity: 40, description: "Full-stack development environment, CI/CD pipelines", available: true },
  ],
  achievements: [
    "NAAC Grade 'A' Accreditation — CSE Department",
    "Best Engineering Department Award 2024 by University of Technology",
    "6 research papers published in IEEE & Springer in 2025",
    "100% placement record for last 5 consecutive years",
    "Google Developer Student Club (GDSC) Lead Chapter",
    "Microsoft Azure University Partnership — Cloud curriculum",
  ],
};

export default function CSEPage() {
  return <BranchPageTemplate {...cseData} />;
}
