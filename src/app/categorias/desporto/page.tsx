import { PostGrid } from "@/components/post-grid";
import { getPrismicClient } from "@/services/prismic";
import { asText, filter, predicate } from "@prismicio/client";

export default async function Desporto(){

        const prismic = await getPrismicClient();
        const category = "Desporto"
    
        const response = await prismic.getByType("post", { 
        orderings: ["document.last_publication_date desc"], 
        fetch: ["post_title", "post_cover", "post_description"],
        predicates: [predicate.at("my.post.post_category", category)],
    });
    
        const posts = response.results.map(post =>{
        const paragraph = post.data.post_description.find(block => block.type === "paragraph") as { text?: string } | undefined;
    
            return{
                slug: post.uid,
                post_title: String(post.data.post_title),
                post_image: post.data.post_image.url!,
                post_category: String(post.data.post_category),
                post_author: asText(post.data.post_author),
                post_description: paragraph?.text!,
                updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-br', {
                    day: '2-digit',
                    month: 'long',
                    year: "numeric"
                })
            }
        })
        
    return(
        <>
        <PostGrid posts={posts} text1="Desporto" text2="Veja artigos relacionados a desporto"/>
        </>
    )
}