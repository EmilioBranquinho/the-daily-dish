import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Geist, Geist_Mono } from "next/font/google"

export const metadata: Metadata ={
  title: "Início - The Daily Dish",
  description: "Descricao do blog",
  openGraph:{
    images: ["https://upload.wikimedia.org/wikipedia/commons/0/0e/Apple_News_icon_%28iOS%29.png"]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: true
    }
  }
}

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
