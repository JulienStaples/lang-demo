import "./globals.css"

export const metadata = {
  title: "lang-demo",
  description: "lang-demo",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-black antialiased flex justify-center items-center h-[100vh]`}
      >
        {children}
      </body>
    </html>
  )
}
