import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Inter Variable (no `features` — that goes in CSS now)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Daniel Duna",
  description: "Microsoft 365 & Modern Workplace Engineer Portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-black text-slate-300 antialiased`}
        // Apply your stylistic sets here instead
        style={{
          fontFeatureSettings: '"ss03", "cv02", "cv11"',
        }}
      >
        {children}
      </body>
    </html>
  );
}
