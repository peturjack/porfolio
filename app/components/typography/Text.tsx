import React, { createElement } from "react";

type TextType = "h1" | "h2" | "h3" | "p"; // Define valid text types

const textStyles: Record<TextType, string> = {
  h1: "text-7xl",
  h2: "text-3xl font-bold mb-8 text-center",
  h3: "text-2xl font-medium mb-4",
  p: "text-base",
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
