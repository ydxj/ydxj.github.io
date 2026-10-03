import About from '../components/home/About';
import ContactCta from '../components/home/ContactCta';
import Experience from '../components/home/Experience';
import FeaturedProjects from '../components/home/FeaturedProjects';
import GalleryPreview from '../components/home/GalleryPreview';
import Hero from '../components/home/Hero';
import MediaPreview from '../components/home/MediaPreview';
import TechStrip from '../components/home/TechStrip';
import WorldSkills from '../components/home/WorldSkills';
import usePageMeta from '../hooks/usePageMeta';

const HomePage = () => {
  usePageMeta({
    title: 'Omar Zerhouni · Full-Stack Developer · WorldSkills Shanghai 2026',
    description:
      "Omar Zerhouni is a full-stack developer from Morocco (React, Node.js, Laravel) and Morocco's Web Technologies competitor at WorldSkills Shanghai 2026. Open to internships, full-time roles and freelance projects.",
    path: '/',
  });

  return (
    <>
      <Hero />
      <TechStrip />
      <About />
      <WorldSkills />
      <GalleryPreview />
      <MediaPreview />
      <Experience />
      <FeaturedProjects />
      <ContactCta />
    </>
  );
};

export default HomePage;
