"use client"

import { SelectField } from "@prismicio/client"
import Link from "next/link"

interface PostProps{
  post:{
  slug: string,
  post_title: string,
  post_category: string | SelectField,
  post_image: string,
  post_author: string,
  post_description: string,
  updatedAt: string
  }
}
export function PostCard({ post }: PostProps) {
  return ( 
    <Link href={`/posts/${post.slug}`}>
      <article className="group h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg">
        {/* Image Container */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-muted">
          <img
            src={post.post_image || "/placeholder.svg"}
            alt={post.post_title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-1 p-4 sm:p-6">
          {/* Category Badge */}
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full uppercase tracking-wide">
              {post.post_category}
            </span>
            <span className="text-xs text-muted-foreground font-medium">{post.updatedAt}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors text-pretty">
            {post.post_title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">{post.post_description}</p>

          {/* Read More Link */}
          <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
            Ler mais
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}
