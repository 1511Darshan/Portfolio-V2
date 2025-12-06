'use client';

import React from 'react';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiTensorflow, SiPytorch, SiScikitlearn, SiJupyter, SiPostgresql, SiOpenai, SiHuggingface } from 'react-icons/si';
import Hero from '@/components/Hero';
import CursorEffect from '@/components/CursorEffect';
import MarqueeBanner from '@/components/home/MarqueeBanner';
import DiffusionProfile from '@/components/home/DiffusionProfile';
import GenerativeProjects from '@/components/home/GenerativeProjects';
import TechStack from '@/components/home/TechStack';
import AgencyFooter from '@/components/home/AgencyFooter';

const portfolioData = {
  personalInfo: {
    name: "Darshan K",
    alias: "DarshanK",
    dreamJob: "AI & Data Science Professional",
    bio: "Passionate about artificial intelligence and data science. Currently pursuing B.Tech in AI and Data Science, exploring deep learning, neural architectures, and data-driven solutions.",
    email: "rushdarshan@gmail.com",
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/1511Darshan', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rush-darshan-k', icon: FaLinkedin },
  ],
  skills: [
    {
      category: 'AI & Machine Learning',
      items: [
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'Scikit-learn', icon: SiScikitlearn },
        { name: 'OpenAI', icon: SiOpenai },
        { name: 'HuggingFace', icon: SiHuggingface }
      ]
    },
    {
      category: 'Programming',
      items: [
        { name: 'Python', icon: FaPython },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'React', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Node.js', icon: FaNodeJs }
      ]
    },
    {
      category: 'Tools & Infrastructure',
      items: [
        { name: 'Docker', icon: FaDocker },
        { name: 'Git', icon: FaGitAlt },
        { name: 'Jupyter', icon: SiJupyter },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Tailwind', icon: SiTailwindcss }
      ]
    },
  ],
  projects: [
    {
      title: 'Daily Doodle Chain',
      description: 'A lightweight social creativity app where users contribute single-panel doodles to evolving chain-stories. Features include drawing canvas, chain viewer, favorites, Firebase backend, and AdMob integration.',
      tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Material 3'],
      metrics: { license: 'Apache 2.0', platform: 'Android', features: 'AdMob + Analytics' },
      live: 'https://github.com/1511Darshan/daily-doodle',
      code: 'https://github.com/1511Darshan/daily-doodle'
    },
  ],
  competencies: [
    { name: 'Deep Learning & Neural Networks', level: 95 },
    { name: 'Computer Vision & NLP', level: 92 },
    { name: 'Model Optimization & Deployment', level: 88 },
    { name: 'Research & Paper Implementation', level: 85 },
  ],
};

export default function Home() {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
                
                body {
                    font-family: 'Inter', sans-serif;
                    overflow-x: hidden;
                }
            `}</style>

            <CursorEffect />

            <main className="relative bg-background z-10">
                <Hero />
                <MarqueeBanner />
                <DiffusionProfile />
                <GenerativeProjects projects={portfolioData.projects} />
                <TechStack skills={portfolioData.skills} />
            </main>

            <AgencyFooter />
        </>
    );
}
