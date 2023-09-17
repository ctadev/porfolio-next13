import {
  Navbar,
  Hero,
  Skills,
  MyService,
  Experience,
  Projects,
  Testimonials,
  Testimonial,
  Footer,
  Collaborate,
} from "./(components)";
import getProject from "./(hooks)/getProject";
import getExperince from "./(hooks)/getExperience";
import getSkills from "./(hooks)/getSkills";

export default async function Home() {
  const projects = await getProject();
  const experience = await getExperince();
  const skills = await getSkills();

  return (
    <main>
      <Navbar />
      <Hero />
      <Skills skills={skills} />
      <MyService />
      <Experience />
      <Projects />
      <Testimonials />
      <Testimonial /> 
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
