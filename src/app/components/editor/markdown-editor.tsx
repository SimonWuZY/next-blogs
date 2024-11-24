'use client'

import { useState } from 'react'
import { Bold, Italic, Link, Image, Code, Quote, List, ListOrdered, Table, FileCode } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { Textarea } from '@/app/components/ui/textarea'
// import { Separator } from '@/app/components/ui/separator'
import { ScrollArea } from '@/app/components/ui/scroll-area'
import type { EditorProps } from '@/app/types/editor'

export function MarkdownEditor({ initialValue = '', onChange }: EditorProps) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (newValue: string) => {
    setValue(newValue)
    onChange?.(newValue)
  }

  const insertText = (before: string, after: string = '') => {
    const textarea = document.querySelector('textarea')
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end)
    handleChange(newText)
  }

  const toolbarButtons = [
    { icon: <Bold className="h-4 w-4" />, label: '粗体', action: () => insertText('**', '**') },
    { icon: <Italic className="h-4 w-4" />, label: '斜体', action: () => insertText('*', '*') },
    { icon: <Link className="h-4 w-4" />, label: '链接', action: () => insertText('[', '](url)') },
    { icon: <Image className="h-4 w-4" />, label: '图片', action: () => insertText('![alt](', ')') },
    { icon: <Code className="h-4 w-4" />, label: '代码', action: () => insertText('`', '`') },
    { icon: <Quote className="h-4 w-4" />, label: '引用', action: () => insertText('> ') },
    { icon: <List className="h-4 w-4" />, label: '无序列表', action: () => insertText('- ') },
    { icon: <ListOrdered className="h-4 w-4" />, label: '有序列表', action: () => insertText('1. ') },
    { icon: <Table className="h-4 w-4" />, label: '表格', action: () => insertText('| Column 1 | Column 2 |\n| -------- | -------- |\n| Cell 1   | Cell 2   |') },
    { icon: <FileCode className="h-4 w-4" />, label: '代码块', action: () => insertText('```\n', '\n```') },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="border-b p-2 flex items-center space-x-1">
        {toolbarButtons.map((button, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={button.action}
            title={button.label}
          >
            {button.icon}
          </Button>
        ))}
      </div>
      <ScrollArea className="flex-1">
        <Textarea
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          className="min-h-[500px] resize-none border-0 focus-visible:ring-0"
          placeholder="输入文章标题..."
        />
      </ScrollArea>
    </div>
  )
}

