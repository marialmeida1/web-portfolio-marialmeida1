// Syles
import style from "./Publications.module.css"

// Components
import CardPublications from "./publications/CardPublications";

// Language
import { generatePublicationsContent } from "@/src/utils/GeneratePublicationsContent";

// Types
import { PublicationsInfoContent } from '@/src/types/PublicationsInfoContent'

interface PostProps {
    post: PublicationsInfoContent
}

interface PublicationsProps {
    posts: PostProps[] | null;
}

export default function ({ posts }: PublicationsProps) {

    const publicationsContent = generatePublicationsContent();

    if (!posts || posts.length === 0) {
        return <p>No posts found.</p>;
    }

    return (
        <section className={`container ${style.publications}`}>
            <h1>{publicationsContent.title}</h1>

            {posts.map((item, idx) => (
                <div key={idx} className="mb-6 border p-4 rounded">
                    {item.post.image && <img src={item.post.image} alt={item.post.title} className="mb-2 w-full max-w-md" />}
                    <h2 className="text-xl font-semibold">{item.post.title}</h2>
                    <p className="text-gray-700">{item.post.description}</p>
                    <a href={item.post.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a>
                </div>
            ))}

            <div className={style.publications__line}>
                <CardPublications />
                <CardPublications />
                <CardPublications />
            </div>
        </section>
    );
}