import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="light">
        <Header />
        {children}
      </body>
    </html>

  );
}
