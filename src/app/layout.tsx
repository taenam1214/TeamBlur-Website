import React from "react";
import { Plus_Jakarta_Sans, DynaPuff } from "next/font/google";
import "@/app/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-plus-jakarta-sans",
});

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dyna-puff",
});

export const metadata = {
  title: "Blur Website",
  description: "Migrated from Vite to Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dynaPuff.variable}`}>
      <body>{children}</body>
    </html>
  );
}
