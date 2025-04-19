import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Book Tracker",
  description: "Track and manage your favorite books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
