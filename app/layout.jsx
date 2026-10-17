import { Mona_Sans } from "next/font/google"
import "./globals.css"

const mona = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
  display: "swap",
  weight: "variable",
})

export const metadata = {
  title: "Siddhartha Suman | AI Engineer & Applied AI Systems Engineer",
  description:
    "AI Engineer and Applied AI Systems Engineer building production RAG, agent, and LLM systems with Next.js, TypeScript, Node.js, Python, and LangChain/LangGraph. View production projects, work experience, and technical skills.",
  keywords: [
    "AI Engineer",
    "Applied AI Systems Engineer",
    "LLM Engineer",
    "AI/ML Engineer",
    "RAG",
    "AI Agents",
    "LangChain",
    "LangGraph",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  icons: {
    icon: "/images/fav.png",
  },
  openGraph: {
    type: "website",
    title: "Siddhartha Suman | AI Engineer & Applied AI Systems Engineer",
    description:
      "AI Engineer and Applied AI Systems Engineer building production RAG, agent, and LLM systems with Next.js, TypeScript, Node.js, Python, and LangChain/LangGraph.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhartha Suman | AI Engineer & Applied AI Systems Engineer",
    description:
      "AI Engineer and Applied AI Systems Engineer building production RAG, agent, and LLM systems with Next.js, TypeScript, Node.js, Python, and LangChain/LangGraph.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mona.variable}>
      <body>{children}</body>
    </html>
  )
}