import { SetStateAction, useState } from 'react'
import { Input } from '@/app/components/ui/input'
import { Button } from '@/app/components/ui/button'
import { SendIcon } from 'lucide-react'

export default function ChatInput() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message submission
    console.log('Submitted message:', message)
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex items-center">
        <Input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e: { target: { value: SetStateAction<string> } }) => setMessage(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button type="submit" size="icon">
          <SendIcon className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}

