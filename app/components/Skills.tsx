"use client";
import React from "react";
import { skills } from "../utils/content";
import SkillCard from "./ui/SkillCard";
import { motion } from "motion/react";
import ContainerBox from "./ContainerBox";
import Text from "./typography/Text";
const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-slate-900 to-slate-700"
    >
      <ContainerBox>
        <Text type="h2" className="text-white ">
          Skills
        </Text>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => {
            return <SkillCard key={index} skill={skill} />;
          })}
        </motion.div>
      </ContainerBox>
    </section>
  );
};

export default Skills;
