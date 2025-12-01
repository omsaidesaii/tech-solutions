import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechSolutions - Enterprise IT Services & Digital Transformation",
  description:
    "Leading provider of cloud infrastructure, cybersecurity, AI/ML solutions, and digital transformation services for enterprises worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
