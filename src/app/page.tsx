'use server'
import { HeroSection } from "@/components/hero-section"
import { PostGrid } from "@/components/post-grid"
import { Footer } from "@/components/footer"
import { getPrismicClient } from "@/services/prismic";
import { Metadata } from "next";


export default async function Home() {

  const prismic = await getPrismicClient();

    const response = await prismic.getByType("post", { 
    orderings: ["document.last_publication_date desc"], 
    fetch: ["post_title", "post_cover", "post_description"] 
});

    const posts = response.results.map(post =>{
    const paragraph = post.data.post_description.find(block => block.type === "paragraph") as { text?: string } | undefined;

        return{
            slug: post.uid,
            post_title: String(post.data.post_title),
            post_image: post.data.post_image.url!,
            post_category: (post.data.post_category),
            post_author: String(post.data.post_author),
            post_description: paragraph?.text!,
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-br', {
                day: '2-digit',
                month: 'long',
                year: "numeric"
            })
        }
    })

console.log(posts)
  
  return (
    <div className="min-h-screen bg-background">
      {/* <HeroSection /> */}
      <PostGrid posts={posts} text1="Últimas Noticias" text2="Fique por dentro dos acontecimentos mais importantes" />
      <Footer />
    </div>
  )
}
