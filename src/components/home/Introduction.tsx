import Link from "next/link";
import React from "react";

const Introduction = () => (
  <section className="flex justify-center pt-16 lg:pt-0 lg:mt-0">
    <div className="flex flex-col lg:flex-row px-3 sm:px-12 py-20 max-w-5xl gap-4">
      <div className="flex flex-col p-2 lg:p-4">
        <h3 className="text-accent_primary text-base font-extrabold font-sofia tracking-wide">
          OUR OBJECTIVE:
        </h3>
        <h1 className="text-secondary_dark text-3xl sm:text-9xl font-bold mb-4 sm:mb-20">
          P.L.A.T.E.
        </h1>
        <p className="font-alice text-lg">
          We equip underserved youths with the tools to become innovators in the
          field of culinary arts by empowering them to explore opportunities and
          acquire essential life skills.
        </p>
      </div>
      <div className="my-auto p-2 lg:p-4">
        <div className="text-accent_secondary bg-accent_primary rounded-full px-12 py-5 font-semibold w-fit whitespace-nowrap">
          <Link href="/plate">Learn More</Link>
        </div>
      </div>
    </div>
  </section>
);

export default Introduction;
