import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Mustafa | Amazon PPC Manager",
  description: "Amazon PPC Manager with 4+ years experience scaling brands through data-driven Sponsored Ads. US, UK & UAE marketplaces. Get a free audit.",
  keywords: ["Amazon PPC", "Sponsored Products", "ACoS optimization", "Amazon advertising", "PPC manager"],
  openGraph: {
    title: "Muhammad Mustafa | Amazon PPC Manager",
    description: "Amazon PPC Manager with 4+ years experience scaling brands through data-driven Sponsored Ads. US, UK & UAE marketplaces. Get a free audit.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

