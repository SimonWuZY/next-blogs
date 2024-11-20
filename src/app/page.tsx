import Image from 'next/image'
import { Card, CardContent } from "./components/Card"
import { Search, Calendar, Smile, Bot, FileText } from 'lucide-react'

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
    <main className="bg-gradient-to-br">
      <div className='flex flex-col justify-center items-center min-h-screen text-black'>
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

      <div className='flex flex-col justify-center items-center min-h-screen text-black'>
        <div className='mt-1 font-extrabold text-[52px]'>
          微调 prompt 检索增强 RAG
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-100 border-none">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Bot className="w-6 h-6 text-blue-500" />
                      <h2 className="text-2xl font-bold text-blue-900">智能助手服务</h2>
                    </div>
                    <p className="text-blue-800 mb-8">
                      部署定制化的智能助手，在5分钟内即可获得领域知识支持，开创人机协作新篇章。
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="AI Assistant Interface"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-100 border-none">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-6 h-6 text-red-500" />
                      <h2 className="text-2xl font-bold text-red-900">智能文档生成</h2>
                    </div>
                    <p className="text-red-800 mb-8">
                      从知识库生成清晰、逻辑严密的文档。轻松总结长篇文档，提供准确的信息提取服务。
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Document Generation Interface"
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center min-h-screen text-black'>
        <div className='mt-1 font-extrabold text-[64px]'>
          主要适用业务范围
        </div>
        <div className='my-10 font-serif text-[32px]'>
          xxxx 将根据您的具体需求和工作环境提供最佳的定制服务，包括科研信息检索、日程安排、情绪价值等
        </div>
        <div className="space-y-8 max-w-7xl mx-auto px-4 py-16">
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
      </div>


    </main>
  )
}