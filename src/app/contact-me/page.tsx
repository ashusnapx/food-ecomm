"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactPage = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission and redirect to mail client
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Mailto link with form data pre-filled
    const mailtoLink = `mailto:ashu.kumarexam@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Redirect to mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className='flex flex-1 flex-col items-center justify-center px-4 py-10 text-gray-800 dark:text-gray-100'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div>
          {/* Heading */}
          <p className='text-3xl sm:text-5xl md:text-7xl text-left font-bold tracking-tight mb-6 leading-tight'>
            Thanks for connecting!
          </p>

          
        </div>

        {/* Contact Form */}
        <Card className='w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg'>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Fill out the form to get in touch with me.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className='grid w-full items-center gap-4'>
                {/* Name Input */}
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email Input */}
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Your Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message Input */}
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='message'>Message</Label>
                  <textarea
                    id='message'
                    rows={4}
                    placeholder='Your Message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='resize-none p-2 border rounded-md dark:bg-gray-700 dark:text-gray-200'
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex justify-end space-x-2 w-full'>
            <Button
              variant='outline'
              onClick={() => setFormData({ name: "", email: "", message: "" })}
            >
              Reset
            </Button>
            <Button onClick={handleSubmit}>Send Message</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
