import {
    ArrowRight,
    Building2,
    TrendingUp,
    Shield,
    Zap,
    Users,
    BarChart3,
    Clock,
    CheckCircle,
    Target,
    DollarSign,
    Lightbulb,
    Brain,
    Settings,
} from "lucide-react"
import { Card } from "@mui/material"
import { CardContent, CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import { Button } from "../../components/common/Button"
import { useNavigate } from "react-router-dom"
import DynamicMedia from "../../components/common/DynamicMedia"
import { useSettings } from "../../context/SettingsContext"
import { useCallback } from "react"
import type { SettingsMedia } from "../../api/settings"

export default function UseCasesPage() {
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

    const financialUseCases = [
        {
            title: "Digital Bank Risk Management",
            company: "Leading Digital Bank",
            challenge: "Manual credit risk assessment causing delays and inconsistent decisions",
            solution: "AI-powered real-time credit scoring with automated decision engine",
            results: [
                "75% reduction in loan processing time",
                "40% improvement in risk prediction accuracy",
                "$2.5M annual savings in operational costs",
            ],
            icon: Shield,
            tags: ["Credit Risk", "Automation", "Digital Banking"],
        },
        {
            title: "Fintech Fraud Detection",
            company: "Payment Processing Company",
            challenge:
                "Rising fraud rates with traditional rule-based detection missing sophisticated attacks",
            solution: "Machine learning fraud detection with behavioral analytics",
            results: [
                "85% reduction in false positives",
                "92% fraud detection accuracy",
                "$15M prevented in fraud losses annually",
            ],
            icon: Target,
            tags: ["Fraud Detection", "ML", "Real-time"],
        },
        {
            title: "Investment Portfolio Analytics",
            company: "Wealth Management Firm",
            challenge:
                "Manual portfolio analysis limiting client insights and advisor productivity",
            solution: "Automated portfolio analytics with predictive market insights",
            results: [
                "60% faster portfolio analysis",
                "25% improvement in client satisfaction",
                "200% increase in advisor productivity",
            ],
            icon: TrendingUp,
            tags: ["Portfolio Management", "Analytics", "Automation"],
        },
    ]

    const enterpriseUseCases = [
        {
            title: "Manufacturing ERP Transformation",
            company: "Global Manufacturing Corporation",
            challenge: "Disconnected systems across multiple facilities causing inefficiencies",
            solution: "Custom ERPNext implementation with multi-site integration",
            results: [
                "50% reduction in inventory holding costs",
                "70% faster order processing",
                "Real-time visibility across 15 facilities",
            ],
            icon: Building2,
            tags: ["ERPNext", "Manufacturing", "Integration"],
        },
        {
            title: "Healthcare Operations Optimization",
            company: "Regional Healthcare Network",
            challenge: "Manual patient scheduling and resource allocation inefficiencies",
            solution: "AI-powered scheduling system with resource optimization",
            results: [
                "35% improvement in resource utilization",
                "90% reduction in scheduling conflicts",
                "$5M annual operational savings",
            ],
            icon: Users,
            tags: ["Healthcare", "Optimization", "AI Scheduling"],
        },
        {
            title: "Retail Chain Analytics Platform",
            company: "Multi-location Retail Chain",
            challenge: "Lack of real-time insights across store performance and inventory",
            solution: "Integrated analytics platform with predictive inventory management",
            results: [
                "40% reduction in stockouts",
                "25% improvement in profit margins",
                "Real-time insights across 200+ locations",
            ],
            icon: BarChart3,
            tags: ["Retail Analytics", "Inventory", "Multi-location"],
        },
    ]

    const aiUseCases = [
        {
            title: "Autonomous Customer Service Agent",
            company: "E-commerce Platform",
            challenge: "High customer service costs with inconsistent response quality",
            solution: "Personalized AI agent handling 80% of customer inquiries autonomously",
            results: [
                "70% reduction in support costs",
                "95% customer satisfaction rate",
                "24/7 multilingual support capability",
            ],
            icon: Brain,
            tags: ["AI Agent", "Customer Service", "Autonomous"],
        },
        {
            title: "Intelligent Document Processing",
            company: "Legal Services Firm",
            challenge: "Manual contract review taking weeks and prone to human error",
            solution: "AI-powered document analysis with risk assessment and clause extraction",
            results: [
                "90% faster contract review process",
                "99% accuracy in risk identification",
                "$3M annual labor cost savings",
            ],
            icon: Settings,
            tags: ["Document AI", "Legal Tech", "Risk Assessment"],
        },
        {
            title: "Predictive Maintenance System",
            company: "Industrial Equipment Manufacturer",
            challenge: "Unexpected equipment failures causing costly downtime",
            solution: "IoT sensors with AI predictive analytics for maintenance scheduling",
            results: [
                "80% reduction in unplanned downtime",
                "45% decrease in maintenance costs",
                "300% ROI within first year",
            ],
            icon: Zap,
            tags: ["Predictive Analytics", "IoT", "Maintenance"],
        },
    ]

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Real-World
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {" "}
                                Success Stories
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Discover how leading organizations are transforming their operations
                            with our AI-powered solutions, achieving measurable results and
                            competitive advantages.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <DollarSign className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">$50M+</h3>
                                <p className="text-muted-foreground">
                                    Total Cost Savings Generated
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">75%</h3>
                                <p className="text-muted-foreground">
                                    Average Process Time Reduction
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">95%</h3>
                                <p className="text-muted-foreground">Client Success Rate</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Use Cases Tabs */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="financial" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-muted/50 p-2">
                            <TabsTrigger value="financial" className="text-sm">
                                Financial Services
                            </TabsTrigger>
                            <TabsTrigger value="enterprise" className="text-sm">
                                Enterprise Solutions
                            </TabsTrigger>
                            <TabsTrigger value="ai" className="text-sm">
                                AI & Automation
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="financial" className="mt-8">
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold mb-4">
                                        Financial Services Success Stories
                                    </h2>
                                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                        How we've helped financial institutions reduce risk, prevent
                                        fraud, and optimize operations
                                    </p>
                                </div>

                                {financialUseCases.map((useCase, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-shadow">
                                        <CardContent className="p-8">
                                            <div className="grid lg:grid-cols-2 gap-8 items-start">
                                                <div className="space-y-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <useCase.icon className="h-6 w-6 text-primary" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">
                                                                {useCase.title}
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground font-medium">
                                                                {useCase.company}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-semibold text-primary mb-2">
                                                            Challenge
                                                        </h4>
                                                        <p className="text-muted-foreground">
                                                            {useCase.challenge}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-semibold text-primary mb-2">
                                                            Solution
                                                        </h4>
                                                        <p className="text-muted-foreground">
                                                            {useCase.solution}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                        {useCase.tags.map((tag, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="bg-muted/30 rounded-lg p-6">
                                                    <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                                                        <TrendingUp className="h-4 w-4" />
                                                        Results Achieved
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {useCase.results.map((result, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                                <span className="text-sm">
                                                                    {result}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="enterprise" className="mt-8">
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold mb-4">
                                        Enterprise Transformation Stories
                                    </h2>
                                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                        How we've modernized enterprise operations with integrated
                                        solutions and automation
                                    </p>
                                </div>

                                {enterpriseUseCases.map((useCase, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-shadow">
                                        <CardContent className="p-8">
                                            <div className="grid lg:grid-cols-2 gap-8 items-start">
                                                <div className="space-y-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <useCase.icon className="h-6 w-6 text-primary" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">
                                                                {useCase.title}
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground font-medium">
                                                                {useCase.company}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-semibold text-primary mb-2">
                                                            Challenge
                                                        </h4>
                                                        <p className="text-muted-foreground">
                                                            {useCase.challenge}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-semibold text-primary mb-2">
                                                            Solution
                                                        </h4>
                                                        <p className="text-muted-foreground">
                                                            {useCase.solution}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                        {useCase.tags.map((tag, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="bg-muted/30 rounded-lg p-6">
                                                    <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                                                        <TrendingUp className="h-4 w-4" />
                                                        Results Achieved
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {useCase.results.map((result, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                                <span className="text-sm">
                                                                    {result}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="ai" className="mt-8">
                            <div className="space-y-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold mb-4">
                                        AI & Automation Success Stories
                                    </h2>
                                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                        How our AI agents and automation solutions are transforming
                                        business operations
                                    </p>
                                </div>

                                {aiUseCases.map((useCase, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-shadow">
                                        <CardContent className="p-8">
                                            <div className="grid lg:grid-cols-2 gap-8 items-start">
                                                <div className="space-y-6">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <useCase.icon className="h-6 w-6 text-primary" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-2">
                                                                {useCase.title}
                                                            </h3>
                                                            <p className="text-sm text-muted-foreground font-medium">
                                                                {useCase.company}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-semibold text-primary mb-2">
                                                            Challenge
                                                        </h4>
                                                        <p className="text-muted-foreground">
                                                            {useCase.challenge}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-semibold text-primary mb-2">
                                                            Solution
                                                        </h4>
                                                        <p className="text-muted-foreground">
                                                            {useCase.solution}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                        {useCase.tags.map((tag, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="bg-muted/30 rounded-lg p-6">
                                                    <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                                                        <TrendingUp className="h-4 w-4" />
                                                        Results Achieved
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {useCase.results.map((result, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                                <span className="text-sm">
                                                                    {result}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg shadow-xl overflow-hidden">
                        <div className="p-12 text-center">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-white/10 rounded-full">
                                    <Lightbulb className="h-12 w-12 text-white" />
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Ready to Create Your Success Story?
                            </h3>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Join these industry leaders and discover how our solutions can
                                transform your business operations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    onClick={() => navigate("/contact")}
                                    className="bg-white text-primary hover:bg-white/90 shadow-lg"
                                >
                                    Start Your Transformation{" "}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => navigate("/services")}
                                    className="border-white text-white hover:bg-white/10 border-2"
                                >
                                    Explore Solutions <Target className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
