'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const LoadingContext = createContext()

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    // Start loading when pathname changes
    setIsLoading(true)
    setLoadingProgress(0)

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return prev + 10
      })
    }, 50)

    // Complete loading after a short delay
    const completeTimeout = setTimeout(() => {
      setLoadingProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setLoadingProgress(0)
      }, 200)
    }, 300)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(completeTimeout)
    }
  }, [pathname])

  const value = {
    isLoading,
    loadingProgress,
    setIsLoading
  }

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {isLoading && (
        <div className="page-loading-overlay">
          <div className="page-loading-content">
            <div className="loading-spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>
            <div className="loading-text">Loading...</div>
            <div className="loading-progress">
              <div 
                className="loading-progress-bar" 
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  )
}
