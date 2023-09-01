import Link from "next/link";
import React from "react";

type Props = {
  header: string;
  text: string;
  buttonText: string;
  buttonLink: string;
};

const GetInvolvedLinks = ({ header, text, buttonText, buttonLink }: Props) => (
  <div className="flex flex-col gap-6 p-2">
    <h3 className="uppercase text-accent_primary font-sofia font-extrabold">
      {header}
    </h3>
    <p className="font-alice text-lg text-secondary_dark italic">{text}</p>
    <Link
      href={buttonLink}
      className="bg-accent_primary text-accent_secondary rounded-full 
        font-sofia py-4 px-6 sm:py-6 sm:px-9 box-content block w-fit font-extrabold mx-auto text-base sm:text-lg"
    >
      {buttonText}
    </Link>
  </div>
);

export default GetInvolvedLinks;
