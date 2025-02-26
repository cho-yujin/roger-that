import type { Metadata } from "next";
import { bodyFont, headerFont } from "./fonts";
import "./globals.css";
import Header from "./components/header"
import Footer from "./components/footer"

export const metadata: Metadata = {
  title: "roger that!",
  description: "An easier way to assign and pick up work shifts!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex justify-center antialiased ${headerFont.className}`}> 
        <div className="w-full max-w-[2000px] flex flex-col items-center ">
          <Header />
          <div className="w-full px-3">
            <div className="flex flex-col items-center min-h-[100vh] bg-backgroundGray border border-outlineGray rounded-3xl">
              <div className="w-full h-full flex flex-1 flex-col justify-start px-14 py-16">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
