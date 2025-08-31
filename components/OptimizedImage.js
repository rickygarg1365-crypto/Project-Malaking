'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function OptimizedImage({ 
  src, 
  alt, 
  fill = false, 
  width, 
  height, 
  style, 
  className = '',
  priority = false,
  quality = 85,
  sizes = "100vw",
  objectFit = 'cover',
  onLoad,
  ...props 
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoading(true)
    setHasError(false)
  }, [src])

  const handleLoad = () => {
    setIsLoading(false)
    if (onLoad) onLoad()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={`optimized-image-container ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="image-skeleton-loader">
          <div className="skeleton-shimmer"></div>
        </div>
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className="image-error-fallback">
          <div className="error-icon">📷</div>
          <div className="error-text">Image unavailable</div>
        </div>
      )}
      
      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        style={{
          ...style,
          objectFit,
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
        priority={priority}
        quality={quality}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        data-loading={isLoading}
        {...props}
      />
    </div>
  )
}
