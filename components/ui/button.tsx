import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'default' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', asChild, variant = 'default', size = 'md', ...props }, ref) => {
    const Comp: any = asChild ? Slot : 'button'
    const base = 'inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
    const variants: Record<string,string> = {
      default: 'bg-red-600 text-white hover:bg-red-700 ring-red-600/30',
      outline: 'border border-gray-300 text-gray-900 hover:bg-gray-50 ring-gray-300/50',
    }
    const sizes: Record<string,string> = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-11 px-5 text-base',
    }
    return (
      <Comp ref={ref} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
    )
  }
)
Button.displayName = 'Button'
