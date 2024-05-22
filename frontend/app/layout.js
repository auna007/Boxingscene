import { roboto } from "./ui/fonts";
import "./globals.css";
import Navbar from "./ui/components/navbar";
import Footer from "./ui/components/footer";

export const metadata = {
  title: "Boxing Scene",
  description: "A Boxing Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
