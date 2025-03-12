import Header from '@/components/header';
import JsonLd from '@/components/json-ld';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KevTheDev | Software Developer',
  description:
    'Software Developer specializing in React, Next.js, and TypeScript. View my portfolio, projects and' +
    'experience.',
  keywords: [
    'Software Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Javascript',
    'Portfolio',
    'Projects',
    'Experience',
  ],
  authors: [{ name: 'Kevin Barreto', url: 'https://www.kevyyar.com' }],
  openGraph: {
    title: 'KevTheDev | Software Developer',
    description:
      'Software Developer specializing in React, Next.js, and TypeScript. View my portfolio, projects and experience.',
    url: 'https://www.kevyyar.com',
    siteName: 'KevTheDev | Software Developer',
    images: [
      {
        url: 'https://www.kevyyar.com/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KevTheDev | Software Developer',
    description:
      'Software Developer specializing in React, Next.js, and TypeScript. View my portfolio, projects and experience.',
    images: ['https://www.kevyyar.com/og.png'],
    creator: '@kevyyar',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.variable} font-sans ${jetBrainsMono.variable} font-mono`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
