import { About } from '@/components/about';
import { Certificates } from '@/components/certificates';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = async () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background fixed bottom-4 right-4 z-30 sm:bottom-8 sm:right-8" />
    </>
  );
};

export default HomePage;
