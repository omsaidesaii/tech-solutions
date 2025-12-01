import type { ComponentType } from "react";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type ContactInfo = {
  title: string;
  icon: ComponentType;
  description: string;
}[];

const ContactUs = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <section className="bg-background min-h-screen py-8 sm:py-16 lg:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 space-y-6 sm:mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Get In Touch
            </p>
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Have a question or ready to start your digital transformation
            journey? Our team of experts is here to help. Reach out to us and
            lets discuss how we can drive your business forward.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card className="border shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and well get back to you within 24
                    hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john.doe@company.com"
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
            <div className="rounded-2xl overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80"
                alt="Modern office building"
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Contact Information
              </h3>

              {/* Contact Info Grid */}
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <Card
                    className="border hover:border-primary/50 transition-colors"
                    key={index}
                  >
                    <CardContent className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-6">
                      <div className="size-10 sm:size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary [&>svg]:size-5 [&>svg]:sm:size-6">
                        <info.icon />
                      </div>
                      <div className="space-y-1 sm:space-y-2 w-full">
                        <h4 className="text-base sm:text-lg font-bold">
                          {info.title}
                        </h4>
                        <div className="text-muted-foreground text-xs sm:text-sm break-words">
                          {info.description.split("\n").map((line, idx) => (
                            <p key={idx} className="break-words">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional CTA */}
            <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 border space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-bold">
                Prefer to talk directly?
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base">
                Schedule a call with one of our solution architects to discuss
                your specific needs.
              </p>
              <button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
