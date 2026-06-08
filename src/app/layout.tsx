import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Genesis Communications Inc | Elevate Your Voice',
  description: 'Genesis Communications Inc offers cutting-edge communication solutions for modern businesses. Connect, engage, and grow with our innovative services.',
  keywords: ["communication, business, technology, solutions, digital, strategy, media, marketing, elevate, connect, engage, grow"],
  openGraph: {
    "title": "Genesis Communications Inc | Elevate Your Voice",
    "description": "Genesis Communications Inc offers cutting-edge communication solutions for modern businesses. Connect, engage, and grow with our innovative services.",
    "url": "/",
    "siteName": "Genesis Communications Inc",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/beautiful-optical-fiber-detail_23-2149182541.jpg",
        "alt": "Futuristic digital communication network"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Genesis Communications Inc | Elevate Your Voice",
    "description": "Genesis Communications Inc offers cutting-edge communication solutions for modern businesses. Connect, engage, and grow with our innovative services.",
    "images": [
      "http://img.b2bpic.net/free-photo/beautiful-optical-fiber-detail_23-2149182541.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
