import Nav from "@/components/layout/Nav/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Alice, Sofia_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer/Footer";

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
    <body className="bg-primary_light min-w-[325px]">
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
