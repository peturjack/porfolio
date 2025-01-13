import React from "react";
type ContainerBoxProps = {
  children: React.ReactNode;
  className?: string;
};
const ContainerBox = ({ children, className }: ContainerBoxProps) => {
  return (
    <div className={`container mx-auto px-4 py-20 ${className}`}>
      {children}
    </div>
  );
};

export default ContainerBox;
