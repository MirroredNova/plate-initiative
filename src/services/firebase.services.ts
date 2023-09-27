import {
  ContactFormInterface,
  VolunteerFormInterface,
} from "@/interfaces/interfaces";
import app from "@/modules/firebase";
import { getDatabase, push, ref } from "firebase/database";

export const sendNewsletterSignup = async (email: string) => {
  const db = getDatabase(app);
  const emailRef = ref(db, "newsletter-emails");
  try {
    await push(emailRef, {
      email,
      date: new Date().toISOString(),
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};

export const sendContactForm = (formData: ContactFormInterface) => {
  const db = getDatabase(app);
  const emailRef = ref(db, "contact-forms");
  push(emailRef, {
    ...formData,
    date: new Date().toISOString(),
  });
};

export const sendVolunteerForm = (formData: VolunteerFormInterface) => {
  const db = getDatabase(app);
  const emailRef = ref(db, "volunteer-forms");
  push(emailRef, {
    ...formData,
    date: new Date().toISOString(),
  });
};
