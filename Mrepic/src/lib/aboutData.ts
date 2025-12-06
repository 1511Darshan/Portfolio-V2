import { IconType } from 'react-icons';
import {
  FaCode,
  FaGraduationCap,
  FaBook,
  FaBriefcase,
  FaGamepad,
  FaPaintBrush,
  FaLaptop,
  FaRobot,
  FaTrophy,
  FaHeartbeat,
  FaShoppingBag,
  FaUsers,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import {
  SiKotlin,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiAndroidstudio,
  SiVsco,
  SiJupyter,
  SiFigma,
  SiFirebase,
  SiMaterialdesign,
} from 'react-icons/si';

export interface SkillItem {
  id: string;
  category: string;
  title: string;
  description: string;
  quote: string;
  icon: IconType;
  color?: string;
}

export const skillsData: SkillItem[] = [
  // === HOBBIES ===
  {
    id: 'recreational-coding',
    category: 'Hobby',
    title: 'Recreational Coding',
    description: "When I'm not coding for work, I'm coding for fun. Building random side projects at 2 AM is my idea of a good time.",
    quote: "Yes, I code for work AND for fun. No, I don't need help.",
    icon: FaCode,
  },
  {
    id: 'competitive-programming',
    category: 'Hobby',
    title: 'Competitive Programming Addict',
    description: 'LeetCode is my second home. 291 visits in the past few days says it all.',
    quote: "Problems aren't obstacles—they're puzzles waiting to be solved at 3 AM.",
    icon: FaTrophy,
  },
  {
    id: 'hackathon-hunter',
    category: 'Hobby',
    title: 'Hackathon Hunter',
    description: 'Constantly searching for the next big competition to conquer.',
    quote: 'Hackathons are my playground.',
    icon: FaGamepad,
  },

  // === EDUCATION ===
  {
    id: 'btech-student',
    category: 'Education',
    title: 'B.Tech Student in AI & Data Science',
    description: 'Studying at Chennai Institute of Technology while building a portfolio that screams "hire me."',
    quote: "I chose AI & Data Science because it's where the future is.",
    icon: FaGraduationCap,
  },
  {
    id: 'nptel-learner',
    category: 'Education',
    title: 'NPTEL Course Taker',
    description: 'Taking online courses from NPTEL to supplement my degree.',
    quote: 'NPTEL: world-class education from IITs, free.',
    icon: FaBook,
  },
  {
    id: 'skill-india',
    category: 'Education',
    title: 'Skill India Program Participant',
    description: 'Learning additional skills through official government programs.',
    quote: 'Upskilling is a lifestyle, not a one-time event.',
    icon: FaGraduationCap,
  },
  {
    id: 'google-skills',
    category: 'Education',
    title: 'Google Skills Learner',
    description: "Completing Google's free certification programs.",
    quote: "Google teaches you Google's way. Valuable knowledge.",
    icon: FaBook,
  },
  {
    id: 'continuous-learner',
    category: 'Education',
    title: 'Continuous Learner',
    description: 'Always on multiple learning platforms, always upgrading skills.',
    quote: "Learning never stops. That's how you stay relevant.",
    icon: FaGraduationCap,
  },

  // === CAREER GOALS ===
  {
    id: 'msft-google-internships',
    category: 'Career Goals',
    title: 'Target: Microsoft & Google Internships',
    description: "These aren't just dream companies; they're the launchpad for everything I want to build.",
    quote: "I'm not just applying; I'm building the case for why they'd be crazy not to hire me.",
    icon: FaBriefcase,
  },
  {
    id: 'salary-ambition',
    category: 'Career Goals',
    title: '₹1 Crore Salary Ambition',
    description: 'Aiming for a CTC that matches my ambition.',
    quote: "I'm not chasing money; I'm chasing impact that's worth that much.",
    icon: FaBriefcase,
  },
  {
    id: 'resume-architect',
    category: 'Career Goals',
    title: 'Resume Architect',
    description: 'Every project, every competition, every line of code is strategically placed to impress HR.',
    quote: 'A good resume opens doors. A great one makes companies knock on yours.',
    icon: FaBook,
  },
  {
    id: 'high-impact-projects',
    category: 'Career Goals',
    title: 'High-Impact Project Builder',
    description: 'Building projects designed to make an impression on future employers.',
    quote: 'Projects speak louder than interviews.',
    icon: FaCode,
  },
  {
    id: 'how2abroad',
    category: 'Career Goals',
    title: 'How2Abroad Internship Applicant',
    description: 'Applied for Data Analyst (Student Internship) and crushed their entry test.',
    quote: 'Entry tests are just checkpoints. The real race starts after acceptance.',
    icon: FaBriefcase,
  },

  // === PROGRAMMING LANGUAGES ===
  {
    id: 'cpp-expert',
    category: 'Programming Languages',
    title: 'Expert in C++',
    description: 'My first love in programming. Arrays, pointers, and algorithms—C++ and I have a deep relationship.',
    quote: 'C++ teaches you respect for memory management.',
    icon: SiCplusplus,
  },
  {
    id: 'java-programmer',
    category: 'Programming Languages',
    title: 'Java Programmer',
    description: 'Building robust applications with OOP principles that actually make sense.',
    quote: 'Java: write once, debug everywhere—but at least it compiles.',
    icon: FaCode,
  },
  {
    id: 'python-power-user',
    category: 'Programming Languages',
    title: 'Python Power User',
    description: 'From data analysis to automation, Python is my Swiss Army knife.',
    quote: 'Python is like English for code—powerful because everyone understands it.',
    icon: SiPython,
  },
  {
    id: 'kotlin-developer',
    category: 'Programming Languages',
    title: 'Kotlin Mobile Developer',
    description: 'Android development is where I\'m heading, and Kotlin is my weapon of choice.',
    quote: 'Kotlin makes Android development feel less like a chore and more like art.',
    icon: SiKotlin,
  },
  {
    id: 'deluge-scripter',
    category: 'Programming Languages',
    title: 'Deluge Scripter',
    description: 'Automation and scripting in Deluge for workflow automation.',
    quote: 'Deluge: the unsung hero of workflow automation.',
    icon: FaCode,
  },

  // === TOOLS & PLATFORMS ===
  {
    id: 'vscode-power-user',
    category: 'Tools & Platforms',
    title: 'VSCode Power User',
    description: 'My coding playground with extensions and shortcuts optimized to perfection.',
    quote: 'VSCode: because life is too short for slow IDEs.',
    icon: SiVsco,
  },
  {
    id: 'android-studio',
    category: 'Tools & Platforms',
    title: 'Android Studio Developer',
    description: 'Building Android apps from zero to production.',
    quote: 'Android Studio: my creativity compressed into Java/Kotlin.',
    icon: SiAndroidstudio,
  },
  {
    id: 'jupyter-analyst',
    category: 'Tools & Platforms',
    title: 'Jupyter Notebook Analyst',
    description: 'Data analysis, ML experimentation, and quick prototyping.',
    quote: 'Jupyter is where ideas meet execution.',
    icon: SiJupyter,
  },
  {
    id: 'figma-expert',
    category: 'Tools & Platforms',
    title: 'Figma Design Expert',
    description: 'Every mockup, prototype, and design starts in Figma.',
    quote: 'Figma is where pixels become possibilities.',
    icon: SiFigma,
  },
  {
    id: 'firebase-specialist',
    category: 'Tools & Platforms',
    title: 'Firebase Integration Specialist',
    description: 'Real-time databases, authentication, and cloud functions.',
    quote: "Firebase: because I'd rather code features than infrastructure.",
    icon: SiFirebase,
  },
  {
    id: 'github-contributor',
    category: 'Tools & Platforms',
    title: 'GitHub Contributor',
    description: '202 visits recently—open source is where I give back and learn.',
    quote: 'GitHub is my portfolio. Every commit is a story.',
    icon: FaGithub,
  },

  // === DESIGN & UI/UX ===
  {
    id: 'material-design-expert',
    category: 'Design & UI/UX',
    title: 'Material Design 3 Expert',
    description: 'Not just using MD3—understanding the philosophy behind every decision.',
    quote: "Material Design 3 teaches you that beauty and usability aren't tradeoffs.",
    icon: SiMaterialdesign,
  },
  {
    id: 'design-competition-winner',
    category: 'Design & UI/UX',
    title: 'IITM Poster Design Winner (2024)',
    description: "Won a design competition with work that made people stop and look.",
    quote: 'One competition victory. Many more to come.',
    icon: FaPaintBrush,
  },
  {
    id: 'uiux-competition',
    category: 'Design & UI/UX',
    title: 'UI/UX Competition Participant',
    description: 'Proving that functionality can be beautiful.',
    quote: "Good design isn't noticed. Great design is invisible.",
    icon: FaPaintBrush,
  },
  {
    id: 'visual-prototyping',
    category: 'Design & UI/UX',
    title: 'Visual Prototyping Master',
    description: 'From concept to clickable prototype in Figma, ready for handoff.',
    quote: 'A prototype is worth a thousand requirements.',
    icon: FaLaptop,
  },

  // === MOBILE APP DEVELOPMENT ===
  {
    id: 'material-wallpaper-app',
    category: 'Mobile App Development',
    title: 'Material Design 3 Wallpaper App Builder',
    description: 'Creating a wallpaper app with expressive design.',
    quote: "Material Design 3 isn't just pretty—it's purposeful.",
    icon: FaLaptop,
  },
  {
    id: 'watermark-remover',
    category: 'Mobile App Development',
    title: 'Watermark Remover App Conceptualizer',
    description: 'Exploring the technical side of watermark removal.',
    quote: 'Technology should empower users.',
    icon: FaCode,
  },
  {
    id: 'pokedex-app',
    category: 'Mobile App Development',
    title: 'Pokedex/Trading Card App Planner',
    description: 'Planning an app that combines nostalgia with modern design.',
    quote: "Everyone loves Pokémon. I'm learning to build for that love.",
    icon: FaGamepad,
  },
  {
    id: 'drawing-app',
    category: 'Mobile App Development',
    title: 'Drawing App Explorer',
    description: 'Researching open-source painting apps with custom brushes.',
    quote: 'Digital art tools are the future.',
    icon: FaPaintBrush,
  },

  // === COMPETITIVE PROGRAMMING PLATFORMS ===
  {
    id: 'leetcode-500',
    category: 'Competitive Programming',
    title: 'LeetCode Target: 500+ Problems',
    description: 'Every problem is a step closer to mastery.',
    quote: "LeetCode problems aren't obstacles—they're stepping stones.",
    icon: FaTrophy,
  },
  {
    id: 'codechef-competitor',
    category: 'Competitive Programming',
    title: 'CodeChef Competitor',
    description: 'Participating in coding contests because competition sharpens skills.',
    quote: 'The contest is the classroom.',
    icon: FaTrophy,
  },
  {
    id: 'unstop-explorer',
    category: 'Competitive Programming',
    title: 'Unstop Explorer',
    description: "Finding competitions and opportunities across India's tech ecosystem.",
    quote: 'Unstop is where I discover my next challenge.',
    icon: FaTrophy,
  },

  // === HEALTH & WELLNESS ===
  {
    id: 'night-coder',
    category: 'Health & Wellness',
    title: 'Night Coder Lifestyle',
    description: 'Peak productivity hours are when everyone else is sleeping.',
    quote: 'The world at 2 AM is quiet. That\'s when I think best.',
    icon: FaHeartbeat,
  },
  {
    id: 'back-pain-management',
    category: 'Health & Wellness',
    title: 'Back Pain Management',
    description: 'Regular back pain from long coding sessions taught me ergonomics.',
    quote: 'Invest in a good chair or invest in chiropractors. Choose wisely.',
    icon: FaHeartbeat,
  },
  {
    id: 'wellness-conscious',
    category: 'Health & Wellness',
    title: 'Wellness Conscious',
    description: 'Learning to balance health with productivity.',
    quote: 'A healthy mind needs a healthy body.',
    icon: FaHeartbeat,
  },

  // === PROFESSIONAL DEVELOPMENT ===
  {
    id: 'credly-collector',
    category: 'Professional Development',
    title: 'Credly Badge Collector',
    description: 'Collecting digital credentials that prove expertise.',
    quote: 'Badges: the modern way to show skills.',
    icon: FaTrophy,
  },
  {
    id: 'job-search-active',
    category: 'Professional Development',
    title: 'Job Search Active',
    description: 'Checking Indeed and LinkedIn daily for opportunities.',
    quote: 'LinkedIn and Indeed: my daily bread and butter.',
    icon: FaLinkedin,
  },
  {
    id: 'growth-mindset',
    category: 'Professional Development',
    title: 'Growth Mindset',
    description: 'Every failure is feedback. Every challenge is an opportunity.',
    quote: 'The only way forward is through continuous improvement.',
    icon: FaBook,
  },

  // === FAMILY ===
  {
    id: 'proud-parent',
    category: 'Family',
    title: 'Proud Parent',
    description: "Supporting a daughter who's pursuing art and competitions.",
    quote: "She's artistic. I'm technical. Together, we're unstoppable.",
    icon: FaUsers,
  },
  {
    id: 'daughters-advocate',
    category: 'Family',
    title: "Daughter's Artist Advocate",
    description: "My daughter won a consolation prize in Kerala Tourism's international painting competition (2024).",
    quote: 'Her art inspired me. Now I\'m building tools for artists.',
    icon: FaUsers,
  },
];

// Group skills by category
export const skillsByCategory = skillsData.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skillsData>);
