import React from "react"
import DynamicLottie from "./DynamicLottie"

interface DynamicMediaProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src?: string
}

const DynamicMedia: React.FC<DynamicMediaProps> = ({ src, alt, className, ...props }) => {
    if (!src) return null

    const isLottie = src.toLowerCase().endsWith(".json")

    if (isLottie) {
        return <DynamicLottie url={src} className={className} />
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                    "https://placehold.co/600x400?text=Placeholder"
            }}
            {...props}
        />
    )
}

export default DynamicMedia
