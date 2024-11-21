"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Compass, Bot,} from 'lucide-react'
import { Button } from "../components/Button"
import { ScrollArea } from "../components/ScrollArea"
import { Card, CardContent } from "../components/Card"

interface ChatItem {
  id: string
  title: string
  icon?: string
}

interface Application {
  title: string
  subtitle: string
  description: string
  image: string
}

export default function AIAssistantPage() {
  const [chatItems, setChatItems] = useState<ChatItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('discover')

  const applications: Application[] = [
    {
      title: "GPT-Researcher",
      subtitle: "工作流",
      description: "GPT-Researcher 是互联网主题研究方面的专家。它可以高效地将一个主题分解为子问题，并从全面的角度提供专业的研究报告。",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      title: "ChatPaper",
      subtitle: "聊天助手",
      description: "和论文对话！",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      title: "ChatPaper",
      subtitle: "聊天助手",
      description: "和论文对话！",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      title: "GPT-Researcher",
      subtitle: "工作流",
      description: "GPT-Researcher 是互联网主题研究方面的专家。它可以高效地将一个主题分解为子问题，并从全面的角度提供专业的研究报告。",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      title: "ChatPaper",
      subtitle: "聊天助手",
      description: "和论文对话！",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      title: "ChatPaper",
      subtitle: "聊天助手",
      description: "和论文对话！",
      image: "/placeholder.svg?height=100&width=100"
    },
  ]

  useEffect(() => {
    const fetchChatItems = async () => {
      try {
        // 这里应该替换为实际的API调用
        // const response = await fetch('/api/chats')
        // const data = await response.json()
        // setChatItems(data)
        
        // 模拟API调用的延迟
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // 使用模拟数据
        setChatItems([
          { id: '1', title: '科普文章作者', icon: '📝' },
          { id: '2', title: '思考式 Claude', icon: '🤖' },
        ])
      } catch (error) {
        console.error('Failed to fetch chat items:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchChatItems()
  }, [])

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r bg-background">
        <div className="flex h-full flex-col">
          {/* Navigation */}
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <Button
                variant={activeSection === 'discover' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveSection('discover')}
              >
                <Compass className="mr-2 h-4 w-4" />
                发现
              </Button>
            </div>
            
            {/* Workspace Section */}
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                工作区
              </h2>
              <div className="space-y-1">
                {/* Chat Items */}
                {isLoading ? (
                  <div className="flex items-center justify-center py-4">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  </div>
                ) : (
                  chatItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.icon ? (
                        <span className="mr-2">{item.icon}</span>
                      ) : (
                        <Bot className="mr-2 h-4 w-4" />
                      )}
                      {item.title}
                    </Button>
                  ))
                )}
              </div>
            </div>
          </div>

          <ScrollArea className="flex-1">
            {/* Additional content can be added here */}
          </ScrollArea>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {activeSection === 'discover' && (
          <div className="container mx-auto px-4 py-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">
                <span className="text-blue-500">探索</span>{" "}
                <span className="text-blue-500">智创</span>{" "}
                <span>的应用</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                使用这些模板应用，或根据模板自定义您自己的应用模型
              </p>
            </div>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {applications.map((app, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative h-32 md:h-full">
                        <Image
                          src={app.image}
                          alt={app.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6 flex flex-col justify-center">
                        <div className="flex items-center mb-2">
                          <h2 className="text-xl font-bold">{app.title}</h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{app.subtitle}</p>
                        <p className="text-sm text-muted-foreground">{app.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        {activeSection !== 'discover' && (
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold mb-4">
              {chatItems.find(item => item.id === activeSection)?.title || 'Chat'}
            </h1>
            <p>这里是聊天界面的占位符。您可以根据需要实现具体的聊天功能。</p>
          </div>
        )}
      </main>
    </div>
  )
}