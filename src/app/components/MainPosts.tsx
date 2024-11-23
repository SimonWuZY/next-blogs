"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"

export default function HighlightedPosts() {
  const highlightedPosts = [
    { 
      title: "Enhance LLM Application observability on Dify", 
      author: "JOSHUA", 
      date: "JUL 2, 2024", 
      category: "RELEASE",
      description: "With simple configuration, you can now access detailed application data, making it easier to evaluate the cost, latency, and quality of LLM applications created on Dify."
    },
    { 
      title: "Dify.AI x Firecrawl: A Top-Notch Solution", 
      author: "JOSHUA", 
      date: "JUN 17, 2024", 
      category: "RELEASE",
      description: "Dify v0.6.11 has just been released! We've integrated Firecrawl as our web data source solution, which greatly enhances the knowledge base."
    },
    { 
      title: "Introduction to DifySandbox", 
      author: "YEOLOY", 
      date: "JUL 10, 2024", 
      category: "PRODUCT",
      description: "This blog thoroughly outlines the rationale, design principles, and implementation mechanisms that guided the development of DifySandbox."
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {highlightedPosts.map((post, index) => (
        <Card
          key={index}
          className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <span className="text-sm font-semibold text-blue-500">{post.category}</span>
          <CardHeader className="p-0 mt-2">
            <CardTitle className="text-xl">{post.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-2">
            <p className="text-sm text-gray-600">By {post.author} · {post.date}</p>
            <p className="mt-2 text-gray-700">{post.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

