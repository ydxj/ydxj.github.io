import { FiGithub, FiLinkedin } from 'react-icons/fi';
import resume from '../assets/resume/Cv de Omar Zerhouni.pdf';

export const SITE_URL = 'https://zerhouniomar.me';

export const profile = {
  name: 'Omar Zerhouni',
  firstName: 'Omar',
  lastName: 'Zerhouni',
  role: 'Full-Stack Developer',
  country: 'Morocco',
  resume,
  resumeFileName: 'Omar-Zerhouni-CV.pdf',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zerhouni-omar/', icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/ydxj', icon: FiGithub },
];

// Primary navigation. `section` is the id on the home page; `match` marks the
// link active on a sub-page that belongs to that section.
export const navigation = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about' },
  { label: 'Experience', section: 'experience' },
  { label: 'WorldSkills', section: 'worldskills', match: '/worldskills' },
  { label: 'Projects', section: 'projects', match: '/projects' },
  { label: 'Media', section: 'media', match: '/media' },
  { label: 'Contact', section: 'contact' },
];

// EmailJS credentials used by the contact form (public keys by design).
export const emailjsConfig = {
  serviceId: 'service_7yh0zzb',
  templateId: 'template_vvzqrgo',
  publicKey: 'F4CedTAn0F7HIccVu',
};
