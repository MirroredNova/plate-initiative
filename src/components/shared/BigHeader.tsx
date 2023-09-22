import React from "react";

type Props = {
  children: React.ReactNode;
};

const BigHeader = ({ children }: Props) => (
  <h2 className="font-sofia text-3xl sm:text-5xl text-secondary_dark font-bold mb-6">
    {children}
  </h2>
);

export default BigHeader;
