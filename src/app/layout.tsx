import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar";

const fontGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
})

export const metadata: Metadata = {
  title: "Crimson | Your YouTube Sidekick",
  description: "Crimson aims to automate everything from ideation to publishing, so you can grow your youtube channel faster with less hassle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen bg-zinc-900 text-zinc-100 selection:bg-primary selection:text-white",fontGrotesk.className)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
