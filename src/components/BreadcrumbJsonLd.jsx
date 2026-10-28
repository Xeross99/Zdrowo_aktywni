const baseUrl = 'https://zdrowo-aktywni.pl'

// Dane strukturalne BreadcrumbList dla Google (Search Console → Menu nawigacyjne).
// Na stronie nic się nie wyświetla. Ostatni element to bieżąca strona - bez adresu.
export function BreadcrumbJsonLd({ parent, name }) {
  const trail = [
    { name: 'Strona główna', href: '/' },
    ...(parent ? [parent] : []),
    { name },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      ...(crumb.href && { item: new URL(crumb.href, baseUrl).href }),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
