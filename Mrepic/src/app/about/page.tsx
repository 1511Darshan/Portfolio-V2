'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CursorEffect from '@/components/CursorEffect';
import MindScene from '@/components/about/DiffusionScene';
import DetailCard from '@/components/about/DetailCard';
import { 
  FaGraduationCap, 
  FaExpand,
  FaCode,
  FaBed,
  FaLaptop,
  FaTrophy,
  FaRocket,
  FaBriefcase
} from 'react-icons/fa';
import { SiLeetcode, SiGithub, SiKotlin, SiPython } from 'react-icons/si';
import { GiCoffeeCup, GiNoodles } from 'react-icons/gi';
import { BiLeaf } from 'react-icons/bi';
import { IconType } from 'react-icons';

export type NodeCategory = 'education' | 'hobby' | 'favorite' | 'skill' | 'career';

export type AboutNode = {
  id: string;
  category: NodeCategory;
  title: string;
  subtitle?: string;
  period?: string;
  icon: IconType;
  emoji?: string;
  description: string;
  details?: { label: string; value: string }[];
  funFact?: string;
};

// --- Data ---

export const ABOUT_DATA: AboutNode[] = [
  // === EDUCATION ===
  {
    id: 'cit',
    category: 'education',
    title: 'Chennai Institute of Technology',
    subtitle: 'B.Tech in AI & Data Science',
    period: '2024 – Present',
    icon: FaGraduationCap,
    description: "Currently pursuing a degree in Artificial Intelligence and Data Science. Focusing on machine learning, deep learning, and data-driven solutions.",
    details: [
      { label: 'Year', value: '1st Year' },
      { label: 'Focus', value: 'AI & ML' },
    ],
  },
  {
    id: 'sboa',
    category: 'education',
    title: 'SBOA School & Junior College',
    subtitle: 'Higher Secondary Education',
    period: '2022 – 2024',
    icon: FaGraduationCap,
    description: "Completed higher secondary education with a strong foundation in science and mathematics.",
    details: [
      { label: 'Stream', value: 'Science' },
      { label: 'Focus', value: 'STEM' },
    ],
  },
  {
    id: 'nptel',
    category: 'education',
    title: 'NPTEL Online Courses',
    icon: FaLaptop,
    emoji: '📚',
    description: "Taking advanced courses from IITs through NPTEL to supplement degree with world-class education.",
    funFact: "NPTEL: IIT quality education, zero tuition"
  },
  {
    id: 'skill-india',
    category: 'education',
    title: 'Skill India Programs',
    icon: FaTrophy,
    emoji: '🎯',
    description: "Participating in government upskilling programs to build industry-relevant competencies.",
    funFact: "Turning government programs into career advantages"
  },
  {
    id: 'google-skills',
    category: 'education',
    title: 'Google Skills Certifications',
    icon: FaLaptop,
    emoji: '🔵',
    description: "Completing Google's free certification programs in cloud, data, and digital skills.",
    details: [
      { label: 'Platform', value: 'Google' },
    ],
    funFact: "Free certifications that actually look good on resumes"
  },

  // === HOBBIES ===
  {
    id: 'coding',
    category: 'hobby',
    title: 'Recreational Coding',
    icon: FaCode,
    emoji: '💻',
    description: "When I'm not coding for work, I'm coding for fun. Building random side projects at 2 AM is my idea of a good time.",
    funFact: "Yes, I code for work AND for fun. No, I don't need help."
  },
  {
    id: 'leetcode',
    category: 'hobby',
    title: 'LeetCode Grind',
    icon: SiLeetcode,
    emoji: '⚡',
    description: "Solving algorithm problems daily. Currently targeting 500+ problems to master DSA.",
    details: [
      { label: 'Platform', value: 'LeetCode' },
      { label: 'Target', value: '500+ Problems' },
    ],
    funFact: "Each problem solved = another weapon in my arsenal"
  },
  {
    id: 'hackathons',
    category: 'hobby',
    title: 'Hackathon Hunting',
    icon: FaRocket,
    emoji: '🚀',
    description: "Constantly searching for and participating in hackathons. Built AI mental wellness app for Google Gen AI hackathon.",
    details: [
      { label: 'Competitions', value: '7+ Entered' },
      { label: 'Status', value: 'Competing' },
    ],
    funFact: "Every hackathon is a learning experience"
  },
  {
    id: 'design',
    category: 'hobby',
    title: 'UI/UX Design',
    icon: FaLaptop,
    emoji: '🎨',
    description: "Proficient in Figma. Won IITM design competition (2024). Design is where art meets function.",
    details: [
      { label: 'Tool', value: 'Figma' },
      { label: 'Wins', value: 'IITM 2024' },
    ],
    funFact: "Material Design 3 = my design philosophy"
  },
  {
    id: 'video-creation',
    category: 'hobby',
    title: 'Video Content Creation',
    icon: FaLaptop,
    emoji: '📹',
    description: "Creating short-form educational videos and 1-minute tech insights. Video is the future of learning.",
    funFact: "One minute = infinite possibilities"
  },
  {
    id: 'open-source',
    category: 'hobby',
    title: 'Open Source Contribution',
    icon: SiGithub,
    emoji: '🔗',
    description: "Contributing to GitHub projects. 202 visits recently. Every commit is a story.",
    funFact: "GitHub is my portfolio"
  },
  {
    id: 'research',
    category: 'hobby',
    title: 'Tech Research',
    icon: FaLaptop,
    emoji: '🔬',
    description: "Deep-diving into specs, reviews, and tech trends. Data-driven decisions only.",
    funFact: "I research before I buy. I research before I code."
  },
  {
    id: 'anime',
    category: 'hobby',
    title: 'Anime Enthusiast',
    icon: FaLaptop,
    emoji: '🍿',
    description: "Certified weeb with a MAL list longer than my assignment deadlines.",
    details: [
      { label: 'Status', value: 'Certified Weeb' },
    ],
    funFact: "My watch list is longer than my to-do list"
  },
  {
    id: 'drawing',
    category: 'hobby',
    title: 'Digital Art',
    icon: FaLaptop,
    emoji: '✏️',
    description: "Love sketching characters and creating digital art. Bringing imagination to life on canvas.",
    funFact: "Started doodling in math class, now it's legit"
  },
  {
    id: 'reading',
    category: 'hobby',
    title: 'Reading & Literature',
    icon: FaLaptop,
    emoji: '📖',
    description: "From tech articles to light novels. Reading keeps my mind sharp.",
    funFact: "Can finish a good light novel in one sitting"
  },
  {
    id: 'youtube',
    category: 'hobby',
    title: 'YouTube Deep Dives',
    icon: FaLaptop,
    emoji: '▶️',
    description: "233 visits recently. Absorbing knowledge from tech, design, and dev channels.",
    funFact: "YouTube University: free education that actually matters"
  },
  {
    id: 'reddit',
    category: 'hobby',
    title: 'Reddit Tech Communities',
    icon: FaLaptop,
    emoji: '🔗',
    description: "Browsing tech subreddits. The internet is crowdsourced wisdom.",
    funFact: "Reddit threads have solved more problems than Google"
  },
  {
    id: 'sleeping',
    category: 'hobby',
    title: 'Professional Napping',
    icon: FaBed,
    emoji: '😴',
    description: "A highly underrated skill mastered over years. Can nap anywhere, anytime.",
    details: [
      { label: 'Specialty', value: 'Power Naps' },
      { label: 'Record', value: '47 seconds' },
    ],
    funFact: "Sleeping is a feature, not a bug"
  },

  // === FAVORITES ===
  {
    id: 'fav-sushi',
    category: 'favorite',
    title: 'Sushi',
    icon: FaLaptop,
    emoji: '🍣',
    description: "Fresh, elegant, and always satisfying. Salmon sashimi is the ultimate comfort food.",
    funFact: "I judge a city by its sushi restaurants"
  },
  {
    id: 'fav-coffee',
    category: 'favorite',
    title: 'Cappuccino',
    icon: GiCoffeeCup,
    emoji: '☕',
    description: "The classic morning ritual. Perfectly balanced espresso with velvety microfoam.",
    funFact: "One cup to wake up, second to feel alive"
  },
  {
    id: 'fav-matcha',
    category: 'favorite',
    title: 'Matcha',
    icon: BiLeaf,
    emoji: '🍵',
    description: "Earthy, smooth, and the perfect balance of caffeine and calm. My focus potion.",
    funFact: "Matcha latte with oat milk = productivity hack"
  },
  {
    id: 'fav-indomie',
    category: 'favorite',
    title: 'Indomie Goreng',
    icon: GiNoodles,
    emoji: '🍜',
    description: "The national treasure of Indonesia. Simple, affordable, and impossibly delicious.",
    funFact: "Best served at 2 AM after a coding session"
  },
  {
    id: 'fav-vscode',
    category: 'favorite',
    title: 'VSCode',
    icon: FaLaptop,
    emoji: '💻',
    description: "My coding playground. Extensions and shortcuts optimized to perfection.",
    funFact: "VSCode: life is too short for slow IDEs"
  },
  {
    id: 'fav-figma',
    category: 'favorite',
    title: 'Figma',
    icon: FaLaptop,
    emoji: '🎨',
    description: "Every mockup and prototype starts here. Figma is where pixels become possibilities.",
    funFact: "Figma: turning ideas into reality"
  },
  {
    id: 'fav-firebase',
    category: 'favorite',
    title: 'Firebase',
    icon: FaLaptop,
    emoji: '🔥',
    description: "Real-time databases and cloud functions. Firebase: code features, not infrastructure.",
    funFact: "I'd rather code features than DevOps"
  },
  {
    id: 'fav-android',
    category: 'favorite',
    title: 'Android Development',
    icon: FaLaptop,
    emoji: '📱',
    description: "Building apps from zero to production. Kotlin makes it feel less like a chore.",
    funFact: "Android: my creativity compressed into code"
  },
  {
    id: 'fav-poco',
    category: 'favorite',
    title: 'Poco F5 Phone',
    icon: FaLaptop,
    emoji: '📱',
    description: "My primary device. Affordable power that doesn't compromise.",
    details: [
      { label: 'Device', value: 'Poco F5' },
      { label: 'Usage', value: 'Everything' },
    ],
    funFact: "Poco F5: proof that expensive ≠ better"
  },
  {
    id: 'fav-linux',
    category: 'favorite',
    title: 'Linux Development',
    icon: FaLaptop,
    emoji: '🐧',
    description: "Linux for servers and serious development. The OS for people who like control.",
    funFact: "Linux: when you want to know what's actually happening"
  },
  {
    id: 'fav-github',
    category: 'favorite',
    title: 'GitHub',
    icon: SiGithub,
    emoji: '🐙',
    description: "My code portfolio. Every commit is a stepping stone.",
    details: [
      { label: 'Visits', value: '202 Recent' },
    ],
    funFact: "GitHub is my permanent resume"
  },
  {
    id: 'fav-pixiv',
    category: 'favorite',
    title: 'Pixiv Art',
    icon: FaLaptop,
    emoji: '🎨',
    description: "Exploring digital art for inspiration and learning.",
    funFact: "Pixiv: where anime art meets technical mastery"
  },

  // === SKILLS ===
  {
    id: 'skill-cpp',
    category: 'skill',
    title: 'C++ Expert',
    icon: FaCode,
    emoji: '⚙️',
    description: "My first love in programming. Arrays, pointers, algorithms. Deep relationship.",
    funFact: "C++ teaches you respect for memory"
  },
  {
    id: 'skill-python',
    category: 'skill',
    title: 'Python Power User',
    icon: SiPython,
    emoji: '🐍',
    description: "Data analysis, automation, ML. Python is my Swiss Army knife.",
    funFact: "Python: English for code"
  },
  {
    id: 'skill-java',
    category: 'skill',
    title: 'Java Programmer',
    icon: FaCode,
    emoji: '☕',
    description: "Building robust applications with OOP principles that make sense.",
    funFact: "Java: write once, debug everywhere"
  },
  {
    id: 'skill-kotlin',
    category: 'skill',
    title: 'Kotlin Developer',
    icon: SiKotlin,
    emoji: '🎯',
    description: "Android development with Kotlin. Making app dev feel like art.",
    funFact: "Kotlin makes Android feel modern and safe"
  },
  {
    id: 'skill-dsa',
    category: 'skill',
    title: 'DSA Master',
    icon: FaLaptop,
    emoji: '📊',
    description: "BSTs, graphs, dynamic programming. Good code is fast. Great code is elegant.",
    details: [
      { label: 'Focus', value: 'Algorithms' },
      { label: 'Platform', value: 'LeetCode' },
    ],
  },
  {
    id: 'skill-mobile',
    category: 'skill',
    title: 'Mobile App Development',
    icon: FaLaptop,
    emoji: '📱',
    description: "Material Design 3 wallpaper apps, watermark removers, creative projects.",
    details: [
      { label: 'Framework', value: 'Android' },
      { label: 'Design', value: 'MD3' },
    ],
  },
  {
    id: 'skill-web',
    category: 'skill',
    title: 'Web Development',
    icon: FaLaptop,
    emoji: '🌐',
    description: "Express.js, REST APIs, middleware routing. Building the invisible backbone.",
    funFact: "Backend gets my attention, frontend gets the glory"
  },
  {
    id: 'skill-database',
    category: 'skill',
    title: 'Database Design',
    icon: FaLaptop,
    emoji: '💾',
    description: "MySQL schema design that scales. Good databases don't crash at 2 AM.",
    funFact: "Databases: the foundation nobody sees"
  },
  {
    id: 'skill-cloud',
    category: 'skill',
    title: 'Cloud Platforms',
    icon: FaLaptop,
    emoji: '☁️',
    description: "GCP, Firebase, Cloudinary. Making distributed computing feel manageable.",
    details: [
      { label: 'Platforms', value: 'GCP, Firebase' },
    ],
  },
  {
    id: 'skill-design',
    category: 'skill',
    title: 'UI/UX Design',
    icon: FaLaptop,
    emoji: '🎨',
    description: "Figma expert. Material Design 3 philosophy. Beauty meets usability.",
    details: [
      { label: 'Tool', value: 'Figma' },
      { label: 'Standard', value: 'MD3' },
    ],
  },
  {
    id: 'skill-git',
    category: 'skill',
    title: 'Git & GitHub',
    icon: SiGithub,
    emoji: '🔗',
    description: "Version control mastery. Open source contribution. Every commit tells a story.",
    funFact: "Git: making collaboration actually possible"
  },
  {
    id: 'skill-ml',
    category: 'skill',
    title: 'Machine Learning',
    icon: FaLaptop,
    emoji: '🤖',
    description: "AI-powered applications. Mental wellness app for Google hackathon.",
    details: [
      { label: 'Focus', value: 'AI Applications' },
    ],
  },
  {
    id: 'skill-problem-solving',
    category: 'skill',
    title: 'Problem Solving',
    icon: FaLaptop,
    emoji: '🧠',
    description: "Daily algorithm debugging. Custom solutions. Every problem is a puzzle.",
    funFact: "Debugging is like being a detective with a keyboard"
  },
  {
    id: 'skill-research',
    category: 'skill',
    title: 'Research & Learning',
    icon: FaLaptop,
    emoji: '📚',
    description: "Deep-diving into documentation. Learning from multiple sources constantly.",
    funFact: "Research first, code second"
  },
  {
    id: 'skill-video',
    category: 'skill',
    title: 'Video Editing',
    icon: FaLaptop,
    emoji: '🎬',
    description: "Short-form educational content. 1-minute videos. Visual storytelling.",
    funFact: "Brevity is the soul of wit"
  },
  {
    id: 'skill-security',
    category: 'skill',
    title: 'Security & Encryption',
    icon: FaLaptop,
    emoji: '🔐',
    description: "Code security analysis. Secure code is happy code.",
    details: [
      { label: 'Interest', value: 'Code Auditing' },
    ],
  },
  {
    id: 'skill-devops',
    category: 'skill',
    title: 'DevOps & CI/CD',
    icon: FaLaptop,
    emoji: '🔄',
    description: "Learning deployment pipelines. Code that doesn't deploy is just art.",
    funFact: "From code to production = the full cycle"
  },
  {
    id: 'skill-api',
    category: 'skill',
    title: 'API Development',
    icon: FaLaptop,
    emoji: '🔗',
    description: "REST API architecture. Intuitive endpoints that scale.",
    funFact: "APIs: conversations between systems"
  },
  {
    id: 'skill-ai-tools',
    category: 'skill',
    title: 'AI Tools & Research',
    icon: FaLaptop,
    emoji: '🤖',
    description: "ChatGPT, Perplexity, NotebookLM. Using AI to enhance learning and development.",
    funFact: "AI is my research assistant now"
  },
  {
    id: 'skill-image-processing',
    category: 'skill',
    title: 'Image Processing',
    icon: FaLaptop,
    emoji: '🖼️',
    description: "Watermark removal, image manipulation, Cloudinary optimization.",
    funFact: "Images are data waiting to be transformed"
  },
  {
    id: 'skill-competitive-programming',
    category: 'skill',
    title: 'Competitive Programming',
    icon: SiLeetcode,
    emoji: '🏆',
    description: "CodeChef, LeetCode, Vision.hack2skill. Competition sharpens skills.",
    details: [
      { label: 'Platforms', value: 'LeetCode, CodeChef' },
      { label: 'Target', value: '500+ Problems' },
    ],
  },

  // === CAREER ===
  {
    id: 'career-microsoft',
    category: 'career',
    title: 'Microsoft Internship Goal',
    icon: FaBriefcase,
    emoji: '💼',
    description: "Target company for building my career in AI/ML and software engineering.",
    funFact: "Not just applying; building the case for why they need me"
  },
  {
    id: 'career-google',
    category: 'career',
    title: 'Google Career Path',
    icon: FaBriefcase,
    emoji: '🔵',
    description: "Target company for AI, ML, and innovative product development.",
    details: [
      { label: 'Focus', value: 'AI/ML Products' },
    ],
  },
  {
    id: 'career-salary',
    category: 'career',
    title: '₹1 Crore CTC Goal',
    icon: FaTrophy,
    emoji: '💰',
    description: "Aiming for a compensation package that matches my ambition and impact.",
    details: [
      { label: 'Target', value: '₹1 Crore' },
      { label: 'Horizon', value: '3-5 Years' },
    ],
    funFact: "Not chasing money; chasing impact worth that much"
  },
  {
    id: 'career-500-problems',
    category: 'career',
    title: '500+ LeetCode Problems',
    icon: SiLeetcode,
    emoji: '⚡',
    description: "Systematic problem-solving mastery for interview preparation and skill building.",
    details: [
      { label: 'Current', value: 'In Progress' },
      { label: 'Target', value: '500+' },
    ],
  },
  {
    id: 'career-portfolio',
    category: 'career',
    title: 'High-Impact Portfolio',
    icon: FaBriefcase,
    emoji: '📂',
    description: "Building resume-worthy projects that impress HR and showcase innovation.",
    funFact: "Projects speak louder than interviews"
  },
  {
    id: 'career-open-source',
    category: 'career',
    title: 'Open Source Leadership',
    icon: SiGithub,
    emoji: '🔗',
    description: "Contributing meaningfully to GitHub projects. Every commit builds reputation.",
    details: [
      { label: 'Recent Visits', value: '202' },
    ],
  },
  {
    id: 'career-hackathons',
    category: 'career',
    title: 'Hackathon Participation',
    icon: FaRocket,
    emoji: '🚀',
    description: "Competing in hackathons to build skills, network, and prove execution abilities under pressure.",
    details: [
      { label: 'Events', value: '7+' },
      { label: 'Goal', value: '1st Place' },
    ],
    funFact: "Winning is the goal; learning is the journey"
  },
  {
    id: 'career-innovation',
    category: 'career',
    title: 'Building Innovative Products',
    icon: FaRocket,
    emoji: '💡',
    description: "Creating novel solutions like AI mental wellness apps and watermark removal tools.",
    funFact: "The best projects solve problems nobody knew they had"
  },
];

