import type { Metadata } from 'next'
import { Mulish, Crimson_Pro } from 'next/font/google'
import './globals.css'

const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin', 'vietnamese'],
})

const crimsonPro = Crimson_Pro({
  variable: '--font-crimson-pro',
  subsets: ['latin', 'vietnamese'],
})

export const metadata: Metadata = {
  title: 'Young Viet @YYC',
  description: 'A website for young Viets living in Calgary',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`max-w-[1140px] m-auto bg-primary-50 font-secondary ${mulish.variable} ${crimsonPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
