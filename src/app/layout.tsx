import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/bebas-neue";
import "./globals.css";
import Footer from "@/components/footer";
import SmoothScrolling from "@/components/Scrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shinkhal Sinha's Portfolio",
  description: "Welcome to my portfolio! Explore my projects, skills, and get in touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <SmoothScrolling>


          {children}
          <Footer />
          
          </SmoothScrolling>
      </body>
    </html>
  );
}