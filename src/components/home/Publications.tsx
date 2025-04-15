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
    posts: PublicationsInfoContent[];
}

export default function ({ posts }: PublicationsProps) {

    const publicationsContent = generatePublicationsContent();

    if (!posts || posts.length === 0) {
        return <p>No posts found.</p>;
    }

    return (
        <section className={`container ${style.publications}`}>
            <h1>{publicationsContent.title}</h1>
            <div className={style.publications__line}>
                {posts.map((item, id) => (
                    <CardPublications key={id} post={item} />
                ))}
            </div>
        </section>
    );
}