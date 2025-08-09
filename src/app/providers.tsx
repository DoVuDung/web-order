"use client"

import {HeroUIProvider, ToastProvider} from '@heroui/react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <HeroUIProvider>
        <ToastProvider />
        {children}
      </HeroUIProvider>
    </NextThemesProvider>
  )
}