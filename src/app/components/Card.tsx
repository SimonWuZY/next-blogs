import React from 'react'

type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      {...props}
    />
  )
}

type CardContentProps = React.HTMLAttributes<HTMLDivElement>

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      className={`p-6 ${className}`}
      {...props}
    />
  )
}