"use client";

import {
    UserButton,
    useUser,
} from "@clerk/nextjs";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuItem,
    NavbarMenuToggle,
    NavbarMenu,
    Button
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { ThemeSwitcher } from "..";

function NavbarOrder() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      className="bg-background/70 backdrop-blur-md contain-content container mx-auto"
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold ]">
            <Link href="/">
              <span className="truncate">Order Together</span>
            </Link>
          </h2>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarMenuItem>
          <Link 
            href="/" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link 
            href="/orders"
            className="text-foreground hover:text-primary transition-colors"
          >
            Orders
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link 
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/api-docs"
            className="text-foreground hover:text-primary transition-colors"
          >
            API Docs
          </Link>
        </NavbarMenuItem>
        {/* Show Admin link only for admin users */}
        {isLoaded && isSignedIn && user.publicMetadata.role === 'admin' && (
          <NavbarMenuItem>
            <Link 
              href="/admin" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Admin
            </Link>
          </NavbarMenuItem>
        )}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        <NavbarMenuItem>
          <ThemeSwitcher />
        </NavbarMenuItem>
        <NavbarMenuItem className="hidden sm:block">
          {isLoaded && isSignedIn ? (
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          ) : (
            <div className="flex gap-2">
              <Link href="/sign-in">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-xs sm:text-sm"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button 
                  color="primary"
                  size="sm"
                  className="text-xs sm:text-sm"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </NavbarMenuItem>
        
        {/* Mobile login buttons */}
        <NavbarMenuItem className="sm:hidden">
          {isLoaded && isSignedIn ? (
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          ) : (
            <div className="flex gap-2">
              <Link href="/sign-in">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              </Link>
              <Link href="/sign-up">
                <Button color="primary" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </NavbarMenuItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link 
            href="/"
            className="w-full block py-2 text-large"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link 
            href="/orders"
            className="w-full block py-2 text-large"
            onClick={() => setIsMenuOpen(false)}
          >
            Orders
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link 
            href="/about"
            className="w-full block py-2 text-large"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="/api-docs"
            className="w-full block py-2 text-large"
            onClick={() => setIsMenuOpen(false)}
          >
            API Docs
          </Link>
        </NavbarMenuItem>
        {/* Show Admin link in mobile menu for admin users */}
        {isLoaded && isSignedIn && user?.publicMetadata?.role === 'admin' && (
          <NavbarMenuItem>
            <Link 
              href="/admin"
              className="w-full block py-2 text-large text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </NavbarMenuItem>
        )}
        {/* Mobile menu login buttons */}
        {isLoaded && !isSignedIn && (
        <NavbarMenuItem className="sm:hidden">
            <div className="flex flex-col gap-2 pt-4">
              <Link 
                href="/sign-in"
                className="w-full block"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button 
                  variant="ghost"
                  className="w-full"
                >
                  Sign In
                </Button>
              </Link>
              <Link 
                href="/sign-up"
                className="w-full block"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button 
                  color="primary"
                  className="w-full"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
        </NavbarMenuItem>
        )}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarOrder;
