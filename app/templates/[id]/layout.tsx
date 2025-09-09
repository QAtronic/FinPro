import { ReactNode } from 'react'

interface TemplateLayoutProps {
  children: ReactNode
  params: {
    id: string
  }
}

export default function TemplateLayout({ children, params }: TemplateLayoutProps) {
  return (
    <div className="template-preview">
      {children}
    </div>
  )
}
