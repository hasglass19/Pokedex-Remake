import { Geist, Geist_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelifySans=Pixelify_Sans({
  subsets: ["latin"]
});

export const metadata = {
  title: "Pokedex",
  description: "Pokemon, Gotta catch 'em all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="welcome">
        <Link href={"/1"}>
          <Image src="/pokemonlogo.svg" width={195} height={70} alt="Pokemon logo"/>
        </Link>
        <Link className="exit" href={"/"}>Exit the Pokedex</Link>
        {children}
      </body>
    </html>
  );
}
