import '../styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Anek_Bangla } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const anek = Anek_Bangla({
  subsets: ['latin'],
  display: 'swap',
});

let title = 'XXX: Free PDFGPT - The Best AI Chatbot for Chatting with Any PDFs';
let description = 'Use XXX to turn your PDFs into conversations. This free PDFGPT will get the information you need without all the hassle. Just ask your pdf, and AI will do the rest. Let’s chat and learn!';
let ogimage = 'https://www.pdftochat.com/og-image.png';
let url = 'https://pdftochat-silk.vercel.app/';
let sitename = 'pdftochat.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={anek.className}>
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        </head>
        <body>
          <Analytics />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
