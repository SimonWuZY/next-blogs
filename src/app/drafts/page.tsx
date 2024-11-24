'use client'

import { useState } from 'react'
import { Button } from '@/app/components/ui/button'
import { MarkdownEditor } from '@/app/components/editor/markdown-editor'
import { MarkdownPreview } from '@/app/components/editor/markdown-preview'

export default function Page() {
  const [markdown, setMarkdown] = useState('')

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold">Markdown Editor</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">草稿箱</Button>
          <Button>发布</Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-2 divide-x">
        <div className="h-full">
          <MarkdownEditor
            initialValue={markdown}
            onChange={setMarkdown}
          />
        </div>
        <div className="h-full bg-muted/50">
          <MarkdownPreview markdown={markdown} />
        </div>
      </main>
      <footer className="border-t p-2 text-sm text-muted-foreground">
        <div className="flex items-center space-x-4">
          <span>字符数: {markdown.length}</span>
          <span>行数: {markdown.split('\n').length}</span>
        </div>
      </footer>
    </div>
  )
}

