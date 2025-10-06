import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


export const metadata = {
  title: "Portfolio",
  description: "Your site description",
  icons: {
      icon: "/favicon.jpg",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
