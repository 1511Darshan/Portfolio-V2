import { 
  FaYoutube, 
  FaTelegram, 
  FaDiscord, 
  FaLinkedin, 
  FaCertificate,
  FaGithub
} from 'react-icons/fa';
import {
  SiGoogle,
  SiKaggle,
} from 'react-icons/si';
import type { SocialItem, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = { 
  alias: 'Darshan K' 
};

export const socials: SocialItem[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    href: 'https://www.youtube.com/@epic-mr',
    icon: FaYoutube,
    description: 'AI demos, research breakdowns, and development logs.',
    accent: '#FF0033',
    gradientFrom: '#FF3D3D',
    gradientTo: '#B31217',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    href: 'https://t.me/obed_xyz',
    icon: FaTelegram,
    description: 'Direct updates and channel broadcasts.',
    accent: '#24A1DE',
    gradientFrom: '#24A1DE',
    gradientTo: '#157EBA',
  },
  {
    id: 'discord',
    name: 'Discord',
    href: 'https://discord.com/users/1369940142252363796',
    icon: FaDiscord,
    description: 'Reach me via DMs or mentions.',
    accent: '#5865F2',
    gradientFrom: '#5865F2',
    gradientTo: '#3C45A5',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rush-darshan-k/',
    icon: FaLinkedin,
    description: 'Professional profile, experience, and networking.',
    accent: '#0A66C2',
    gradientFrom: '#0A66C2',
    gradientTo: '#004182',
  },
  {
    id: 'credly',
    name: 'Credly',
    href: 'https://www.credly.com/users/darshan-k.ea543207',
    icon: FaCertificate,
    description: 'Digital badges, certifications, and professional achievements.',
    accent: '#FF8500',
    gradientFrom: '#FF8500',
    gradientTo: '#E5740A',
  },
  {
    id: 'google-developers',
    name: 'Google Developers',
    href: 'https://g.dev/rushdarshan',
    icon: SiGoogle,
    description: 'Developer profile and activities across Google platforms.',
    accent: '#1A73E8',
    gradientFrom: '#34A853',
    gradientTo: '#1A73E8',
  },
  {
    id: 'kaggle',
    name: 'Kaggle',
    href: 'https://www.kaggle.com/darshan1511',
    icon: SiKaggle,
    description: 'Datasets, notebooks, and competitions.',
    accent: '#20BEFF',
    gradientFrom: '#20BEFF',
    gradientTo: '#0095FF',
  },
  {
    id: 'github',
    name: 'GitHub',
    href: 'https://github.com/1511Darshan',
    icon: FaGithub,
    description: 'Open-source projects, code, and contributions.',
    accent: '#FFFFFF',
    gradientFrom: '#0A0A0A',
    gradientTo: '#1A1A1A',
  },
];