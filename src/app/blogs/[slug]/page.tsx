/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { ArrowLeft, LinkIcon, Linkedin, Twitter } from 'lucide-react'
import Image from "next/image"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import { Button } from "@/app/components/ui/button"

// Move this to a separate file in a real application
const posts = [
    {
        title: "Enhancing GPT-Researcher",
        author: "EVAN CHEN",
        date: "NOV 5, 2024",
        category: "HOW TO",
        image: '/placeholder.svg?height=200&width=300',
        slug: "enhancing-gpt-researcher",
        content: "Content for Enhancing GPT-Researcher...",
    },
    {
        title: "Dify.AI x TechCrunch",
        author: "DIFY",
        date: "NOV 1, 2024",
        category: "COMPANY",
        image: "/placeholder.svg?height=200&width=300",
        slug: "dify-ai-x-techcrunch",
        content: "Content for Dify.AI x TechCrunch...",
    },
    {
        title: "Cross-Platform Copywriting",
        author: "EVAN CHEN & LYSON",
        date: "SEP 14, 2024",
        category: "HOW TO",
        image: "/placeholder.svg?height=200&width=300",
        slug: "cross-platform-copywriting",
        content: "Content for Cross-Platform Copywriting...",
    },
    {
        title: "Introducing Workflow",
        author: "JOSHUA & EVAN CHEN",
        date: "OCT 21, 2024",
        category: "RELEASE",
        image: "/placeholder.svg?height=200&width=300",
        slug: "introducing-workflow",
        content: "Content for Introducing Workflow...",
    },
]

export default function BlogPost() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    if (params.slug) {
      const foundPost = posts.find(p => p.slug === params.slug)
      if (foundPost) {
        setPost(foundPost)
      }
    }
  }, [params.slug])

  if (!post) return null

  return (
    <>
      {/* Back Button */}
      <Button
        variant="ghost"
        className="mb-6 hover:bg-transparent"
        onClick={() => router.push('/blogs')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to posts
      </Button>

      {/* Category */}
      <div className="text-blue-500 font-semibold mb-4">{post.category}</div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

      {/* Author */}
      <div className="flex items-center gap-6 mb-8">
        <div className="flex items-center gap-3">
          <Image
            src={post.image}
            alt={post.author}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="font-semibold">{post.author}</div>
            <div className="text-sm text-gray-600">{post.date}</div>
          </div>
        </div>
      </div>

      {/* Share buttons */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-gray-600">Share</span>
        <Button variant="ghost" size="icon">
          <Twitter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <LinkIcon className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main content */}
        <div className="md:col-span-3 prose prose-gray max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm, remarkToc]}
            className="markdown-content"
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Table of contents */}
        <div className="hidden md:block">
          <div className="sticky top-8">
            <h3 className="font-semibold mb-4">ON THIS PAGE</h3>
            <nav className="space-y-2">
              {/* This is a placeholder. In a real application, you'd generate this dynamically based on the content */}
              <a href="#section-1" className="block text-gray-600 hover:text-gray-900">Section 1</a>
              <a href="#section-2" className="block text-gray-600 hover:text-gray-900">Section 2</a>
              <a href="#section-3" className="block text-gray-600 hover:text-gray-900">Section 3</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

