'use client'

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import {cn} from '@/lib/utils';
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";


const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

 const metadata: Metadata = {
  title: "CarePulse",
  description: "A healthcare management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Add a default theme class to prevent mismatches on initial render
  React.useEffect(() => {
    const root = document.documentElement;
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userPrefersDark) {
      root.classList.add('dark');
    } else {
      root.classList.add('light');
    }
  }, []);

  return (
    <html lang="en" className="dark">
      <body
        className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
