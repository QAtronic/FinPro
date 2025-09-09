'use client'

import { ReactNode } from 'react'
import { designSystems } from './design-systems'

interface TemplateWrapperProps {
  templateId: number
  children: ReactNode
}

export default function TemplateWrapper({ templateId, children }: TemplateWrapperProps) {
  const designSystem = designSystems.find(ds => ds.id === templateId) || designSystems[0]
  
  const getHeaderStyle = () => {
    switch (designSystem.layout.headerStyle) {
      case 'minimal':
        return 'border-b border-gray-200'
      case 'centered':
        return 'text-center border-b border-gray-200'
      case 'split':
        return 'flex justify-between items-center border-b border-gray-200'
      case 'overlay':
        return 'absolute top-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm'
      case 'sidebar':
        return 'flex items-center space-x-4 border-b border-gray-200'
      default:
        return 'border-b border-gray-200'
    }
  }
  
  const getHeroStyle = () => {
    switch (designSystem.layout.heroStyle) {
      case 'fullscreen':
        return 'min-h-screen flex items-center justify-center'
      case 'split':
        return 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'
      case 'card':
        return 'max-w-4xl mx-auto text-center'
      case 'minimal':
        return 'text-center py-16'
      case 'video':
        return 'relative overflow-hidden'
      default:
        return 'text-center py-16'
    }
  }
  
  const getProductGridStyle = () => {
    switch (designSystem.layout.productGrid) {
      case 'standard':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8'
      case 'carousel':
        return 'flex overflow-x-auto space-x-6 pb-4'
      case 'list':
        return 'space-y-6'
      case 'featured':
        return 'grid grid-cols-1 lg:grid-cols-2 gap-8'
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
    }
  }
  
  const getFooterStyle = () => {
    switch (designSystem.layout.footerStyle) {
      case 'minimal':
        return 'text-center py-8 border-t border-gray-200'
      case 'detailed':
        return 'grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-t border-gray-200'
      case 'newsletter':
        return 'bg-gray-50 py-12 border-t border-gray-200'
      case 'social':
        return 'flex justify-center space-x-6 py-8 border-t border-gray-200'
      case 'links':
        return 'grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-200'
      default:
        return 'text-center py-8 border-t border-gray-200'
    }
  }
  
  return (
    <div className={`min-h-screen ${designSystem.colorScheme.background}`}>
      <style jsx global>{`
        .template-${templateId} {
          --primary-color: ${designSystem.colorScheme.primary.replace('bg-', '')};
          --secondary-color: ${designSystem.colorScheme.secondary.replace('bg-', '')};
          --accent-color: ${designSystem.colorScheme.accent.replace('bg-', '')};
          --text-color: ${designSystem.colorScheme.text.replace('text-', '')};
          --text-secondary-color: ${designSystem.colorScheme.textSecondary.replace('text-', '')};
        }
        
        .template-${templateId} .header-style {
          ${getHeaderStyle()}
        }
        
        .template-${templateId} .hero-style {
          ${getHeroStyle()}
        }
        
        .template-${templateId} .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .template-${templateId} .footer-style {
          ${getFooterStyle()}
        }
        
        .template-${templateId} h1 {
          ${designSystem.typography.heading}
        }
        
        .template-${templateId} h2 {
          ${designSystem.typography.subheading}
        }
        
        .template-${templateId} p {
          ${designSystem.typography.body}
        }
        
        .template-${templateId} .caption {
          ${designSystem.typography.caption}
        }
        
        .template-${templateId} button {
          ${designSystem.typography.button}
        }
        
        .template-${templateId} .card {
          ${designSystem.borderRadius.lg} ${designSystem.shadows.md}
        }
        
        .template-${templateId} .card:hover {
          ${designSystem.animations.hover} ${designSystem.animations.transition}
        }
        
        .template-${templateId} .btn-primary {
          ${designSystem.colorScheme.primary} ${designSystem.colorScheme.text} ${designSystem.borderRadius.md} ${designSystem.animations.transition}
        }
        
        .template-${templateId} .btn-secondary {
          ${designSystem.colorScheme.secondary} ${designSystem.colorScheme.text} ${designSystem.borderRadius.md} ${designSystem.animations.transition}
        }
        
        .template-${templateId} .spacing-xs { ${designSystem.spacing.xs} }
        .template-${templateId} .spacing-sm { ${designSystem.spacing.sm} }
        .template-${templateId} .spacing-md { ${designSystem.spacing.md} }
        .template-${templateId} .spacing-lg { ${designSystem.spacing.lg} }
        .template-${templateId} .spacing-xl { ${designSystem.spacing.xl} }
        .template-${templateId} .spacing-xxl { ${designSystem.spacing.xxl} }
      `}</style>
      
      <div className={`template-${templateId}`}>
        {children}
      </div>
    </div>
  )
}
