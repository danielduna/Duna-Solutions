import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      { url: "/favicon-v2.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-v2.ico",
  },
  openGraph: {
    title: "Daniel Duna – Modern Workplace Engineer Portfolio",
    description:
      "Explore Daniel Duna’s Microsoft 365, Cloud, and Automation portfolio projects.",
    url: "https://www.dunasolutions.co.uk",
    siteName: "Daniel Duna Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Duna Portfolio Preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Duna – Modern Workplace Engineer Portfolio",
    description:
      "Explore Daniel Duna’s Microsoft 365, Cloud, and Automation portfolio projects.",
    images: ["/og-image.png"],
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
        style={{
          fontFeatureSettings: '"ss03", "cv02", "cv11"',
        }}
      >
        {children}
      </body>
    </html>
  );
}
