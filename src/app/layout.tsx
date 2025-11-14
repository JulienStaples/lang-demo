import "./globals.css"
import AppProvider from "./context/AppContext"
import NavProvider from "./context/NavContext"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "lang-demo",
  description: "lang-demo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={"h-full"}>
      <head>
        <script src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"></script>
        <script
          src="https://files.bpcontent.cloud/2025/11/10/16/20251110160448-36O061FH.js"
          defer
        ></script>
      </head>
      <body
        className={`flex h-full items-center justify-center bg-black text-white antialiased`}
      >
        <AppProvider>
          <NavProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </NavProvider>
        </AppProvider>
      </body>
    </html>
  )
}
