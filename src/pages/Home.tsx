import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import About from '../components/sections/About';
import Capabilities from '../components/sections/Capabilities';
import ProjectsList from '../components/sections/ProjectsList';
import Engineering from '../components/sections/Engineering';
import Research from '../components/sections/Research';
import Experience from '../components/sections/Experience';
import Academics from '../components/sections/Academics';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <About />
      <Capabilities />
      <ProjectsList />
      <Engineering />
      <Research />
      <Experience />
      <Academics />
    </Layout>
  );
}
