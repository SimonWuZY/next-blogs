/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { ArrowLeft, LinkIcon, Linkedin, Twitter } from 'lucide-react'
import Image from "next/image"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import { Button } from "@/app/components/Button"

// This would typically come from your API or CMS
const getPostContent = (slug: string) => {
  console.log(`Fetching content for slug: ${slug}`);
  // Simulated post data - in a real app, fetch this from your API
  return {
    title: "Cross-Platform Copywriting with Dify",
    category: "HOW TO",
    date: "Sep 14, 2024",
    authors: [
      {
        name: "Evan Chen",
        role: "Product Manager",
        avatar: "/placeholder.svg?height=100&width=100"
      },
      {
        name: "Lyson",
        role: "Dify Contributor",
        avatar: "/placeholder.svg?height=100&width=100"
      }
    ],
    content: `
# Cross-Platform Copywriting with Dify

In Dify, not all nodes have a low entry threshold. Some nodes may be overlooked during the process of orchestrating flows, but combining them will unlock more possibilities for Dify in complex tasks...

## Chatflow Overview
Content for chatflow overview...

## Configure the Starting Node and Conversation Opener
Content for configuration...

## Using the Jina AI Tool for Web Scraping
Content for web scraping...

## Cross-platform style rewrite
Content for style rewrite...

## Extract Other Materials
Content for materials...

## Summary
Final thoughts and conclusions...
    `
  }
}

export default function BlogPost() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    if (params.slug) {
      const postData = getPostContent(params.slug as string);
      setPost(postData);
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

      {/* Authors */}
      <div className="flex items-center gap-6 mb-8">
        {post.authors.map((author: any, index: number) => (
          <div key={index} className="flex items-center gap-3">
            <Image
              src={author.avatar}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-gray-600">{author.role}</div>
            </div>
          </div>
        ))}
        <div className="text-gray-600 ml-auto">
          Written on {post.date}
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
              <a href="#chatflow-overview" className="block text-gray-600 hover:text-gray-900">Chatflow Overview</a>
              <a href="#configure-the-starting-node-and-conversation-opener" className="block text-gray-600 hover:text-gray-900">Configure the Starting Node</a>
              <a href="#using-the-jina-ai-tool-for-web-scraping" className="block text-gray-600 hover:text-gray-900">Using the Jina AI Tool</a>
              <a href="#cross-platform-style-rewrite" className="block text-gray-600 hover:text-gray-900">Cross-platform style rewrite</a>
              <a href="#extract-other-materials" className="block text-gray-600 hover:text-gray-900">Extract Other Materials</a>
              <a href="#summary" className="block text-gray-600 hover:text-gray-900">Summary</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

