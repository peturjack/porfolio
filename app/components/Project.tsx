import React from "react";
import ContainerBox from "./ContainerBox";
import Text from "./typography/Text";

const Project = () => {
  return (
    <section id="projects">
      <ContainerBox>
        <Text type="h2">Projects</Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="shadow-md rounded-lg p-6">
            <span>project image</span>
            <h3>project title</h3>
            <p>project description</p>
          </div>
          <div className="shadow-md rounded-lg p-6">
            <span>project image</span>
            <h3>project title</h3>
            <p>project description</p>
          </div>
          <div className="shadow-md rounded-lg p-6">
            <span>project image</span>
            <h3>project title</h3>
            <p>project description</p>
          </div>
        </div>
      </ContainerBox>
    </section>
  );
};

export default Project;
