"use client"
import { usePathname } from 'next/navigation';

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showFooter = pathname === '/'; // 只在主页面显示

  return (
    <html lang="en">
      <body>
        
        <Header />
        <div className="flex-grow p-4 sm:p-6 lg:p-8">
          <div className="container mx-auto">
            <div className="bg-white">
              {children}
            </div>
          </div>
        </div>
        {showFooter && <Footer />} {/* 只有在主页面显示 Footer */}
      </body>
    </html>
  );
}
