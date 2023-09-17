import React from "react";
import Cards from "./Cards";

const Projects = ({ projects }) => {
  return (
    <main
      className="flex items-center justify-center md:mb-[150px] md:mt-[250px]"
      id="projects"
    >
      <section className="w-full max-w-[1200px] px-4">
        <div className="flex items-center justify-center mb-16 gap-4">
          <h1 className="font-nothing text-6xl">Projects</h1>
          <div className="w-1/2 h-[2px] bg-white" />
        </div>

        {projects?.map((item, index) => (
          <Cards
            key={index}
            index={index}
            name={item.name}
            description={item.description}
            skills={item.skills}
            img={item.img}
            stack={item.stack}
            slug={item.slug}
            github={item.github}
            demo={item.demo}
          />
        ))}
      </section>
    </main>
  );
};

export default Projects;
