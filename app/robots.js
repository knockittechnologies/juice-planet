export const dynamic = 'force-static';

export default function robots() {
  const siteUrl = 'https://juiceplanet.co.uk';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
