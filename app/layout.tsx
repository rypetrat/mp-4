import React from "react";
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

export default function RootLayout({children, }: Readonly<{children:React.ReactNode}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image" href="/stock.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CS391 | MP-4</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}