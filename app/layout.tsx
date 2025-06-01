import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { poppins } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-poppins antialiased",
          poppins.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Navbar />
          <main>{children}</main>
          {/* <footer className="bottom-0 w-full flex items-center justify-center py-3">
            <Link
              isExternal
              className="flex items-center gap-1 px-2"
              href="https://nightwingdigital.co/"
              title="nightwingdigital.co homepage"
            >
              <span className="text-default-600">
                Copyright © 2025{" "}
                <span className="text-secondary">
                  Nightwing Digital Solutions Co., Ltd.
                </span>{" "}
                All rights reserved.
              </span>
            </Link>
          </footer> */}
        </Providers>
      </body>
    </html>
  );
}
