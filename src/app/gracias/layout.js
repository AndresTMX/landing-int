import './index.css'
import '.././index.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gracias INT',
  description: 'gracias por registrarte',
}

export default function thanksLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta charSet='utf-8'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`body-background ${inter.className}`}>{children}</body>
    </html>
  )
}