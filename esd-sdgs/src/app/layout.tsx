export const metadata = {
  title: 'ESD & SDGs - Education for Sustainable Development',
  description: 'Explore Education for Sustainable Development and the 17 Sustainable Development Goals. Learn, engage, and make a difference.',
  keywords: 'ESD, SDG, Sustainable Development, Education, UN Goals',
  authors: [{ name: 'putrajr63' }],
  openGraph: {
    title: 'ESD & SDGs - Education for Sustainable Development',
    description: 'Explore Education for Sustainable Development and the 17 Sustainable Development Goals.',
    type: 'website',
  },
}

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
