// app/layout.tsx
// globals.css includes @tailwind directives
// adjust the path if necessary
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Providers } from "./providers";
import NavbarOrder from "./components/Navbar";
import type { Metadata, Viewport } from "next";
import "../lib/client-utils";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Web Order - Food Delivery App",
    template: "%s | Web Order"
  },
  description: "Order food online with our easy-to-use web ordering system. Browse restaurants, add items to cart, and place group orders with friends.",
  keywords: ["food delivery", "online ordering", "restaurant", "group orders", "web order"],
  authors: [{ name: "Andy Do", url: "https://buymeacoffee.com/andydo" }],
  creator: "Andy Do",
  publisher: "Web Order",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://web-order.vercel.app",
    title: "Web Order - Food Delivery App",
    description: "Order food online with our easy-to-use web ordering system. Browse restaurants, add items to cart, and place group orders with friends.",
    siteName: "Web Order",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Order - Food Delivery App",
    description: "Order food online with our easy-to-use web ordering system.",
    creator: "@andydo",
  },
};
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Favicon and icon metadata */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
          {/* Script to prevent browser extension interference */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  // Prevent Grammarly and other extensions from interfering
                  if (typeof window !== 'undefined') {
                    window.addEventListener('DOMContentLoaded', function() {
                      const body = document.body;
                      if (body) {
                        body.setAttribute('data-new-gr-c-s-check-loaded', '');
                        body.setAttribute('data-gr-ext-installed', '');
                      }
                    });
                  }
                } catch (e) {
                  // Silently fail if there's any issue
                }
              `,
            }}
          />
        </head>
        <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
          <NavbarOrder />
          <Providers>
            <main className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 py-4">
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
    </NextThemesProvider>
  );
}
