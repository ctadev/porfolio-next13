import "./globals.css";

export const metadata = {
  title: "Cong Ta's Portfolio",
  description:
    "Cong's Portfolio created by using NextJs frontend and Sanity IO backend",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
