import React from "react";
import { IconType } from "react-icons";

type SkillCardProps = {
  skill: {
    name: string;
    icon: IconType;
  };
};

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div
      className="flex flex-col items-center p-4 bg-white
     rounded-lg shadow-md hover:shadow-lg transition duration-300 
     "
    >
      <skill.icon className="text-4xl mb-2 text-orange-500" />
      <span className="text-lg font-semibold">{skill.name}</span>
    </div>
  );
};

export default SkillCard;
