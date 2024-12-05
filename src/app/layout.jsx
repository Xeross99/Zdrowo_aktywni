import '@/styles/tailwind.css'
import Footer from '@/components/footer'

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
      <head></head>
      <body className="min-h-full">
        <div className="w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
