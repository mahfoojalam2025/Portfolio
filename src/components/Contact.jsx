import React, { useState } from 'react';
import { BorderBeam } from './ui/border-beam';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  phone: yup.string().optional(),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Using environment-specific URL
      const baseUrl = import.meta.env.PROD 
        ? 'https://your-vercel-url.vercel.app' 
        : 'http://localhost:5000';

      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      const result = await response.json();
      
      if (result.success) {
        toast.success(result.message || 'Message sent successfully!');
        reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <section id="contact" className="min-h-screen w-full bg-gray-950 text-white py-20 px-6 relative overflow-hidden">

    <ToastContainer position="top-right" autoClose={4000} />

    {/* Subtle Background Glow */}
    <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full"></div>

    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Let’s Connect</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-6">
          Have a project idea, collaboration, or opportunity? Let’s talk.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE INFO PANEL */}
        <div className="space-y-8">

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 text-green-400 rounded-full text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for Projects
          </div>

          <h3 className="text-2xl font-semibold">
            Let’s Build Something Great 🚀
          </h3>

          <p className="text-gray-400">
            I’m open to freelance work, collaborations, internships, and innovative
            tech discussions. Every great product starts with a conversation.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-gray-400">
            <p>📧 mahfoojalam2025@gmail.com</p>
            <p>📍 Greater Noida, U.P, India</p>
            <p>⏳ Usually replies within 12–24 hours</p>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:mahfoojalam2025@gmail.com"
              className="px-4 py-2 bg-blue-600 rounded-lg text-sm hover:scale-105 transition"
            >
              Direct Email
            </a>

            
          </div>

          {/* Small Quote */}
          <blockquote className="italic text-gray-500 border-l-4 border-purple-500 pl-4">
            “Innovation begins with a simple message.”
          </blockquote>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative">
          <div className="relative bg-gray-900/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 z-10">

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Name */}
              <div className="relative">
                <input
                  {...register("name")}
                  type="text"
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 bg-gray-800 rounded-xl border border-gray-700 focus:border-purple-500 outline-none transition"
                />
                <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                  Your Name
                </label>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  {...register("email")}
                  type="email"
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 bg-gray-800 rounded-xl border border-gray-700 focus:border-purple-500 outline-none transition"
                />
                <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                  Email Address
                </label>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Subject */}
              <div className="relative">
                <input
                  {...register("subject")}
                  type="text"
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 bg-gray-800 rounded-xl border border-gray-700 focus:border-purple-500 outline-none transition"
                />
                <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                  Subject
                </label>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  {...register("message")}
                  rows="4"
                  maxLength={300}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 bg-gray-800 rounded-xl border border-gray-700 focus:border-purple-500 outline-none resize-none transition"
                />
                <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                  Your Message
                </label>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 font-semibold shadow-lg hover:scale-[1.02] transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

          <BorderBeam
            size={200}
            duration={8}
            colorFrom="#B185FF"
            colorTo="#7B2EFF"
            borderWidth={2}
            className="rounded-2xl"
          />
        </div>

      </div>

    </div>
    <div className="mt-12 text-center">
  <p className="text-gray-400 mb-5 text-sm">
    Or connect with me directly
  </p>

  <div className="flex justify-center gap-8 text-xl">

    <a
      href="https://github.com/mahfoojalam2025"
      target="_blank"
      rel="noreferrer"
      className="text-gray-400 hover:text-white hover:scale-110 transition duration-300"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/mahfooj-alam2008"
      target="_blank"
      rel="noreferrer"
      className="text-gray-400 hover:text-white hover:scale-110 transition duration-300"
    >
      LinkedIn
    </a>

    <a
      href="https://www.instagram.com/mahfooj.decode/"
      target="_blank"
      rel="noreferrer"
      className="text-gray-400 hover:text-white hover:scale-110 transition duration-300"
    >
      Instagram
    </a>

  </div>
</div>
  </section>
);
}

export default Contact;