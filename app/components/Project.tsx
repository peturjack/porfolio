import React from "react";
import ContainerBox from "./ContainerBox";
import Text from "./typography/Text";
import ProjectCard from "./ui/ProjectCard";

const Project = () => {
  return (
    <section id="projects">
      <ContainerBox>
        <Text type="h2">Projects</Text>
        <ProjectCard />
      </ContainerBox>
    </section>
  );
};

export default Project;
