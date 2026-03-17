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
      style={{ position: 'absolute', top: 10, left: 10, border: 0, width: 128, zIndex: 999, opacity: 0.5 }}
      src="https://assets.hackclub.com/flag-standalone-wtransparent.svg"
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