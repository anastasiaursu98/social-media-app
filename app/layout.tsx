import { LayoutWrapper } from "@/layouts/LayoutWrapper";
import type { Metadata } from "next";
import { Kaushan_Script, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-kaushan-script",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Social Media App",
  description: "Social Media App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${kaushanScript.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
