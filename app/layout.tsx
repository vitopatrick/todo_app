import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const js = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo Application",
  description: "This is a todo Application with Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={js.className}>
          <Navbar />
          {children}
          <Toaster
            richColors
            position="top-center"
            className={cn(js.className, "font-light")}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
