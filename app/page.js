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
import getFeaturedProjects from "./(hooks)/getFeaturedProject";
import getTestimonials from "./(hooks)/getTestimonials";
import getSkills from "./(hooks)/getSkills";

export default async function Home() {
  const featured = await getFeaturedProjects();
  const testimonials = await getTestimonials();
  const skills = await getSkills();

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills skills={skills} />
      <MyService />
      <Experience />
      <Projects featured={featured[0]} />
      <Testimonials />
      <Testimonial testimonials={testimonials} />
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
