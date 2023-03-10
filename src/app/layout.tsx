import "./globals.css";
import type { Metadata } from "next";
import ReactQueryWrapper from "./ReactQueryWrapper";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Google clone",
  description: "Google clone - Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <ReactQueryWrapper>
          {children}
          <Footer />
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
