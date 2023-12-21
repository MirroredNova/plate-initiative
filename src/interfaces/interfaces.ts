import { User } from "firebase/auth";

export interface ContactFormInterface {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  user: string;
}

export interface VolunteerFormRolesInterface {
  role: string;
  checked: boolean;
  user: string;
}

export interface VolunteerFormInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  roles?: string[];
  user: string;
}

export interface AuthContextType {
  user: User | null;
}
