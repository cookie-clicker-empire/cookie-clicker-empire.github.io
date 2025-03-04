"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Maximize2, Minimize2, RefreshCw } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface GameFrameProps {
  url: string
}

export function GameFrame({ url }: GameFrameProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [frameHeight, setFrameHeight] = useState(600)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (isFullscreen) {
        setFrameHeight(window.innerHeight - 100)
      } else {
        // Responsive height based on screen width
        const width = window.innerWidth
        if (width < 640) {
          // mobile
          setFrameHeight(400)
        } else if (width < 1024) {
          // tablet
          setFrameHeight(500)
        } else {
          // desktop
          setFrameHeight(600)
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isFullscreen])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const reloadIframe = () => {
    setIsLoading(true)
    setHasError(false)
    if (iframeRef.current) {
      iframeRef.current.src = url
    }
  }

  return (
    <Card className={`overflow-hidden ${isFullscreen ? "fixed inset-0 z-50 m-4 rounded-lg" : "relative"}`}>
      <div className="bg-muted p-2 flex justify-between items-center">
        <h3 className="text-sm font-medium">Cookie Clicker</h3>
        <div className="flex items-center gap-2">
          {hasError && (
            <Button variant="ghost" size="icon" onClick={reloadIframe} aria-label="Reload game">
              <RefreshCw className="h-4 w-4" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      <div className="relative w-full" style={{ height: `${frameHeight}px` }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
            <div className="space-y-3 w-[80%]">
              <Skeleton className="h-[40px] w-[100%] rounded-lg" />
              <Skeleton className="h-[300px] w-[100%] rounded-lg" />
              <div className="flex gap-2">
                <Skeleton className="h-[30px] w-[120px] rounded-lg" />
                <Skeleton className="h-[30px] w-[120px] rounded-lg" />
              </div>
            </div>
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/10">
            <p className="text-destructive mb-4">Unable to load the game</p>
            <Button onClick={reloadIframe} variant="outline" className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" /> Try Again
            </Button>
          </div>
        )}

        <iframe
          ref={iframeRef}
          src={url}
          title="Cookie Clicker Game"
          className="absolute inset-0 w-full h-full border-0"
          allow="fullscreen"
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          aria-label="Cookie Clicker game iframe"
        ></iframe>
      </div>
    </Card>
  )
}

