import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submition = {
    email: data.get("email"),
    message: data.get("message"),
  };

  // send POST request
  if (submition.message.length < 10 || submition.message.length > 200) {
    return {
      error: "Message must be over 10 characters long and lower than 200.",
    };
  }
  // redirect user
  return redirect("/");
};
