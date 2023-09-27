import { ContactFormInterface } from "@/interfaces/interfaces";
import { sendContactForm } from "@/services/firebase.services";
import { validateEmail } from "@/services/util.services";

export async function POST(req: Request) {
  const body: ContactFormInterface = await req.json();
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "subject",
    "message",
  ];
  if (!requiredFields.every((field) => field in body)) {
    return new Response("Missing one or more required fields", { status: 400 });
  }
  if (!validateEmail(body.email)) {
    return new Response("Invalid email address", { status: 400 });
  }
  sendContactForm(body);
  return new Response(null, { status: 200 });
}
