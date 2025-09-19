import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MOEX Camp Connect',
  description: 'Лендинг MOEX Camp Connect',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
