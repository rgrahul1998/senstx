import { Button } from "../../components/common/Button"
import Card from "../../components/common/Card"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Sparkles } from "lucide-react"

const services = [
    {
        title: "Agentic AI & Automation",
        description:
            "Autonomous AI agents that think, learn, and act independently to transform your business operations with unprecedented efficiency. Personalized AI solutions that continuously evolve and adapt to your specific business requirements.",
        href: "/services/ai-services",
        featured: true,
        badge: "Agentic AI",
    },
    {
        title: "Financial Services",
        description:
            "Expert financial consulting and AI-powered fintech solutions for modern enterprises. Advanced risk management, fraud detection, and automated financial reporting systems that ensure compliance and optimize operations.",
        href: "/services/financial-services",
        featured: true,
        badge: "Risk & Compliance",
    },
    {
        title: "Enterprise Solutions",
        description:
            "Robust software solutions tailored for large organizations with AI integration. Comprehensive ERP implementations, CRM systems, and business process automation that streamline operations and enhance productivity.",
        href: "/services/enterprise-solution",
        featured: true,
        badge: "ERP & CRM",
    },
    {
        title: "Cloud Services",
        description:
            "Secure and scalable cloud infrastructure with intelligent monitoring and automation.",
        href: "/services/cloud-services",
        featured: true,
        badge: "Multi-Cloud",
    },
    {
        title: "Data Analytics",
        description:
            "Turn data into actionable insights with our advanced analytics and AI-driven intelligence.",
        href: "/services/data-analytics",
        featured: true,
        badge: "BI & Insights",
    },
]

const ServicesPage = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                        <span className="text-primary font-semibold uppercase tracking-wide text-sm">
                            AI-First Solutions
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        Our{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            AI-Powered
                        </span>{" "}
                        Services
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Experience the future of business automation with our cutting-edge AI and
                        agentic solutions that learn, adapt, and deliver exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className={`h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                                service.featured
                                    ? "ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-accent/5"
                                    : ""
                            }`}
                            onClick={() => service.href && navigate(service.href)}
                        >
                            <div className="p-6 flex flex-col h-full">
                                {service.badge && (
                                    <div className="mb-3">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                                            {service.badge}
                                        </span>
                                    </div>
                                )}
                                <h2
                                    className={`text-xl font-bold mb-3 ${service.featured ? "text-primary" : ""}`}
                                >
                                    {service.title}
                                </h2>
                                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                                    {service.description}
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-auto group border-primary text-primary hover:bg-primary hover:text-white"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        service.href && navigate(service.href)
                                    }}
                                >
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* AI Spotlight Section */}
                <div className="mt-16 text-center">
                    <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
                        <div className="p-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Transform with AI?
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Join industry leaders who are already leveraging our agentic AI
                                solutions to drive unprecedented growth and efficiency.
                            </p>
                            <Button
                                size="lg"
                                variant="secondary"
                                onClick={() => navigate("/contact")}
                                className="bg-white text-primary hover:bg-white/90"
                            >
                                Start Your AI Journey <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
