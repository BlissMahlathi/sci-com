import { Phone } from "lucide-react";
import { MdEmail } from "react-icons/md";
import {
  RiLiveLine,
  RiUserHeartLine,
  RiFileTextLine,
  RiChatCheckLine,
  RiBookOpenLine,
  RiGroupLine,
  RiCalendarCheckLine,
  RiLightbulbLine,
  RiChatQuoteLine,
  RiFileListLine,
  RiUserStarLine,
  RiStackLine,
  RiCompassLine,
  RiAwardLine,
  RiMapPin2Line,
} from "react-icons/ri";

export const contactInfo = [{
  "PhoneNumber": "+27 76 286 1868",
  "icon": Phone,

},{
    "Email": "ScicomAcademy1@gmail.com",
    "icon" : MdEmail
}]
export const bankInfo = {
  BankType: "First National Bank",
  AcoountNumber: "63210282941",
  BranchCode: "250655",
};

export const FEATURES = [
  {
    icon: RiLiveLine ,
    title: 'Online Classes',
    desc: 'Live sessions covering Strata Control, Rock Mechanics and RMC.',
  },
  {
    icon: RiUserHeartLine,
    title: 'Expert Mentorship',
    desc: 'Direct guidance from experienced mining and examination professionals.',
  },
  {
    icon: RiFileTextLine ,
    title: 'Exam Preparation',
    desc: 'Targeted preparation for SCO, RMC Paper 1 and Rock Mechanics examinations.',
  },
  {
    icon: RiChatCheckLine,
    title: 'Discussion Forums',
    desc: 'Ongoing interaction and Q&A support up to examination day.',
  },
  {
    icon: RiBookOpenLine,
    title: 'Focused Preparation',
    desc: 'Deliberate study, guided practice and technical support for serious candidates.',
  },
  {
    icon: RiGroupLine,
    title: 'Community Support',
    desc: 'Join a growing community of mining professionals advancing their careers.',
  },
];

export const STATS = [
  {id: 1, number: "100", suffix: "+", label: "Learners Supported" },
  {id: 2,  number: "3", suffix: "", label: "Expert Mentors" },
  {id: 3, number: "12", suffix: "+", label: "Technical Topics" },
  {id: 4, number: "2026", suffix: "", label: "SANIRE Active" },
];


export const BENEFITS = [
  {
    icon: RiUserStarLine,
    title: 'Career Guidance',
    desc: 'Navigate your path from production into rock engineering with expert direction.',
  },
  {
    icon: RiFileListLine ,
    title: 'Exam Preparation',
    desc: 'Personalised support for SCO and RMC Paper 1 examinations.',
  },
  {
    icon: RiChatQuoteLine,
    title: 'Registration Assistance',
    desc: 'Understand the registration process for professional examinations.',
  },
  {
    icon: RiLightbulbLine,
    title: 'Technical Q&A',
    desc: 'Ask questions and get answers from people who work in the industry.',
  },
  {
    icon: RiCalendarCheckLine,
    title: 'Study Planning',
    desc: 'Structured study plans aligned to examination timelines.',
  },
];

export const PROGRAMMES = [
  {
    id: 'sco',
    icon: RiStackLine,
    title: 'SCO',
    desc: 'Structured preparation for Strata Control Officer candidates through focused online classes, guided study and exam support.',
    details: ['15 days online classes', '17 Aug – 4 Sep 2026'],
    price: 'R5 000.00',
    examBadge: true,
  },
  {
    id: 'rmc',
    icon: RiCompassLine,
    title: 'RMC Paper 1',
    desc: 'Focused Rock Mechanics Paper 1 preparation and guided study for candidates who want a structured route to exam readiness.',
    details: ['10 days online classes', '7 – 18 Sep 2026'],
    price: 'R20 000.00',
    examBadge: true,
  },
];

export const STAT = [
  {
    icon: RiGroupLine,
    number: 500,
    suffix: '+',
    label: 'Learners Supported',
  },
  {
    icon: RiBookOpenLine,
    number: 12,
    suffix: '+',
    label: 'Technical Topics',
  },
  {
    icon: RiAwardLine,
    number: 3,
    suffix: '',
    label: 'Expert Mentors',
  },
  {
    icon: RiMapPin2Line,
    number: 4,
    suffix: '+',
    label: 'Years Active',
  },
];

export const TEAM = [
  {
    id: 'godfrey',
    name: 'Godfrey Monama',
    title: 'Head Tutor',
    bio: 'BSc. Mining Engineering (Hons). SCO passed at first attempt. Passed RMC P1 and P2 with distinctions. Blasting certificate holder. Deep and shallow conventional mining experience. 5+ years tutoring experience.',
    image: "",
  },
  {
    id: 'fumani',
    name: 'Fumani Vukeya',
    title: 'Assistant Tutor',
    bio: 'SCO theory passed at first attempt. SCO theory top student Oct 2024. BSc. Geohydrology/Geology (Hons). Surface geotechnical and conventional mining experience. SANIRE Symposium presenter 2026.',
    image : "",
  },
  {
    id: 'tshego',
    name: 'Tshego Rampedi',
    title: 'Assistant Tutor',
    bio: 'SCO passed at first attempt. BSc. Mining Engineering (Hons). RMC Paper 1 top student May 2023. SANIRE Rockstar of Q3 2023. Massive mining and conventional mining experience.',
    image : "",
  },
];