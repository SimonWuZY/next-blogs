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
    <main>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='mt-1 font-extrabold text-[82px]'>
          这是一个科研学习好助手
        </div>
        <div className='my-10 font-serif text-[24px]'>
          xxxx 将根据您的具体需求和工作环境提供最佳的定制服务，包括科研信息检索、日程安排、情绪价值等
        </div>
        <div className='flex space-x-4'>
          <button className='px-6 py-2 text-white bg-blue-500 w-[180px] 
    rounded-lg transition duration-300 ease-in-out 
    transform hover:bg-blue-400 hover:scale-105
    mt-3 mx-8'>
            蓝色按钮
          </button>
          <button className='px-6 py-2 text-blue-500 bg-white border w-[180px]
           rounded-lg transition duration-300 ease-in-out
      transform hover:bg-gray-300 hover:text-white hover:scale-105
      mt-3 mx-8'>
            白色按钮
          </button>
        </div>
      </div>
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
    </main>


  )
}