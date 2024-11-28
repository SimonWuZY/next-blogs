
import Button from 'antd/es/button'
import { useRouter } from "next/navigation"
import React from 'react'

export default function BlogFooter() {
  const router = useRouter()
  return (
    <div>
      <Button type="primary" onClick={() => router.push('/drafts')}>Primary Button</Button>
    </div>
  )
}