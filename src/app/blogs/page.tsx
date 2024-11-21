"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import { useEffect, useState } from "react"
import Image from 'next/image'

export default function ForumPost() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const posts = [
        {
            title: "Enhancing GPT-Researcher",
            author: "EVAN CHEN",
            date: "NOV 5, 2024",
            category: "HOW TO",
            image: '/image.png'
        },
        {
            title: "Dify.AI x TechCrunch",
            author: "DIFY",
            date: "NOV 1, 2024",
            category: "COMPANY",
            image: "/image.png"
        },
        {
            title: "Cross-Platform Copywriting",
            author: "EVAN CHEN & LYSON",
            date: "SEP 14, 2024",
            category: "HOW TO",
            image: "/image.png"
        },
        {
            title: "Introducing Workflow",
            author: "JOSHUA & EVAN CHEN",
            date: "OCT 21, 2024",
            category: "RELEASE",
            image: "/image.png"
        },
    ]

    return (
        <main className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {posts.map((post, index) => (
                    <Card
                        key={index}
                        className={`flex items-stretch bg-gray-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="flex-1 p-4">
                            <span className="text-sm font-semibold text-blue-500">{post.category}</span>
                            <CardHeader className="p-0 mt-2">
                                <CardTitle className="text-xl">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-2">
                                <p className="text-sm text-gray-600">By {post.author} · {post.date}</p>
                                <p className="mt-2 text-gray-700">内容简介</p>
                            </CardContent>
                        </div>
                        <div className="w-1/3 relative">
                            <Image
                                src={post.image}
                                alt={post.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </main>
    )
}

