import React, { useState, useRef, useEffect } from 'react'
import { Box, Skeleton } from '@mui/material'

function LazyImage({ 
  src, 
  alt, 
  fallback, 
  width = '100%', 
  height = 'auto',
  borderRadius = 0,
  objectFit = 'cover',
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  const imageSrc = hasError && fallback ? fallback : src

  return (
    <Box
      ref={imgRef}
      sx={{
        width,
        height,
        borderRadius,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.100',
      }}
      {...props}
    >
      {!isInView ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ borderRadius }}
        />
      ) : (
        <>
          {!isLoaded && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                borderRadius,
              }}
            />
          )}
          <Box
            component="img"
            src={imageSrc}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            sx={{
              width: '100%',
              height: '100%',
              objectFit,
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
              borderRadius,
            }}
          />
        </>
      )}
    </Box>
  )
}

export default LazyImage
