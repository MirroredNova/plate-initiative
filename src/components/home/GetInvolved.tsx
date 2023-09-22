import React from "react";
import GetInvolvedLinks from "./GetInvolvedLinks";
import BodySection from "../shared/BodySection";

const GetInvolved = () => (
  <BodySection>
    <div className="h-fit my-auto flex px-3 sm:px-12 py-20 max-w-6xl gap-4 flex-col">
      <div className="flex flex-col md:flex-row text-secondary_dark p-2 sm:p-4 gap-4 md:gap-24">
        <h2 className="font-sofia text-4xl font-bold whitespace-nowrap">
          Get Involved
        </h2>
        <p className="font-alice text-lg leading-8">
          Getting involved in our program is a rewarding way to make a
          meaningful impact on the lives of aspiring culinary talents. Whether
          you&apos;re a professional chef eager to share your expertise through
          our Chef Talks, a community member looking to volunteer for our skills
          workshops, or an advocate wanting to contribute to our online culinary
          database, there are numerous ways to join our mission. Your
          involvement can inspire and shape the future of young talents, opening
          doors to new possibilities and culinary horizons. Together, we can
          create a stronger, more inclusive culinary community for everyone.
        </p>
      </div>
      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row">
        <GetInvolvedLinks
          header="Sign Up For a Program"
          text={`As we continue to work on rolling out our programs, 
            we will update this sign up page. Future programming can be found at the button below.`}
          buttonText="Programs"
          buttonLink="/programs"
        />
        <GetInvolvedLinks
          header="Volunteer opportunities"
          text={`We are seeking volunteers to assist us with fundraising, outreach, and development. 
            If you're interested, click the "Volunteer" button to learn more.`}
          buttonText={"Volunteer"}
          buttonLink={"/volunteer"}
        />
        <GetInvolvedLinks
          header="Make a Donation"
          text={`Contributing to the program through donations enables us to amplify 
            our impact and extend culinary opportunities to even more aspiring talents.`}
          buttonText="Donate"
          buttonLink="https://www.flipcause.com/secure/cause_pdetails/MTQ1MzAz"
        />
      </div>
    </div>
  </BodySection>
);

export default GetInvolved;
