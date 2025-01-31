import '@/styles/tailwind.css'
import Footer from '@/components/Footer'
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
    sitemap: `https://zdrowo-aktywni.pl/sitemap.xml`
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
        <Footer />
      </body>
    </html>
  )
}
