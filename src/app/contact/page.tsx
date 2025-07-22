"use client";

import React, { useState, useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import ProfileLinks from "@/components/Profilelink";
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "f6ce326c-76ff-4820-8f84-23b8bcd6d71b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setSubmitted(true);
      setRedirecting(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    if (redirecting) {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [redirecting]);

  return (
    <>
      <Head>
        <title>Contact Me | Shinkhal Sinha&apos;s Portfolio</title>
        <meta
          name="description"
          content="Get in touch with Shinkhal Sinha for collaborations, inquiries, or just to say hello. Fill out the contact form to reach out."
        />
        <meta
          name="keywords"
          content="Contact, Shinkhal Sinha, Portfolio, Collaborate, Inquiries"
        />
        <meta
          property="og:title"
          content="Contact Me | Shinkhal Sinha's Portfolio"
        />
        <meta
          property="og:description"
          content="Connect with Shinkhal Sinha for opportunities and collaborations. Fill out the form to send a message."
        />
        <meta
          property="og:url"
          content="https://shinkhal-sinha.online/contact"
        />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="min-h-screen bg-neutral-900">
        <main className="container mx-auto max-w-screen-lg pt-10 pb-20 px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.5} inView>
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-5">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium">
                I am always open to new opportunities and collaborations.
                Whether you have a question or just want to say hello, feel free
                to reach out!
              </p>
            </div>

            {/* Side-by-side layout */}
            <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
              {/* Contact Form */}
              <div className="w-full md:w-1/2">
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="w-full border border-gray-600 shadow-xl rounded-lg p-6 bg-neutral-800"
                  >
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-lg font-medium text-gray-300"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="mt-1 block w-full rounded-md bg-neutral-700 text-white py-3 px-4 border border-gray-600 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-300"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="mt-1 block w-full rounded-md bg-neutral-700 text-white py-3 px-4 border border-gray-600 focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-lg font-medium text-gray-300"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Type your message here..."
                        className="mt-1 block w-full rounded-md bg-neutral-700 text-white py-3 px-4 border border-gray-600 resize-none focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50"
                        required
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button
                        className="w-full md:w-6/12 bg-neutral-700 hover:bg-neutral-600 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg text-white border border-gray-600"
                        type="submit"
                      >
                        Send Message
                      </button>
                      <p className="text-gray-400 text-sm mt-2">{result}</p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center mt-10">
                    <p className="text-[2.5rem] font-semibold text-white animate-fade-in">
                      Thank You!
                    </p>
                    {redirecting && (
                      <p className="text-xl font-semibold text-gray-300">
                        Your message has been sent successfully. Redirecting to
                        the home page in 5 seconds...
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Profile Links */}
              <div className="w-full md:w-1/2">
                <ProfileLinks />
              </div>
            </div>
          </BlurFade>
        </main>
      </div>
    </>
  );
}
