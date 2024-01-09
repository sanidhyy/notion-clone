import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type PropsWithChildren } from "react";

import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

import "./globals.css";
import { ToasterProvider } from "@/components/providers/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jotion-theme"
        >
          <ToasterProvider />
          <ModalProvider />
          <ConvexClientProvider>
            <EdgeStoreProvider>{children}</EdgeStoreProvider>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
