import Link from "next/link";
import React from "react";

const Programs = () => (
  <section className="flex justify-center bg-accent_primary">
    <div className="h-fit my-auto flex px-3 sm:px-12 py-20 max-w-6xl gap-4 flex-col">
      <div className="flex flex-col md:flex-row text-primary_light p-2 sm:p-4 gap-4 md:gap-24">
        <h2 className="font-sofia text-4xl font-bold whitespace-nowrap">
          Our Programs
        </h2>
        <p className="font-alice text-lg leading-8">
          We offer a diverse range of programs designed to empower and support
          individuals of all backgrounds in their pursuit of culinary
          excellence. From our comprehensive 4-week culinary cohort during the
          summer, where students gain fundamental kitchen skills, explore
          potential career paths, build resumes, and foster confidence, to our
          engaging skills workshops held in collaboration with local schools, we
          provide hands-on learning experiences that transcend the classroom.
          Our commitment extends beyond physical spaces - we&apos;re proud to
          introduce a free online culinary database, allowing students to learn
          at their own pace, wherever they are. With a focus on underserved
          youths, our initiatives aim to create a bridge to the culinary world,
          fostering innovation, growth, and a deeper connection to the heart of
          this vibrant industry.
        </p>
      </div>
      <div className="p-4 text-center">
        <Link
          href="/programs"
          className="bg-primary_light rounded-full text-accent_primary font-sofia px-8 py-5 font-extrabold"
        >
          Learn more
        </Link>
      </div>
    </div>
  </section>
);

export default Programs;
