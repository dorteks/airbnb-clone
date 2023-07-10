import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "dorteiks - Vacation Homes & Condo Rental - Airbnb - Airbnb",
  description: "Airbnb clone made by Ayodele A.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className="w-full absolute top-[155px] md:top-[181px] pb-20 px-6 md:px-10 xxl:px-20 2xl:px-20">
        {children}
      </body>
      <Footer />
    </html>
  );
}
