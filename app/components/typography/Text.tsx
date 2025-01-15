import React, { createElement } from "react";

type TextType = "h1" | "h2" | "h3" | "p"; // Define valid text types

const textStyles: Record<TextType, string> = {
  h1: "text-4xl sm:text-5xl md:text-7xl",
  h2: "md:text-3xl text-2xl font-bold mb-4 md:mb-8 text-center",
  h3: "md:text-2xl text-xl font-medium mb-2 md:mb-4",
  p: "text-base md:text-xl",
};

type TextProps = {
  type?: TextType; // Optional type prop
  className?: string; // Optional additional class names
  children: React.ReactNode; // Children to render
};

const Text = ({ className, children, type = "p" }: TextProps) => {
  const classType = textStyles[type];
  return createElement(
    type,
    { className: `${classType} ${className}` },
    children
  );
};

export default Text;
