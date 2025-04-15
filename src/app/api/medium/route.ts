import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export async function GET() {
    const parser = new Parser();
    try {
        const feed = await parser.parseURL('https://medium.com/feed/@marianaalmeidafga');

        const posts = feed.items.map((item) => {
            const content = item['content:encoded'] || '';

            const imageMatch = content.match(/<img[^>]+src="([^">]+)"/);
            const h4Match = content.match(/<h4[^>]*>(.*?)<\/h4>/);

            const image = imageMatch ? imageMatch[1] : '';
            const description = h4Match ? h4Match[1].trim() : '';

            return {
                title: item.title || '',
                link: item.link || '',
                description,
                image,
            };
        });

        return NextResponse.json(posts);
    } catch (err) {
        return NextResponse.json({ error: 'Erro ao carregar feed RSS', details: err }, { status: 500 });
    }
}
