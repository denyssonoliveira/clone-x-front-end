import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Z",
  description: "Social Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
