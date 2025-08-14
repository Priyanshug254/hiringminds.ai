import type React from "react"
import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingPaths from "@/components/FloatingPaths"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HiringMinds.ai - AI-Powered Recruitment Platform",
  description: "Revolutionize your hiring process with AI-driven interviews, cheat detection, multilingual support, and bias-free assessments. Launching September 2025.",
   generator: 'Hiringminds.ai',
   icons: {
    icon: '/logo.png', // or '/favicon.png'
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
       <FloatingPaths />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
