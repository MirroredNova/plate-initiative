import { sendNewsletterSignup } from "@/services/firebase.services";
import { validateEmail } from "@/services/util.services";

type RequestBody = {
  email: string;
};

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  if (!body.email || !validateEmail(body.email)) {
    return new Response(null, { status: 400 });
  }
  await sendNewsletterSignup(body.email);
  return new Response(null, { status: 200 });
}
