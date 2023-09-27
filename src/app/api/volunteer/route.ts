import { VolunteerFormInterface } from "@/interfaces/interfaces";
import { sendVolunteerForm } from "@/services/firebase.services";
import { validateEmail, validatePhone } from "@/services/util.services";

export async function POST(req: Request) {
  const body: VolunteerFormInterface = await req.json();
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "experience",
  ];
  if (!requiredFields.every((field) => field in body)) {
    return new Response("Missing one or more required fields", { status: 400 });
  }
  if (!validateEmail(body.email)) {
    return new Response("Invalid email address", { status: 400 });
  }
  if (!body.roles || body.roles.length === 0) {
    return new Response("Must select at least one role", { status: 400 });
  }
  if (!validatePhone(body.phone)) {
    return new Response("Invalid phone number", { status: 400 });
  }
  await sendVolunteerForm(body);
  return new Response(null, { status: 200 });
}
