import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'teletravago.com | Blog',
    description: 'Blog personal sobre tecnología, trabajo remoto y estilo de vida nómada.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
    ),
    stylesheet: './rss/styles.xsl',
    customData: `<language>es-es</language>`,
  });
}