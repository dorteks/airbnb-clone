import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className="font-[cereal-normal] absolute top-44 py-3 px-10 xl:px-20 2xl:px-24">
        {children}
      </body>
      <Footer />
    </html>
  );
}
