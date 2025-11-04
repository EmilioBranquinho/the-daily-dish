
export const dynamic = "force-dynamic";

import { getPrismicClient } from "@/services/prismic"
import { PostCard } from "./post-card"
import { SelectField } from "@prismicio/client";

interface GridProps{
  text1: string,
  text2: string,
  posts: Postprops[]

}

interface Postprops{
   slug: string,
   post_title: string,
   post_category: string | SelectField,
   post_image: string,
   post_author: string,
   post_description: string,
   updatedAt: string
}

export async function PostGrid({text1, text2, posts}: GridProps) {
    

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-pretty">{text1}</h2>
          <p className="text-muted-foreground text-lg">{text2}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
