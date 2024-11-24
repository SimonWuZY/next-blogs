import { useState, useEffect, useRef } from 'react'
import { Button } from '@/app/components/ui/button'
import { PlusIcon } from 'lucide-react'

interface SidebarProps {
  width: number
  setWidth: (width: number) => void
}

export default function Sidebar({ width, setWidth }: SidebarProps) {
  const [isDragging, setIsDragging] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      const newWidth = e.clientX
      setWidth(Math.max(200, Math.min(newWidth, 400)))
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, setWidth])

  return (
    <div
      ref={sidebarRef}
      className="bg-gray-100 flex flex-col"
      style={{ width: `${width}px` }}
    >
      <div className="p-4">
        <Button
          className="w-full justify-start"
          variant="outline"
          onClick={() => {}}
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          {width > 240 ? 'New Chat' : ''}
        </Button>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        {/* Chat history list goes here */}
      </div>
      <div
        className="w-1 bg-gray-300 absolute right-0 top-0 bottom-0 cursor-col-resize"
        onMouseDown={() => setIsDragging(true)}
      />
    </div>
  )
}

