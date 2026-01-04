import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import { API_URL } from "../../config"

interface DynamicLottieProps {
    url: string
    className?: string
}

const DynamicLottie: React.FC<DynamicLottieProps> = ({ url, className }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                // Split by '/' to encode only the filename parts, not the slashes
                const urlParts = processedUrl.split("/")
                const encodedParts = urlParts.map((part, index) =>
                    // Only encode the last part (filename) if it contains spaces
                    index === urlParts.length - 1 && part.includes(" ")
                        ? encodeURIComponent(part)
                        : part,
                )
                const finalUrl = encodedParts.join("/")
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
