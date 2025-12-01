import {
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

import Logo from "@/components/shadcn-studio/logo";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-3 group">
                <Logo className="gap-3" />
                <span className="text-xl font-bold">TechSolutions</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mt-5">
              Leading provider of enterprise IT solutions, cloud infrastructure,
              and digital transformation services.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <TwitterIcon className="size-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GithubIcon className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Cloud Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Cybersecurity
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Digital Transformation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPinIcon className="size-4 mt-0.5 shrink-0" />
                <span>
                  123 Tech Boulevard
                  <br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <PhoneIcon className="size-4 shrink-0" />
                <a
                  href="tel:+18885558324"
                  className="hover:text-primary transition-colors"
                >
                  +1 (888) 555-TECH
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MailIcon className="size-4 shrink-0" />
                <a
                  href="mailto:sales@techsolutions.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  sales@techsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center sm:text-left text-sm text-muted-foreground">
            {`© ${new Date().getFullYear()} TechSolutions. All rights reserved.`}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
