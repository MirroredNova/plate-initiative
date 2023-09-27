import React from "react";
import Description from "@/components/contact/Description";
import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `If you'd like to get in touch with us, you have two options: you can either send us an email using the address 
  listed below or fill out the form. Whether you have questions about our programming or want to learn more about our mission, 
  feel free to contact us here.`,
};

const Page = () => (
  <>
    <Description />
    <ContactForm />
  </>
);

export default Page;
