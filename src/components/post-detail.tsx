"use client"

import { RichTextField } from "@prismicio/client"

interface PostProps{
  post:{
   slug: string,
   post_title: string,
   post_category: string,
   post_image: string,
   post_author: string,
   post_description: string | RichTextField,
   updatedAt: string
  }
}

export function PostDetail({ post }: PostProps) {
  return (
    <article className="max-w-3xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase">
            {post.post_category}
          </span>
          <time className="text-sm text-muted-foreground font-medium">{post.updatedAt}</time>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 leading-tight text-pretty">{post.post_title}</h1>
        <p className="text-lg text-muted-foreground">
          Por <span className="font-semibold">{post.post_author}</span>
        </p>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-96 sm:h-[500px] rounded-lg overflow-hidden mb-8 bg-muted">
        <img src={post.post_image || "/placeholder.svg"} alt={post.post_title} className="w-full h-full object-cover" />
      </div>

      {/* Content - com suporte para HTML do Prismic */}
      <div className="prose-content text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: post.post_description }} />
    </article>
  )
}
