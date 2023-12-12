"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4kon0pt",
        "template_zby4jsx",
        form.current,
        "JcDjc-K-rVVyEh7Ni"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for your message!");
        },
        (error) => {
          console.log(error.text);
          alert("Oops, something went wrong!");
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" name="user_name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="email" name="user_email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea type="message" name="message" placeholder="Message" />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" value="Send">
        Thanks for your message!
      </Button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ContactForm;
