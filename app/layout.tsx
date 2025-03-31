"use client";
import React from "react";
import Header from "@/components/Header";
import styled from "styled-components";
import { Geist } from "next/font/google";
import { StockProvider } from "./StockContext";

const geist = Geist({ subsets: ["latin"], weight: ["400", "700"] });

const StyledBody = styled.body`
  background-color:rgb(255, 250, 228);
`;

export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return (
    <html lang="en" className={geist.className}>
      <head>
        <meta charSet="UTF-8"/>
        <link rel="icon" type="image" href="/stock.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>CS391 | MP-4</title>
      </head>
      <StyledBody>
        <Header />
        <StockProvider>{children}</StockProvider>
      </StyledBody>
    </html>
  );
}