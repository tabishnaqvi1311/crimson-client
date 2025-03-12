import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import AuthContextProvider from "@/components/providers/auth-context-provider";
import Sidebar from "@/components/sidebar/sidebar";
import ReactQueryProvider from "@/components/providers/react-query-provider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Crimson | The Definitive Job Board for Youtubers",
  description: "Crimson is the go-to job board designed exclusively for YouTubers, content creators, and video professionals. Whether you're looking for collaborations, sponsorships, editors, thumbnail designers, or other creator-focused opportunities, Crimson connects you with the right talent and gigs. Find jobs, hire experts, and grow your YouTube career with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <ReactQueryProvider>
            <Navbar />
            <Sidebar />
            <Toaster />
            {children}
          </ReactQueryProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
