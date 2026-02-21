import {
    ArrowRight,
    Brain,
    Bot,
    Sparkles,
    Zap,
    TrendingUp,
    Shield,
    Workflow,
    Database,
    BarChart3,
    Lightbulb,
    Target,
    Users,
    Settings,
    Crown,
} from "lucide-react"
import { Card } from "@mui/material"
import { CardContent, CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { Button } from "../../components/common/Button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import { useNavigate } from "react-router-dom"
import SpecificSolutionCard from "../../components/services/SpecificSolutionCard"
import DynamicMedia from "../../components/common/DynamicMedia"
import { useSettings } from "../../context/SettingsContext"
import { useCallback } from "react"
import type { SettingsMedia } from "../../api/settings"

export default function AIServicesPage() {
    const navigate = useNavigate()
    const { settings } = useSettings()

    const getDynamicImage = useCallback(
        (page: string, block: string, imageNo: string) => {
            if (!settings?.media_list) return undefined
            const found = settings.media_list.find(
                (img: SettingsMedia) =>
                    img.page_reference === page &&
                    img.block_no === block &&
                    img.image_no === imageNo,
            )
            return found ? found.attach_file : undefined
        },
        [settings],
    )

    const aiCapabilities = [
        {
            icon: Bot,
            title: "Agentic AI Solutions",
            description:
                "Autonomous AI agents that learn, adapt, and execute complex business processes with minimal human intervention.",
            features: [
                "Multi-agent orchestration",
                "Autonomous decision-making",
                "Self-improving workflows",
            ],
        },
        {
            icon: Brain,
            title: "Machine Learning & Analytics",
            description:
                "Advanced ML models for predictive analytics, risk assessment, and business intelligence.",
            features: ["Predictive modeling", "Real-time analytics", "Custom AI training"],
        },
        {
            icon: Workflow,
            title: "Intelligent Process Automation",
            description:
                "AI-powered automation that goes beyond traditional RPA with cognitive capabilities.",
            features: ["Document intelligence", "Dynamic workflows", "Exception handling"],
        },
        {
            icon: Settings,
            title: "Personalized Tailored Solutions",
            description:
                "Bespoke AI architectures designed and developed specifically for your unique business challenges, industry requirements, and operational workflows.",
            features: ["Custom AI architecture", "Industry-specific models", "Tailored workflows"],
        },
    ]

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                                <span className="text-primary font-semibold uppercase tracking-wide text-sm">
                                    Next-Generation AI
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                                Agentic AI &
                                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    {" "}
                                    Automation
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                Transform your business with autonomous AI agents that think, learn,
                                and act— delivering unprecedented efficiency and innovation across
                                every operation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    onClick={() => navigate("/contact")}
                                    className="bg-primary hover:bg-primary/90"
                                >
                                    Start AI Transformation <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => {
                                        const agenticSection = document.getElementById(
                                            "agentic-solutions-section",
                                        )
                                        agenticSection?.scrollIntoView({ behavior: "smooth" })
                                    }}
                                >
                                    Explore Solutions <Lightbulb className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                                <DynamicMedia
                                    src={getDynamicImage("AI Services Page", "Block 1", "Image 1")}
                                    alt="AI & Agentic Solutions Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 h-24 w-24 bg-primary/20 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-accent/20 rounded-full animate-pulse delay-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Capabilities Overview */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Solutions</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We combine cutting-edge artificial intelligence with deep industry
                            expertise to deliver solutions that truly understand and transform your
                            business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {aiCapabilities.map((capability, index) => (
                            <Card
                                key={index}
                                className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="mb-4 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                        <capability.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">
                                        {capability.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {capability.description}
                                    </p>
                                    <div className="space-y-2">
                                        {capability.features.map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-center gap-2 text-sm"
                                            >
                                                <Zap className="h-3 w-3 text-primary" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Agentic AI Solutions with Tabs */}
            <section id="agentic-solutions-section" className="py-16 md:py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Bot className="h-8 w-8 text-primary" />
                            <span className="text-primary font-semibold uppercase tracking-wide">
                                Autonomous Intelligence
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Agentic AI Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Experience the future with AI agents that operate independently, make
                            intelligent decisions, and continuously optimize your business
                            processes.
                        </p>
                    </div>

                    <Tabs defaultValue="agentic" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-muted/50 p-2">
                            <TabsTrigger value="agentic" className="text-sm">
                                Artificial Intelligence
                            </TabsTrigger>
                            <TabsTrigger value="financial" className="text-sm">
                                Financial AI Agents
                            </TabsTrigger>
                            <TabsTrigger value="business" className="text-sm">
                                Business Automation
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="agentic" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Personalized Agentic Intelligence</CardTitle>
                                    <CardDescription>
                                        Custom-built AI agents tailored specifically for your
                                        business needs and industry requirements
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Premium Agentic Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Personalized Tailored Agent for Business"
                                                description="Our flagship offering: completely custom AI agents designed specifically for your unique business processes, industry requirements, and organizational workflows. Each agent is built from the ground up to understand your specific context."
                                                imageSrc={getDynamicImage(
                                                    "AI Services Page",
                                                    "Block 2",
                                                    "Image 1",
                                                )}
                                                imageAlt="Custom Business Agent"
                                                icon={Crown}
                                                tags={[
                                                    "Fully Custom",
                                                    "Industry-Specific",
                                                    "Premium",
                                                ]}
                                            />

                                            <SpecificSolutionCard
                                                title="Business Intelligence Agent"
                                                description="Self-service analytics AI that automatically discovers insights, generates reports, and creates actionable recommendations from complex data patterns specific to your business model."
                                                imageSrc={getDynamicImage(
                                                    "AI Services Page",
                                                    "Block 2",
                                                    "Image 2",
                                                )}
                                                imageAlt="Business Intelligence Agent"
                                                icon={BarChart3}
                                                tags={["Self-service", "Automated", "Insights"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Multi-Agent Orchestration System"
                                                description="Coordinate multiple specialized AI agents working in harmony to solve complex, multi-faceted business challenges. Our orchestration platform manages agent collaboration, task delegation, and results integration seamlessly."
                                                imageSrc={getDynamicImage(
                                                    "AI Services Page",
                                                    "Block 2",
                                                    "Image 3",
                                                )}
                                                imageAlt="Multi-Agent System"
                                                icon={Workflow}
                                                tags={["Multi-Agent", "Orchestration", "Scalable"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Adaptive Learning Agent"
                                                description="Intelligent agents that continuously evolve and improve their performance based on your business patterns, user interactions, and changing operational requirements. They become smarter and more effective over time."
                                                imageSrc={getDynamicImage(
                                                    "AI Services Page",
                                                    "Block 2",
                                                    "Image 4",
                                                )}
                                                imageAlt="Adaptive Learning Agent"
                                                icon={Brain}
                                                tags={["Self-Learning", "Adaptive", "Evolution"]}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="financial" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Financial AI Agents</CardTitle>
                                    <CardDescription>
                                        Specialized AI agents for financial services, trading, and
                                        risk management
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Financial Intelligence Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Autonomous Financial Advisor"
                                                description="AI agent that continuously monitors market conditions, analyzes portfolio performance, and executes trading decisions based on predefined risk parameters and client goals."
                                                imageSrc={getDynamicImage(
                                                    "AI Services Page",
                                                    "Block 3",
                                                    "Image 1",
                                                )}
                                                imageAlt="Autonomous Financial Advisor"
                                                icon={TrendingUp}
                                                tags={["Autonomous", "Real-time", "Risk-aware"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Risk Assessment & Compliance Agent"
                                                description="Intelligent risk monitoring system that continuously analyzes financial exposures, regulatory compliance requirements, and market volatilities. Automatically generates compliance reports and provides real-time risk alerts with mitigation recommendations."
                                                imageSrc={getDynamicImage(
                                                    "AI Services Page",
                                                    "Block 3",
                                                    "Image 2",
                                                )}
                                                imageAlt="Risk Assessment Agent"
                                                icon={Shield}
                                                tags={[
                                                    "Risk Management",
                                                    "Compliance",
                                                    "Regulatory",
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="business" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Business Automation Agents</CardTitle>
                                    <CardDescription>
                                        AI agents focused on customer success, operations, and
                                        business process automation
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Business Process Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Customer Success AI Agent"
                                                description="Autonomous customer relationship management that predicts churn, identifies upsell opportunities, and orchestrates personalized engagement campaigns."
                                                imageSrc={getDynamicImage(
                                                    "AI Services Page",
                                                    "Block 4",
                                                    "Image 1",
                                                )}
                                                imageAlt="Customer Success Agent"
                                                icon={Users}
                                                tags={["Predictive", "Personalized", "Automated"]}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Industry Applications */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Industry Applications
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our AI solutions are tailored for specific industry challenges,
                            delivering measurable value across diverse business sectors.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <Database className="h-6 w-6 text-primary" />
                                    <CardTitle>Financial Services</CardTitle>
                                </div>
                                <CardDescription>
                                    AI-powered risk management, fraud detection, and algorithmic
                                    trading
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Credit risk modeling & scoring</li>
                                    <li>• Real-time fraud detection</li>
                                    <li>• Automated compliance monitoring</li>
                                    <li>• Portfolio optimization</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <Target className="h-6 w-6 text-primary" />
                                    <CardTitle>Healthcare & Life Sciences</CardTitle>
                                </div>
                                <CardDescription>
                                    Intelligent systems for diagnostics, research, and patient care
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Medical image analysis</li>
                                    <li>• Drug discovery acceleration</li>
                                    <li>• Predictive patient outcomes</li>
                                    <li>• Clinical trial optimization</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <TrendingUp className="h-6 w-6 text-primary" />
                                    <CardTitle>Manufacturing & Operations</CardTitle>
                                </div>
                                <CardDescription>
                                    Smart automation for production optimization and quality control
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Predictive maintenance</li>
                                    <li>• Quality control automation</li>
                                    <li>• Supply chain optimization</li>
                                    <li>• Production planning AI</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg shadow-xl border-0 overflow-hidden">
                        <div className="p-12 text-center">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-white/10 rounded-full">
                                    <Sparkles className="h-12 w-12 text-white" />
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Ready to Embrace Agentic AI?
                            </h3>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Join forward-thinking organizations that are already leveraging
                                autonomous AI to drive unprecedented growth and efficiency.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    onClick={() => navigate("/contact")}
                                    className="bg-white text-primary hover:bg-white/90 shadow-lg"
                                >
                                    Schedule AI Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10 border-2"
                                    onClick={() => navigate("/use-cases")}
                                >
                                    View Case Studies <Brain className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
