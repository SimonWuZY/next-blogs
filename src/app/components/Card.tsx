import React from 'react'

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'bordered'
}

export function Card({ className, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden ${
        variant === 'bordered' ? 'border border-gray-200' : 'shadow-md'
      } ${className}`}
      {...props}
    />
  )
}

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className={`px-6 py-4 border-b border-gray-200 ${className}`}
      {...props}
    />
  )
}

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={`text-lg font-semibold text-gray-900 ${className}`}
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

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={`px-6 py-4 bg-gray-50 ${className}`}
      {...props}
    />
  )
}