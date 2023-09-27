import {
  ContactFormInterface,
  VolunteerFormInterface,
} from "@/interfaces/interfaces";
import app from "@/modules/firebase";
import { getDatabase, push, ref } from "firebase/database";

export const sendNewsletterSignup = async (email: string) => {
  const db = getDatabase(app);
  const emailRef = ref(db, "newsletter-emails");
  await push(emailRef, {
    email,
    date: new Date().toISOString(),
  });
};

export const sendContactForm = async (formData: ContactFormInterface) => {
  const db = getDatabase(app);
  const emailRef = ref(db, "contact-forms");
  await push(emailRef, {
    ...formData,
    date: new Date().toISOString(),
  });
};

export const sendVolunteerForm = async (formData: VolunteerFormInterface) => {
  const db = getDatabase(app);
  const emailRef = ref(db, "volunteer-forms");
  await push(emailRef, {
    ...formData,
    date: new Date().toISOString(),
  });
};
