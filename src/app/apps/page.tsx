'use client'

import { useState } from 'react'
import Sidebar from '@/app/components/chats/sidebar'
import ChatArea from '@/app/components/chats/chatArea'
import ChatInput from '@/app/components/chats/chatInput'

export default function Home() {
  const [sidebarWidth, setSidebarWidth] = useState(300)

  return (
    <div className="flex h-screen">
      <Sidebar width={sidebarWidth} setWidth={setSidebarWidth} />
      <div className="flex flex-col flex-grow">
        <ChatArea />
        <ChatInput />
      </div>
    </div>
  )
}

