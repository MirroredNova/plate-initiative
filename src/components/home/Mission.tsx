import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mission = () => (
  <section className="flex justify-center">
    <div className="h-fit my-auto px-3 sm:px-12 py-20 max-w-6xl md:relative">
      <div>
        <Image
          src="https://images.squarespace-cdn.com/content/v1/64ebf267e4b7170f23e20052/3a350e0b-0dcc-4691-8c91-a6c3e9875f94/image-asset.jpg"
          alt="Our Mission Image"
          width={1220}
          height={1831}
          className="md:w-3/5"
        />
      </div>
      <div className="top-0 right-12 md:absolute h-full flex flex-col justify-center md:w-1/2">
        <div className="bg-white px-2 py-8 sm:px-14 sm:py-14 grid gap-4">
          <h2 className="text-accent_primary font-sofia text-4xl font-bold whitespace-nowrap">
            Our Mission
          </h2>
          <p className="text-secondary_dark font-alice text-lg">
            The Plate Initiative is a culinary education program designed for
            disadvantaged youths to acquire career opportunities and essential
            life skills. Our mission is to offer affordable and accessible
            education within a critical industry, representing the culinary
            potential of both current and future generations, one plate at a
            time.
          </p>
          <Link
            href="/mission"
            className="text-secondary_mid font-alice text-lg underline decoration-secondary_mid underline-offset-4 font-bold"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Mission;
