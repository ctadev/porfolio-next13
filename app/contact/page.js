import { Navbar, Footer } from "../(components)";
import Collaborate from "./Collaborate";
import Title from "./Title";
import Form from "./Form";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <Title />
      <Form />
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
