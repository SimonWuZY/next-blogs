'use client'

import { useEffect, useState } from 'react'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import ReactMarkdown from 'react-markdown'
import { ScrollArea } from '@/app/components/ui/scroll-area'
import type { PreviewProps } from '@/app/types/editor'

export function MarkdownPreview({ markdown }: PreviewProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ScrollArea className="h-full">
      <div className="prose prose-sm max-w-none p-6 dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </ScrollArea>
  )
}

