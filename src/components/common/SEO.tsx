import { useEffect } from 'react';
import { COMPANY_INFO } from '../../data/company';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  breadcrumbs?: { name: string; path: string }[];
}

export default function SEO({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = '/assets/aistudio/Brand_asset_91cd7971.webp',
  schema,
  breadcrumbs
}: SEOProps) {
  const fullTitle = `${title} | ${COMPANY_INFO.name}`;
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const currentUrl = `${origin}${canonicalPath}`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${origin}${ogImage}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set/update meta tag
    const setMeta = (nameAttr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', currentUrl);
    setMeta('property', 'og:image', fullImageUrl);
    setMeta('property', 'og:site_name', COMPANY_INFO.name);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullImageUrl);
    setMeta('name', 'twitter:card', 'summary_large_image');

    // 3. Update Canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', currentUrl);

    // 4. Inject JSON-LD Schema
    const scriptId = 'clavel-schema-ld-json';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    // Prepare JSON-LD schemas
    const schemasToInject: Record<string, unknown>[] = [];

    // LocalBusiness Schema (strictly verified data only)
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${origin}/#localbusiness`,
      'name': COMPANY_INFO.name,
      'alternateName': 'CSK',
      'description': COMPANY_INFO.description,
      'url': origin,
      'logo': `${origin}/assets/aistudio/LOGO_62a2f7fc.jpg`,
      'image': `${origin}/assets/aistudio/Brand_asset_91cd7971.webp`,
      'telephone': '+2348036729660',
      'email': COMPANY_INFO.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': COMPANY_INFO.address.street,
        'addressLocality': COMPANY_INFO.address.city,
        'addressRegion': COMPANY_INFO.address.state,
        'postalCode': COMPANY_INFO.address.postalCode,
        'addressCountry': 'NG'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': COMPANY_INFO.address.coordinates.lat,
        'longitude': COMPANY_INFO.address.coordinates.lng
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday'],
          'opens': '08:00',
          'closes': '17:30'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Tuesday', 'Thursday'],
          'opens': '08:00',
          'closes': '17:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Wednesday', 'Friday'],
          'opens': '08:00',
          'closes': '16:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Saturday'],
          'opens': '08:00',
          'closes': '15:00'
        }
      ],
      'priceRange': '$$',
      'areaServed': [
        {
          '@type': 'AdministrativeArea',
          'name': 'Anambra State'
        },
        {
          '@type': 'City',
          'name': 'Awka'
        }
      ]
    };
    schemasToInject.push(localBusinessSchema);

    // BreadcrumbList schema if breadcrumbs provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': `${origin}/`
          },
          ...breadcrumbs.map((b, idx) => ({
            '@type': 'ListItem',
            'position': idx + 2,
            'name': b.name,
            'item': `${origin}${b.path}`
          }))
        ]
      };
      schemasToInject.push(breadcrumbSchema);
    }

    // Custom page schema (Article, Service, etc.)
    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    scriptElement.textContent = JSON.stringify(schemasToInject);
  }, [fullTitle, description, currentUrl, fullImageUrl, ogType, schema, breadcrumbs, origin]);

  return null;
}
