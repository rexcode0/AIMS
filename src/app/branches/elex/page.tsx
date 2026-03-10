"use client";

import { Zap } from "lucide-react";
import { BranchPageTemplate } from "@/components/branch-page-template";

const elexData = {
  id: "elex",
  name: "ELEX",
  fullName: "Electronics Engineering",
  tagline: "Powering innovation through circuits, signals, and smart embedded intelligence.",
  icon: Zap,
  color: "from-emerald-500/20 to-cyan-500/10",
  primaryColor: "emerald",
  about:
    "The Department of Electronics Engineering at AIMS offers a comprehensive curriculum covering VLSI design, embedded systems, signal processing, communication systems, and IoT. Our state-of-the-art labs and industry partnerships ensure students are equipped for the rapidly evolving electronics industry.",
  highlights: [
    { label: "Students Enrolled", value: "320" },
    { label: "Faculty Members", value: "16" },
    { label: "Labs", value: "4" },
    { label: "Years of Excellence", value: "21+" },
  ],
  programs: [
    "B.E. Electronics Engineering",
    "M.E. VLSI Design",
    "M.E. Embedded Systems",
    "PhD in Electronics",
    "Diploma in Electronics",
    "Certificate: IoT & Automation",
  ],
  hod: {
    name: "Dr. Mehul Patel",
    designation: "Professor & Head of Department — ELEX",
    bio: "Dr. Mehul Patel holds a PhD in VLSI Design from IIT Delhi with 20+ years of teaching and research experience. He is a pioneer in Embedded Systems design and has filed 3 patents in VLSI. Under his leadership, the ELEX department won the National Robotics Championship 2025 and has an active DRDO-funded research program on Secure Communication Systems.",
    initials: "MP",
    // TODO: Replace with /assets/faculty/patel.jpg
    photoPath: "/assets/faculty/patel.jpg",
    cabin: "Room 401, 4th Floor",
    officeHours: "Mon–Fri, 10:00 AM – 12:00 PM",
  },
  faculty: [
    {
      name: "Dr. Mehul Patel",
      designation: "Professor & HOD",
      subjects: ["VLSI Design", "Embedded Systems", "Microcontrollers"],
      experience: "20 years",
      initials: "MP",
      photoPath: "/assets/faculty/patel.jpg",
      // TODO: Replace with Supabase Storage URL
      // videoUrl: "https://PROJECT.supabase.co/storage/v1/object/public/faculty-videos/patel_intro.mp4"
    },
    {
      name: "Prof. Geeta Rane",
      designation: "Associate Professor",
      subjects: ["Digital Signal Processing", "MATLAB", "DSP Algorithms"],
      experience: "14 years",
      initials: "GR",
      photoPath: "/assets/faculty/rane.jpg",
    },
    {
      name: "Dr. Suresh Lal",
      designation: "Professor",
      subjects: ["Communication Systems", "RF Design", "Antenna Theory"],
      experience: "17 years",
      initials: "SL",
      photoPath: "/assets/faculty/lal.jpg",
    },
    {
      name: "Prof. Sanjay Bhatt",
      designation: "Assistant Professor",
      subjects: ["IoT", "Arduino", "MQTT", "Sensor Networks"],
      experience: "9 years",
      initials: "SB",
      photoPath: "/assets/faculty/bhatt.jpg",
    },
    {
      name: "Dr. Mala Singh",
      designation: "Associate Professor",
      subjects: ["Power Electronics", "Control Systems", "PLC"],
      experience: "12 years",
      initials: "MS",
      photoPath: "/assets/faculty/singh.jpg",
    },
    {
      name: "Prof. Dhiraj Verma",
      designation: "Assistant Professor",
      subjects: ["PCB Design", "Altium Designer", "Circuit Simulation"],
      experience: "7 years",
      initials: "DV",
      photoPath: "/assets/faculty/verma.jpg",
    },
  ],
  labs: [
    { name: "Electronics Lab", capacity: 25, description: "Oscilloscopes, function generators, multimeters, component kits", available: true },
    { name: "VLSI Design Lab", capacity: 20, description: "Cadence, Synopsys EDA tools, FPGA boards", available: true },
    { name: "Embedded Systems Lab", capacity: 30, description: "Arduino, Raspberry Pi, ARM Cortex kits, sensors", available: false },
    { name: "Communication Lab", capacity: 20, description: "Spectrum analyzers, RF transceivers, signal modules", available: true },
  ],
  achievements: [
    "NAAC 'A+' Grade — Electronics Engineering Department",
    "Best Research Department Award 2023 by State Innovation Council",
    "8 patents filed in VLSI and Embedded Systems (2023–2025)",
    "IEEE Student Branch with 200+ active members",
    "DRDO-funded research project on Secure Communication Systems",
    "Winner — National Robotics Championship 2025",
  ],
};

export default function ELEXPage() {
  return <BranchPageTemplate {...elexData} />;
}
