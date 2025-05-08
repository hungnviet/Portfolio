import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from '@/components/ui/Footer';
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyen Viet Hung - Portfolio",
  description: "Computer Science student at HCMUT passionate about building impactful software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
        <AnimatedBackground />
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
