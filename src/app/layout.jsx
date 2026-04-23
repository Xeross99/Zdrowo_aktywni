import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { GoogleAnalytics } from '@next/third-parties/google'

import '@/styles/tailwind.css'
import 'react-photo-view/dist/react-photo-view.css'

export const metadata = {
  metadataBase: new URL('https://zdrowo-aktywni.pl'),
  title: {
    template: '%s - Zdrowo Aktywni',
    default: 'Zdrowo Aktywni - Aleksandra Kost',
  },
  description:
    'Aleksandra Kost — trenerka, dietetyczka, himalaistka. Nordic Walking, konsultacje dietetyczne, wykłady o biohackingu i zdrowym stylu życia.',
  author: 'Aleksandra Kost',
  creator: 'Michał Krzysteczko',
  alternates: {
    canonical: '/',
    sitemap: '/sitemap.xml',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Zdrowo Aktywni',
    title: 'Zdrowo Aktywni - Aleksandra Kost',
    description:
      'Aleksandra Kost — trenerka, dietetyczka, himalaistka. Nordic Walking, konsultacje dietetyczne, wykłady o biohackingu i zdrowym stylu życia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zdrowo Aktywni - Aleksandra Kost',
    description:
      'Aleksandra Kost — trenerka, dietetyczka, himalaistka. Nordic Walking, konsultacje dietetyczne, wykłady o biohackingu.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-V65F7D42MS" />
    </html>
  )
}