const getCategoryLabel = (category: NodeCategory): string => {
  const labels: Record<NodeCategory, string> = {
    education: 'Education',
    hobby: 'Hobby',
    favorite: 'Favorite',
    skill: 'Skill',
    career: 'Career Goal'
  };
  return labels[category];
};


export default function AboutPage() {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [theme, setTheme] = useState('dark');
  
  const selectedItem = ABOUT_DATA.find(e => e.id === selectedNodeId);

  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(currentTheme);
    };
    updateTheme();
  }, []);

  return (
    <>
      <main className="relative w-full h-screen bg-background transition-colors duration-500">
        
        {/* 3D Scene */}
        <div className="absolute inset-0 z-0">
          <MindScene 
            aboutData={ABOUT_DATA}
            onNodeSelect={(data) => setSelectedNodeId(data?.id || null)}
            theme={theme}
          />
        </div>

        {/* HUD / Title */}
        <div className="absolute top-32 left-8 md:left-16 z-20 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs text-muted-foreground mb-4 tracking-wide">Get to know me</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[0.9]">
              Inside <br />
              <span className="text-muted-foreground">My Mind</span>
            </h1>
            
            {/* Stats Panel */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 p-4 bg-card/80 border border-card-border inline-flex flex-col gap-3 pointer-events-auto backdrop-blur-md rounded-lg"
            >
              <div className="flex items-center justify-between w-full gap-8">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Total Facts</div>
                  <div className="text-2xl font-semibold text-foreground">65+</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Categories</div>
                  <div className="text-2xl font-semibold text-foreground">5</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Click on nodes to explore
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Detail Card */}
        <AnimatePresence>
          {selectedItem && (
            <DetailCard 
              item={selectedItem} 
              category={getCategoryLabel(selectedItem.category)}
              onClose={() => setSelectedNodeId(null)} 
            />
          )}
        </AnimatePresence>

        {/* Instructions */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 pointer-events-none text-center z-30"
        >
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Drag to rotate</span>
            <span className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
            <span>Right-click to pan</span>
            <span className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
            <span>Scroll to zoom</span>
          </div>
        </motion.div>
      </main>
    </>
  );
}
