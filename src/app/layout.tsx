// app/layout.tsx
// globals.css includes @tailwind directives
// adjust the path if necessary
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Providers } from "./providers";
import NavbarOrder from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className="min-h-screen bg-background">
          <NavbarOrder />
          <Providers>
            <main className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 py-4">
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
