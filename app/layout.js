import AppProvider from "./context/AppContext"
import "./globals.css"

export const metadata = {
  title: "lang-demo",
  description: "lang-demo",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex h-[100vh] items-center justify-center bg-black antialiased`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
