import React from "react";
import "@/app/globals.css";

export const metadata = {
  title: "Blur Website",
  description: "Migrated from Vite to Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
