import '@/styles/tailwind.css'
import Footer from '@/components/footer'
import Head from 'next/head'

export const metadata = {
  title: {
    template: '%s - Zdrowo Aktywni',
    default:
      'Zdrowo Aktywni',
  },
  description:
    'Zdrowo Aktywni - Aleksandra Kost',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="h-full bg-white antialiased">
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
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
