"use client"

import { useEffect, useRef } from "react"

interface VideoBackgroundProps {
  src: string
  opacity?: number
  className?: string
}

export function VideoBackground({ src, opacity = 0.3, className = "" }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
