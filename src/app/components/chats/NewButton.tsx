import { Button } from '@/app/components/ui/button'
import { PlusIcon } from 'lucide-react'

interface NewChatButtonProps {
  showText: boolean
}

export default function NewChatButton({ showText }: NewChatButtonProps) {
  return (
    <Button
      className="w-full justify-start"
      variant="outline"
      onClick={() => {
        // Handle new chat creation
        console.log('New chat created')
      }}
    >
      <PlusIcon className="mr-2 h-4 w-4" />
      {showText ? 'New Chat' : ''}
    </Button>
  )
}

