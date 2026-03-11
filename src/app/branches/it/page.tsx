"use client";

import { Cpu } from "lucide-react";
import { BranchPageTemplate } from "@/components/branch-page-template";

const itData = {
  id: "it",
  name: "IT",
  fullName: "Information Technology",
  tagline: "Connecting people, data, and systems through intelligent technology solutions.",
  icon: Cpu,
  color: "from-slate-500/20 to-teal-500/10",
  primaryColor: "slate",
  about:
    "The Department of Information Technology at AIMS bridges the gap between theoretical knowledge and real-world application. Specializing in networking, cybersecurity, enterprise systems, and cloud computing, our graduates are highly sought after by leading IT companies globally.",
  highlights: [
    { label: "Students Enrolled", value: "360" },
    { label: "Faculty Members", value: "14" },
    { label: "Labs", value: "4" },
    { label: "Years of Excellence", value: "18+" },
  ],
  programs: [
    
    "Diploma in IT",
    
  ],
  hod: {
    name: "Jagdish Chandra Pandey",
    designation: "Professor & Head of Department — IT",
    bio: "Jagdish Chandra Pandey holds an M.Tech in Information Technology and brings 16+ years of teaching and research experience. He specializes in Database Systems, Cloud Computing, and Distributed Systems. Under her guidance, .",
    initials: "SR",
    // TODO: Replace with /assets/faculty/rao.jpg
    photoPath: "/assets/faculty/rao.jpg",
    cabin: "Right-hand side from the entrance, Ground Floor, Academic IT Block",
    officeHours: "Mon–Sat, 10:00 AM – 5:00 PM",
  },
  faculty: [
    {
      name: "Neha Bora",
      designation: "Lecturer",
      subjects: ["Inernet and web technology", "Compuet hardware and systems", "Eplybility Skills"],
      experience: "16 years",
      initials: "NB",
      photoPath: "/assets/faculty/rao.jpg",
      // TODO: Replace with Supabase Storage URL
      // videoUrl: "https://PROJECT.supabase.co/storage/v1/object/public/faculty-videos/rao_intro.mp4"
    },
    {
      name: "Dr. Vikram Tiwari",
      designation: "Associate Professor",
      subjects: ["Cybersecurity", "Ethical Hacking", "Penetration Testing"],
      experience: "13 years",
      initials: "VT",
      photoPath: "/assets/faculty/tiwari.jpg",
    },
    {
      name: "Prof. Neha Gupta",
      designation: "Assistant Professor",
      subjects: ["Computer Networks", "Cisco CCNA", "Routing & Switching"],
      experience: "8 years",
      initials: "NG",
      photoPath: "/assets/faculty/gupta.jpg",
    },
    {
      name: "Dr. Rakesh Shah",
      designation: "Professor",
      subjects: ["Software Engineering", "Agile", "DevOps", "Docker"],
      experience: "14 years",
      initials: "RS",
      photoPath: "/assets/faculty/shah.jpg",
    },
    {
      name: "Prof. Deepa Iyer",
      designation: "Associate Professor",
      subjects: ["Mobile App Development", "Android", "React Native"],
      experience: "10 years",
      initials: "DI",
      photoPath: "/assets/faculty/iyer.jpg",
    },
    {
      name: "Prof. Arjun Kulkarni",
      designation: "Assistant Professor",
      subjects: ["IoT", "Raspberry Pi", "MQTT", "Smart Systems"],
      experience: "6 years",
      initials: "AK",
      photoPath: "/assets/faculty/kulkarni.jpg",
    },
  ],
  labs: [
    { name: "Networking Lab", capacity: 20, description: "Cisco routers, switches, firewalls, VLAN setup", available: true },
    { name: "Cloud Computing Lab", capacity: 30, description: "AWS/Azure sandboxes, Kubernetes clusters, Docker", available: true },
    { name: "Security Operations Lab", capacity: 15, description: "SIEM tools, IDS/IPS, vulnerability scanners", available: false },
    { name: "IT Project Lab", capacity: 35, description: "Full dev environment, GitHub integration, Agile boards", available: true },
  ],
  achievements: [
    "ISO 9001:2015 Certified IT Department",
    "Best IT Department Award — State Technical University 2024",
    "Active Cisco Networking Academy Chapter",
    "AWS Academy Partnership — Cloud curriculum integration",
    "95% placement rate with top MNCs (TCS, Infosys, Wipro, Accenture)",
    "Annual IT Symposium 'INNOTECH' attracting 500+ participants",
  ],
};

export default function ITPage() {
  return <BranchPageTemplate {...itData} />;
}
