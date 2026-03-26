import { configDotenv } from "dotenv";
import { Resend } from "resend";

configDotenv();

const resend_api_key = process.env.RESEND_API_KEY!;
console.log(resend_api_key);
if (!resend_api_key) {
  throw new Error("Resend api key is not defined");
}

const resend = new Resend(resend_api_key);


interface EmailProps {
  from: string,
  to: string,
  subject: string;
  html: string
}
export async function sendEmail() {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "afolabiyinka738@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>! we love you</p> ",
  });

  if (error) {
    console.log(error);
  }

  console.log(data);
}
