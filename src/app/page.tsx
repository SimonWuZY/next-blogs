import Image from 'next/image'
import { Card, CardContent } from "./components/Card"
import { Search, Calendar, Smile } from 'lucide-react'

export default function HomePage() {
  const cards = [
    {
      title: "科创信息检索",
      description: "快速获取最新的科技创新信息，助力您的研究和开发工作。我们的平台提供全面的科技文献、专利和市场趋势数据，让您始终保持在创新的前沿。",
      image: "/placeholder.svg?height=400&width=600",
      icon: Search
    },
    {
      title: "日常安排",
      description: "高效管理您的日程，平衡工作与生活。我们的智能日程工具可以帮助您优化时间分配，提高工作效率，同时确保您有足够的时间放松和充电。",
      image: "/placeholder.svg?height=400&width=600",
      icon: Calendar
    },
    {
      title: "情绪管理",
      description: "了解并调节您的情绪，提升生活质量。我们提供专业的情绪跟踪和分析工具，帮助您识别情绪模式，学习有效的应对策略，培养积极的心理健康。",
      image: "/placeholder.svg?height=400&width=600",
      icon: Smile
    }
  ]

  return (
    <div className="space-y-8">
      {cards.map((card, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <card.icon className="w-6 h-6 mr-2 text-blue-500" />
                  <h2 className="text-2xl font-bold">{card.title}</h2>
                </div>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}