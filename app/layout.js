import "./globals.css";

import ParentsComponent from "./(components)/ParentsComponent";

export const metadata = {
  title: "Cong Ta's Portfolio",
  description:
    "Cong's Portfolio created by using NextJs frontend and Sanity IO backend",
};

import {
  Arizonia,
  Nothing_You_Could_Do,
  Noto_Sans_JP,
  Quicksand,
  Rock_Salt,
  Satisfy,
  Tangerine,
  Kaushan_Script,
  Poppins,
} from "next/font/google";

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-kaushan",
  weight: ["400"],
});

const arizonia = Arizonia({
  subsets: ["latin"],
  variable: "--font-arizonia",
  weight: ["400"],
});
const nothing = Nothing_You_Could_Do({
  subsets: ["latin"],
  variable: "--font-nothing",
  weight: ["400"],
});
const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400"],
});
const rocksalt = Rock_Salt({
  subsets: ["latin"],
  variable: "--font-rocksalt",
  weight: ["400"],
});
const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: ["400"],
});
const tangerine = Tangerine({
  subsets: ["latin"],
  variable: "--font-tangerine",
  weight: ["400"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html
      className={`${arizonia.variable} ${nothing.variable} ${noto.variable} ${satisfy.variable} ${quicksand.variable} ${rocksalt.variable} ${tangerine.variable} ${kaushan.variable} ${poppins.variable}`}
    >
      <body>
        <ParentsComponent>{children}</ParentsComponent>
      </body>
    </html>
  );
}
