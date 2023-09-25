import {
  ContactFormInterface,
  VolunteerFormInterface,
} from "@/interfaces/interfaces";
import app from "@/modules/firebase";
import { getDatabase, push, ref } from "firebase/database";

export const sendNewsletterSignup = (email: string) => {
  const db = getDatabase(app);
  const emailRef = ref(db, "newsletter-emails");
  push(emailRef, {
    email,
    date: new Date().toISOString(),
  });
};

export const sendContactForm = (formData: ContactFormInterface) => {
  const db = getDatabase(app);
  const emailRef = ref(db, "contact-forms");
  push(emailRef, {
    formData,
    date: new Date().toISOString(),
  });
};

export const sendVolunteerForm = (formData: VolunteerFormInterface) => {
  const db = getDatabase(app);
  const emailRef = ref(db, "volunteer-forms");
  push(emailRef, {
    formData,
    date: new Date().toISOString(),
  });
};
