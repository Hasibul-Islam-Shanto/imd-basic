import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import GlobalThemeProvider from "./GlobalThemeProvider";
import Header from "@/components/header";
import SearchBox from "@/components/searchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB Basic Clone",
  description:
    "This a movie database where you can search for movies and see their details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalThemeProvider>
          <Navbar />
          <Header />
          <SearchBox />
          {children}
        </GlobalThemeProvider>
      </body>
    </html>
  );
}
