import React from "react";
import BigHeader from "../shared/BigHeader";
import BodySection from "../shared/BodySection";

const ProgramsList = () => (
  <BodySection>
    <div className="max-w-4xl px-3 sm:px-12 pt-20 pb-36 font-alice text-lg flex flex-col gap-20">
      <BigHeader>Our Programs</BigHeader>
      <div>
        <h3 className="font-sofia font-extrabold text-accent_primary my-3.5">
          <i>THE FIRST PLATE</i>
        </h3>
        <p>
          Working in collaboration with the Boys and Girls Club of Dane County,
          &quot;The First Plate&quot; served as our pilot program aimed at
          assessing curriculum readiness and students&apos; interactions with
          the content. Through this programming, our goal was to uncover which
          aspects resonated with the students and how we could develop a
          responsive program that evolves alongside them.
        </p>
      </div>
      <div>
        <h3 className="font-sofia font-extrabold text-accent_primary my-3.5">
          <i>THE SECOND PLATE</i>
        </h3>
        <p>
          Collaborating with various schools within the community, our plan
          involves the rollout of skills workshops. These workshops will enable
          students to learn basic cooking fundamentals and gain knowledge about
          different ingredients. Additionally, we intend to partner with local
          chefs to organize Chef Talks, allowing students to explore potential
          career paths and establish connections with chefs who contribute to
          their communities.
        </p>
      </div>
      <div>
        <h3 className="font-sofia font-extrabold text-accent_primary my-3.5">
          <i>CONTINUING EDUCATION FOR YOUTH</i>
        </h3>
        <p>
          Our goal is to initiate a comprehensive 4-week culinary cohort during
          the summer, in which students acquire fundamental skills to prepare
          them for the kitchen. The curriculum encompasses culinary skills,
          career path exploration, resume building, and fostering confidence in
          the kitchen.
        </p>
      </div>
      <div>
        <h3 className="font-sofia font-extrabold text-accent_primary my-3.5">
          <i>SUPPORT FOR FREE ONLINE CURRICULUM</i>
        </h3>
        <p>
          Education takes place both inside and outside the classroom. To
          provide students with the opportunity to learn independently, The
          Plate Initiative plans to expand by creating a free online culinary
          database. This database will allow students to engage with content at
          their preferred pace.
        </p>
      </div>
    </div>
  </BodySection>
);

export default ProgramsList;
