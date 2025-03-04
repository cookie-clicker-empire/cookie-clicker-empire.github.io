import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Cookie Clicker - Play Online for Free | Best Idle Game 2025",
  description:
    "Play Cookie Clicker online for free. Click cookies, build an empire, and discover secrets in this addictive idle game. No download required, play directly in your browser!",
  keywords:
    "cookie clicker, idle game, clicker game, free online games, cookie clicker online, cookie clicker unblocked",
  authors: [{ name: "Cookie Clicker Fan Site" }],
  creator: "Cookie Clicker Fan Site",
  publisher: "Cookie Clicker Fan Site",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cookie Clicker - The Original Idle Baking Game",
    description:
      "Play Cookie Clicker online for free. No download required. Discover strategies, upgrades, and achievements in this addictive idle game.",
    url: "https://your-domain.com",
    siteName: "Cookie Clicker Fan Site",
    images: [
      {
        url: "/cookie-clicker-og.jpg",
        width: 1200,
        height: 630,
        alt: "Cookie Clicker Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Clicker - Play the Best Idle Game Online for Free",
    description:
      "Bake billions of cookies in this addictive idle game. Unlock achievements, discover secrets, and build your cookie empire!",
    images: ["/cookie-clicker-twitter.jpg"],
    creator: "@cookieclickerfan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FFA500" />
        <meta name="google-site-verification" content="your-verification-code" />
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body className={inter.className}>
        {children}
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Cookie Clicker Online",
              "url": "https://your-domain.com",
              "description": "Play Cookie Clicker online for free. Click cookies, build an empire, and discover secrets in this addictive idle game.",
              "potentialAction": {
                "@type": "PlayAction",
                "target": "https://your-domain.com/#game"
              }
            }
          `}
        </Script>
        <Script id="game-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "VideoGame",
              "name": "Cookie Clicker",
              "description": "An incremental game where players click on a big cookie to produce cookies and buy upgrades to automate production.",
              "genre": ["Idle Game", "Incremental Game", "Clicker Game"],
              "author": {
                "@type": "Person",
                "name": "Julien Thiennot",
                "alternateName": "Orteil"
              },
              "datePublished": "2013-08-10",
              "gamePlatform": ["Web Browser", "Steam", "Mobile"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "15243",
                "bestRating": "5",
                "worstRating": "1"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </Script>
        <Script id="faq-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Cookie Clicker?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cookie Clicker is an incremental game created by Orteil in 2013. The goal is to bake as many cookies as possible by clicking on a giant cookie and purchasing various upgrades and buildings that automatically produce cookies for you."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Cookie Clicker free to play?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Cookie Clicker is completely free to play in your web browser. There are no in-app purchases or premium features. The game is supported by non-intrusive advertisements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I save my progress in Cookie Clicker?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cookie Clicker automatically saves your progress to your browser's local storage. However, it's a good idea to manually export your save occasionally by clicking on 'Options' and then 'Export save' to back up your progress."
                  }
                }
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'