import type { Metadata } from "next";
import { JetBrains_Mono, Lora, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const display = Shippori_Mincho({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Suraj Panda — Cloud & Platform Engineer",
  description:
    "Portfolio of Suraj Panda, a software engineer building reliable cloud platforms, automation, and AI-enabled systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
