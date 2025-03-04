import { useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

interface GameFrameProps {
  url: string;
}

export function GameFrame({ url }: GameFrameProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`relative ${
          isFullscreen ? "fixed inset-0 z-50 bg-background" : ""
        }`}
      >
        <iframe
          src={url}
          className={`w-full ${
            isFullscreen ? "h-screen" : "aspect-video"
          } border-0`}
          allowFullScreen
        />
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {isFullscreen ? (
            <>
              Exit Fullscreen <Minimize2 className="h-4 w-4" />
            </>
          ) : (
            <>
              Fullscreen Mode <Maximize2 className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
