import "./globals.css"
import AppProvider from "./context/AppContext"
import NavProvider from "./context/NavContext"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "lang-demo",
  description: "lang-demo",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={"h-full"}>
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
