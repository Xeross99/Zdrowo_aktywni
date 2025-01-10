import '@/styles/tailwind.css'
import { Navbar } from '@/components/Navbar'

export const metadata = {
  title: {
    template: '%s - Zdrowo Aktywni',
    default: 'Zdrowo Aktywni - Aleksandra Kost',
  },
  description: 'Znajdź inspiracje do zdrowego życia i aktywności fizycznej dzięki Zdrowo Aktywni.',
  author: 'Aleksandra Kost',
  creator: 'Michał Krzysteczko',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="h-full bg-white antialiased">
      <body className="min-h-full">
        <Navbar/>
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
