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
                // If url starts with API_URL, strip it to use the proxy
                const finalUrl = url.startsWith(API_URL) ? url.replace(API_URL, "") : url

                const response = await fetch(finalUrl)
                if (!response.ok) throw new Error("Failed to fetch animation")
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
