import Navbar from "@/layout/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRUD NextJS",
  description: "Web app for CRUD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`bg-primary-foreground ${inter.className}`}>
        <header>
          <Navbar />
        </header>
        
        {children}
      </body>
    </html>
  );
}
