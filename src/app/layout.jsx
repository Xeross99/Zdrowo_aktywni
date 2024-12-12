import '@/styles/tailwind.css'
import Footer from '@/components/Footer'
import Head from 'next/head'

export const metadata = {
  title: {
    template: '%s - Zdrowo Aktywni',
    default: 'Zdrowo Aktywni - Aleksandra Kost',
  },
  description: 'Znajdź inspiracje do zdrowego życia i aktywności fizycznej dzięki Zdrowo Aktywni.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="h-full bg-white antialiased">
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="apple-mobile-web-app-title" content="Zdrowo Aktywni" />
      </Head>
      <body className="min-h-full">
        <div className="w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
