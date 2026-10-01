import { Mona_Sans } from "next/font/google"
import "./globals.css"

const mona = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
  display: "swap",
  weight: "variable",
})

export const metadata = {
  title: "Siddhartha Suman | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer specializing in Next.js, React, Node.js, TypeScript, and AI integrations. View production projects, work experience, and technical skills.",
  icons: {
    icon: "/images/fav.png",
  },
  openGraph: {
    type: "website",
    title: "Siddhartha Suman | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Next.js, React, Node.js, TypeScript, and AI integrations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhartha Suman | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Next.js, React, Node.js, TypeScript, and AI integrations.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mona.variable}>
      <body>{children}</body>
    </html>
  )
}