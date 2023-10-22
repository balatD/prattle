import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Slab, Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Prattle',
  description: 'Test description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} homepage container mx-auto w-3/4 bg-dark text-white`}>
        {children}
      </body>
    </html>
  )
}
