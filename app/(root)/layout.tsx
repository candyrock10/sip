import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/Leftsidebar";
import RightSidebar from "@/components/shared/Rightsidebar";
import Bottombar from "@/components/shared/Bottombar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 meta threads application'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
        <Topbar />
        <LeftSidebar />
        </ClerkProvider>

        
        <main className="flex flex-row">
          
          <section className="main-cointainer">
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </section>
          <RightSidebar/>
        </main>
        <Bottombar />
        
      </body>
    </html>
  );
}
