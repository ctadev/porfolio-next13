import { Navbar, Footer, Collaborate } from "../(components)";
import Title from "./Title";
import CaseStudies from "./CaseStudies";

export default async function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Title />
      <CaseStudies />
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
