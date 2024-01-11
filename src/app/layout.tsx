import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Single price grid component",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
