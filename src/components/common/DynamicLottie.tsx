import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import { API_URL } from "../../config"

interface DynamicLottieProps {
    url: string
    className?: string
}

// Global cache for Lottie animation data to prevent redundant fetches
const lottieCache = new Map<string, any>()

const DynamicLottie: React.FC<DynamicLottieProps> = ({ url, className }) => {
    const [animationData, setAnimationData] = useState<any>(null)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchAnimation = async () => {
            try {
                let processedUrl = url
                if (url.startsWith(API_URL)) {
                    processedUrl = url.replace(API_URL, "")
                }

                // URL-encode the path to handle spaces and special characters
                const urlParts = processedUrl.split("/")
                const encodedParts = urlParts.map((part, index) =>
                    index === urlParts.length - 1 && part.includes(" ")
                        ? encodeURIComponent(part)
                        : part,
                )
                const finalUrl = encodedParts.join("/")

                // Check cache first
                if (lottieCache.has(finalUrl)) {
                    setAnimationData(lottieCache.get(finalUrl))
                    return
                }

                const response = await fetch(finalUrl)

                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch animation: ${response.status} ${response.statusText}`,
                    )
                }

                // Check if response is actually JSON
                const contentType = response.headers.get("content-type")
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error(`Expected JSON but received ${contentType}`)
                }

                const data = await response.json()

                // Store in cache
                lottieCache.set(finalUrl, data)

                setAnimationData(data)
            } catch (err) {
                console.error("Error loading Lottie animation:", err)
                setError(true)
            }
        }

        if (url) {
            fetchAnimation()
        }
    }, [url])

    if (error || !animationData) return null

    return <Lottie animationData={animationData} loop={true} className={className} />
}

export default DynamicLottie
