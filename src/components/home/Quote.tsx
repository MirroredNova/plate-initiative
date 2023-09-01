import React from "react";

type Props = {
  text: string;
  by: string;
};

const Quote = ({ text, by }: Props) => (
  <section className="flex justify-center">
    <div className="flex px-12 py-20 max-w-5xl gap-4 flex-col text-center font-sofia">
      <h2 className="font-extrabold text-secondary_dark text-3xl lg:text-4xl/[48px] px-4 py-2 italic">
        {`"${text}"`}
      </h2>
      <p className="px-4 py-2 text-accent_primary font-extrabold tracking-wider text-base">
        {by}
      </p>
    </div>
  </section>
);

export default Quote;
