import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Isabela Calegari',
  description: 'Crio para contar histórias e gerar conexão.',
}

type RootLayoutType = {
  children: React.ReactNode
  params: { locale: string }
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutType>) {
  return (
    <html lang={locale}>
      <body className={`${poppins.className} bg-ic-light-yellow`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
