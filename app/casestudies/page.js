import { Navbar, Footer, Collaborate } from "../(components)";
import Title from "./Title";
import CaseStudies from "./CaseStudies";
import getProject from "../(hooks)/getProject";

export default async function Home() {
  const project = await getProject();

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Title />
      <CaseStudies project={project} />
      <Collaborate />
      <Footer />
      {/* <Hero />
          <About />vv
          <Projects projects={projects} />
          <Experiences experience={experience} />
          <Contact />
          <Footer /> */}
    </main>
  );
}
