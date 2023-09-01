import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mission = () => (
  <section className="flex justify-center h-screen">
    <div>
      <div>
        <Image
          src="https://images.squarespace-cdn.com/content/v1/64ebf267e4b7170f23e20052/3a350e0b-0dcc-4691-8c91-a6c3e9875f94/image-asset.jpg"
          alt="Our Mission Image"
          width={1220}
          height={1831}
        />
      </div>
      <div>
        <h2>Our Mission</h2>
        <p>
          The Plate Initiative is a culinary education program designed for
          disadvantaged youths to acquire career opportunities and essential
          life skills. Our mission is to offer affordable and accessible
          education within a critical industry, representing the culinary
          potential of both current and future generations, one plate at a time.
        </p>
        <Link href="/mission">Learn More</Link>
      </div>
    </div>
  </section>
);

export default Mission;
