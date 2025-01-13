import { textType } from "@/app/utils/text";
import React, { createElement } from "react";

type TextProps = {
  type?: textType;
  className?: string;
  children: React.ReactNode;
};
const Text: React.FC<TextProps> = ({ className, children, type = "p" }) => {
  return createElement(type, { className: { className }, type }, children);
};

export default Text;
