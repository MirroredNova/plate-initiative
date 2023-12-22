import { User } from "firebase/auth";

export interface ContactFormInterface {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface VolunteerFormRolesInterface {
  role: string;
  checked: boolean;
}

export interface VolunteerFormInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  roles?: string[];
}

export interface AuthContextType {
  user: User | null;
}
