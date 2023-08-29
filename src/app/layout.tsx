import Nav from "@/components/layout/Nav/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Alice, Sofia_Sans } from "next/font/google";

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alice",
});
const sofia = Sofia_Sans({ subsets: ["latin"], variable: "--font-sofia" });

export const metadata: Metadata = {
  title: "The Plate Initiative",
  description: `The Plate Initiative is a non-profit organization that aims to equip underserved youths with the tools to become innovators
  in the field of culinary arts by empowering them to explore opportunities and acquire essential life skills.`,
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => (
  <html lang="en" className={`${alice.variable} ${sofia.variable}`}>
    <body className="bg-primary">
      <Nav />
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
