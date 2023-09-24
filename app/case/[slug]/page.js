import { Navbar, Collaborate, Footer } from "../../(components)";
import Title from "./Title";
import Hero from "./Hero";
import TechStack from "./TechStack";
import getSkills from "../../(hooks)/getSkills";
import Overview from "./Overview";
import Problem from "./Problem";
import FigmaTemplate from "./FigmaTemplate";
import MyProcess from "./MyProcess";
import ChallengeAndLearning from "./ChallengeAndLearning";
import OtherProject from "./OtherProject";
import getCurrentProject from "@/app/(hooks)/getCurrentProject";
import getProject from "@/app/(hooks)/getProject";

const HomePage = async ({ params }) => {
  const slug = params.slug;
  const projects = await getCurrentProject(slug);
  const other = await getProject();
  const skills = await getSkills();

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Title projectName={projects.name} desc={projects.short_description} />
      <Hero
        image={projects.preview_image}
        github={projects.github}
        demo={projects.demo}
      />
      <TechStack
        stack={projects.stack}
        role={projects.role}
        startDate={projects.start_date}
        endDate={projects.end_date}
      />
      <Overview overview={projects.overview} />
      <Problem
        image={projects.statement_image}
        statement={projects.statement}
      />
      <FigmaTemplate image={projects.figma_image} />
      <MyProcess />
      <ChallengeAndLearning
        challenges={projects.challenges}
        learnings={projects.learnings}
      />
      <OtherProject other={other} slug={slug} />
      <Collaborate />
      <Footer />
    </main>
  );
};

export default HomePage;
