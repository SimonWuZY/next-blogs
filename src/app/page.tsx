'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/app/components/ui/Card'
import { Search, Calendar, Smile, Bot, FileText } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'



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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  }

  interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
  }

  function AnimatedSection({ children, className }: AnimatedSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.3 })

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={stagger}
        className={className}
      >
        {isInView && children}
      </motion.div>
    )
  }

  return (
    <main>
      <AnimatedSection className='flex flex-col justify-center items-center min-h-screen text-black'>
        <motion.div
          className='mt-1 font-extrabold text-[82px] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
          variants={fadeInUp}
        >
          这是一个科研学习好助手
        </motion.div>

        <motion.div
          className='my-10 font-serif text-[24px] text-gray-700'
          variants={fadeInUp}
        >
          xxxx 将根据您的具体需求和工作环境提供最佳的定制服务，包括科研信息检索、日程安排、情绪价值等
        </motion.div>
        <motion.div
          className='flex space-x-4'
          variants={fadeInUp}
        >
          <motion.button
            className='px-6 py-2 text-white bg-blue-600 w-[180px] 
              rounded-lg transition duration-300 ease-in-out 
              transform hover:bg-blue-500 hover:scale-105
              mt-3 mx-8 shadow-lg'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            快速开始
          </motion.button>
          <motion.button
            className='px-6 py-2 text-white bg-purple-600 w-[180px]
              rounded-lg transition duration-300 ease-in-out
              transform hover:bg-purple-500  hover:scale-105
              mt-3 mx-8 shadow-lg'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            演示视频
          </motion.button>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className='flex flex-col justify-center items-center min-h-screen text-black'>
        <motion.div
          className='mt-1 font-extrabold text-[52px]'
          variants={fadeInUp}
        >
          <span className="text-blue-700">微调 prompt</span> <span className="text-purple-700">检索增强 RAG</span>
        </motion.div>
        <motion.div
          className='w-1/2 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mt-4'
          variants={fadeInUp}
        ></motion.div>
        <motion.div
          className="max-w-7xl mx-auto px-4 py-16"
          variants={stagger}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-blue-300 to-blue-200 border-none shadow-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Bot className="w-6 h-6 text-blue-600" />
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
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-purple-200 to-pink-200 border-none shadow-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full ">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <FileText className="w-6 h-6 text-purple-600" />
                        <h2 className="text-2xl font-bold text-purple-900">智能文档生成</h2>
                      </div>
                      <p className="text-purple-800 mb-8">
                        从知识库生成清晰、逻辑严密的文档。轻松总结长篇文档，提供准确的信息提取服务。
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Document Generation Interface"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className='flex flex-col justify-center items-center min-h-screen text-black'>
        <motion.div
          className='mt-1 font-extrabold text-[64px] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
          variants={fadeInUp}
        >
          主要适用业务范围
        </motion.div>
        <motion.div
          className='my-10 font-serif text-[32px] text-gray-700'
          variants={fadeInUp}
        >
          xxxx 将根据您的具体需求和工作环境提供最佳的定制服务，包括科研信息检索、日程安排、情绪价值等
        </motion.div>
        <motion.div
          className="space-y-8 max-w-7xl mx-auto px-4 py-16"
          variants={stagger}
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
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
                    <div className="md:w-1/2 p-6 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                      <div className="flex items-center mb-4">
                        <card.icon className="w-6 h-6 mr-2 text-blue-600" />
                        <h2 className="text-2xl font-bold text-gray-800">{card.title}</h2>
                      </div>
                      <p className="text-gray-600">{card.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>
    </main>
  )
}

