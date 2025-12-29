import React from "react"
import type { LucideIcon } from "lucide-react"

interface SpecificSolutionCardProps {
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    icon: LucideIcon
    tags: string[]
}

const SpecificSolutionCard: React.FC<SpecificSolutionCardProps> = ({
    title,
    description,
    imageSrc,
    imageAlt,
    icon: Icon,
    tags,
}) => {
    return (
        <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
            <div className="aspect-video relative bg-muted">
                <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 space-y-3">
                <div className="flex items-start gap-2">
                    <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-semibold text-base mb-1">{title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SpecificSolutionCard
