import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Startup Academic Network",
  description: "סטארטאפ אקדמי נטוורק — קהילת יזמים שמתקדמים יחד! מפגש עבודה שבועי, ליווי מקצועי וקהילה איכותית של יזמים.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Startup Academic Network",
    description: "סטארטאפ אקדמי נטוורק — קהילת יזמים שמתקדמים יחד! מפגש עבודה שבועי, ליווי מקצועי וקהילה איכותית של יזמים.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-gray-50">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
