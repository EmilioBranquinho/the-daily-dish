'use server'
import { PostDetail } from "@/components/post-detail"
import { Footer } from "@/components/footer"
import { getPrismicClient } from "@/services/prismic";
import { asHTML, asText, SelectField } from "@prismicio/client";
import { Metadata, ResolvingMetadata } from "next";
import { Calendar, MessageSquare, MessageSquareMore, Trash2 } from "lucide-react";
import { Comments } from "@/components/comments";

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

interface PostProps{
  post:{
  slug: string,
  post_title: string,
  post_category: string | SelectField,
  post_image:{
    url: string,
    alt: string
  },
  post_author: string,
  post_description: string,
  updatedAt: string
  }
}

export async function generateMetadata( { params, searchParams }: Props, parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = await params
 
  try{
  const prismic = await getPrismicClient()

  const response = await prismic.getByUID('post', String(slug), {})

  return{
    title: response.data.post_title,
    description: asText(response.data.post_description),
    openGraph:{
      title: String(response.data.post_title),
      images: String([response.data.post_image.url]),
    }
  }
 } catch (error) {
  return{
    title: "The Daily dish"
  }
 }

}


export default async function PostPage({ params }: {params: Promise<{ slug: string }>}) {

  const { slug } = await params

  const prismic = await getPrismicClient()

  const response = await prismic.getByUID('post', String(slug), {});

  const { post_title, post_image, post_category, post_author, post_description } = response.data

  const post = {
    slug: slug,
    post_title: String(post_title),
    post_description: asHTML(post_description),
    post_category: String(post_category),
    post_image:{
      url: post_image.url!,
      alt: post_image.alt!
    },
    post_author: asText(post_author),
    updatedAt: new Date(response.last_publication_date).toLocaleString("pt-Br", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    })
  }

  console.log(post)

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <PostDetail post={post}/>   
      </main>
        <Comments/> 
    </div>
  )
}

