import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Law Office Helper",
  description: "Generate legal deadlines from trigger dates"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
