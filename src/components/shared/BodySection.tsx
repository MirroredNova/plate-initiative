import React from "react";

type Props = {
  children: React.ReactNode;
};

const BodySection = ({ children }: Props) => (
  <section className="flex justify-center">{children}</section>
);

export default BodySection;
