export const dynamic = 'force-static';

export default function sitemap() {
  const siteUrl = 'https://juiceplanet.co.uk';

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
