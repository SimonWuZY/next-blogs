import { ScrollArea } from '@/app/components/ui/scroll-area'

interface Message {
  id: number
  content: string
  isUser: boolean
}

export default function ChatArea() {
  const messages: Message[] = [
    { id: 1, content: "Hello! How can I help you today?", isUser: false },
    { id: 2, content: "I have a question about React hooks.", isUser: true },
    { id: 3, content: "Sure, I'd be happy to help. What specific question do you have about React hooks?", isUser: false },
  ]

  return (
    <ScrollArea className="flex-grow p-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-4 ${
            message.isUser ? 'text-right' : 'text-left'
          }`}
        >
          <div
            className={`inline-block p-2 rounded-lg ${
              message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </ScrollArea>
  )
}

