import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackBox",
  description: "Hackclub YSWS program by Aron.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  <a href="https://hackclub.com/">
    <img
      style={{ position: 'fixed', top: 0, left: 10, border: 0, width: 256, zIndex: 999 }}
      src="https://assets.hackclub.com/flag-orpheus-top.svg"
      alt="Hack Club"
    />
  </a>
  <div style={{ width: '100%', minHeight: '100vh' }}>
    {children}
  </div>
</body>
    </html>
  );
}