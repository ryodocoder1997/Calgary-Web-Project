import type { Metadata } from 'next'
import './globals.css'

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
      <body className='max-w-[1140px] mx-auto bg-pink-100'>{children}</body>
    </html>
  )
}
