import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import {
    ArrowRight,
    BarChart3,
    Cloud,
    Cog,
    Database,
    Sparkles,
    Monitor,
    Brain,
    TrendingUp,
    Shield,
    Zap,
} from "lucide-react"
import Card from "../components/common/Card"

const Home = () => {
    const heroServices = [
        {
            badge: "Financial Services",
            title: "Transform Financial Operations",
            subtitle: "Through Advanced",
            highlight: "Risk Analytics",
            description:
                "Leverage advanced credit risk management, fraud detection, and operational risk solutions to transform your data into actionable business intelligence",
            icon: BarChart3,
            image: "/home/hero/financial-risk-analytics-dashboard-network.jpg",
        },
        {
            badge: "Enterprise Solution",
            title: "Streamline Business Operations",
            subtitle: "With Custom",
            highlight: "ERP & CRM Systems",
            description:
                "Implement tailored ERP, CRM, and accounting solutions that integrate seamlessly with your existing infrastructure and automate critical workflows",
            icon: Cog,
            image: "/home/hero/enterprise-software-dashboard-modern.jpg",
        },
        {
            badge: "AI & Automation",
            title: "Accelerate Innovation",
            subtitle: "Using",
            highlight: "AI-Powered Solutions",
            description:
                "Deploy intelligent document processing, predictive analytics, and automated workflows to reduce manual effort and drive operational excellence",
            icon: Sparkles,
            image: "/home/hero/ai-automation-neural-network-visualization.jpg",
        },
        {
            badge: "Data Analytics",
            title: "Transforming Industries",
            subtitle: "Through",
            highlight: "Data-Driven Insights",
            description:
                "Leverage advanced analytics and machine learning to transform your data into actionable business intelligence",
            icon: Database,
            image: "/home/hero/image.png",
        },
        {
            badge: "Cloud Services",
            title: "Scale Your Infrastructure",
            subtitle: "With",
            highlight: "Multi-Cloud Excellence",
            description:
                "Migrate and manage your applications across AWS, Azure, and GCP with optimized performance, security, and cost efficiency",
            icon: Cloud,
            image: "/home/hero/cloud-infrastructure-architecture.png",
        },
        {
            badge: "Digital Solutions",
            title: "Build Modern Experiences",
            subtitle: "Through",
            highlight: "Custom Development",
            description:
                "Create progressive web apps, RESTful APIs, and enterprise portals using cutting-edge technologies like React, Angular, and Node.js",
            icon: Monitor,
            image: "/home/hero/modern-web-application-responsive-design.jpg",
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroServices.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [heroServices.length])

    const services = [
        {
            title: "Financial Services",
            description:
                "Advanced credit risk management, fraud detection, and AI-powered financial analytics to protect and optimize your operations.",
            icon: BarChart3,
            href: "/services/financial-services",
            image: "/home/hero/financial-risk-analytics-dashboard-network.jpg",
            features: [
                "Credit Risk Assessment",
                "Fraud Detection AI",
                "Financial Reporting Automation",
            ],
        },
        {
            title: "Enterprise Solution",
            description:
                "Streamline operations with comprehensive ERP solutions and enterprise system integration powered by intelligent automation.",
            icon: Cog,
            href: "/services/enterprise-solution",
            image: "/home/hero/enterprise-software-dashboard-modern.jpg",
            features: ["Custom ERP Development", "CRM Integration", "Business Process Automation"],
        },
        {
            title: "AI & Automation",
            description:
                "Harness the power of artificial intelligence and machine learning to automate processes and gain predictive insights.",
            icon: Sparkles,
            href: "/services/ai-automation",
            image: "/home/hero/ai-automation-neural-network-visualization.jpg",
            features: [
                "Intelligent Document Processing",
                "Predictive Risk Models",
                "Automated Workflows",
            ],
        },
        {
            title: "Data Analytics",
            description:
                "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
            icon: Database,
            href: "/services/data-analytics",
            image: "/home/hero/image.png",
            features: [
                "Real-time BI Dashboards",
                "ETL Pipeline Development",
                "Predictive Analytics",
            ],
        },
        {
            title: "Cloud Services",
            description:
                "Migrate and manage your infrastructure across AWS, Azure, and GCP with optimized performance and security.",
            icon: Cloud,
            href: "/services/cloud-services",
            image: "/home/hero/cloud-infrastructure-architecture.png",
            features: ["Multi-Cloud Migration", "Infrastructure Management", "Cost Optimization"],
        },
        {
            title: "Digital Solutions",
            description:
                "Build modern, responsive web applications and APIs using cutting-edge technologies and best practices.",
            icon: Monitor,
            href: "/services/digital-solutions",
            image: "/home/hero/modern-web-application-responsive-design.jpg",
            features: ["Progressive Web Apps", "RESTful API Development", "Enterprise Portals"],
        },
    ]

    return (
        <div className="min-h-screen flex flex-col">
            <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h1 className="text-[46px] sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[46px] font-bold text-white leading-tight">
                                {heroServices[currentSlide].title}
                                <br />
                                <span className="text-slate-400">
                                    {heroServices[currentSlide].subtitle}
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    {heroServices[currentSlide].highlight}
                                </span>
                            </h1>

                            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                                {heroServices[currentSlide].description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button
                                    component={Link}
                                    to="/services"
                                    variant="contained"
                                    size="large"
                                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                                    endIcon={<ArrowRight className="ml-2 h-4 w-4" />}
                                >
                                    Explore AI Solutions
                                </Button>
                                <Button
                                    component={Link}
                                    to="/contact"
                                    variant="outlined"
                                    size="large"
                                    className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
                                >
                                    Schedule Consultation
                                </Button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
                                <img
                                    src={heroServices[currentSlide].image}
                                    alt={heroServices[currentSlide].title}
                                    className="w-full h-full object-contain bg-slate-800"
                                    onError={(e) => {
                                        ;(e.target as HTMLImageElement).src =
                                            "https://placehold.co/600x400?text=Placeholder"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive technology solutions spanning every stage of your digital
                            transformation journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => {
                            const Icon = service.icon
                            return (
                                <Card
                                    key={service.title}
                                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group 
            border-2 border-[#fbf9fa] hover:border-zinc-300 flex flex-col h-full"
                                >
                                    {/* Hero Image */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                ;(e.target as HTMLImageElement).src =
                                                    "https://placehold.co/600x400?text=Placeholder"
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <div className="h-10 w-10 rounded-lg bg-[#173c63] backdrop-blur-sm flex items-center justify-center shadow-sm">
                                                <Icon className="h-5 w-5 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                        <p className="text-gray-600 mb-4 flex-grow">
                                            {service.description}
                                        </p>

                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="text-sm text-gray-500 flex items-start"
                                                >
                                                    <span className="mr-2 text-[#173c63]">✓</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            component={Link}
                                            to={service.href}
                                            className="p-0 h-auto text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform self-start"
                                            style={{ color: "#173c63" }}
                                            endIcon={<ArrowRight className="ml-1 h-3 w-3" />}
                                        >
                                            Learn More
                                        </Button>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* AI-Powered Innovation */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
                            <Brain className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm font-medium text-cyan-400">
                                Powered by Artificial Intelligence
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            AI-Powered Innovation <br />
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Transforming Business Operations
                            </span>
                        </h2>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Leverage cutting-edge artificial intelligence and machine learning to
                            revolutionize your financial services, data analytics, and enterprise
                            operations with intelligent automation and predictive insights.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* Financial AI */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                            <div
                                className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full rounded-2xl "
                                style={{ background: "#1e2952" }}
                            >
                                <div className="p-6">
                                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                                        <BarChart3 className="h-7 w-7 text-white" />
                                    </div>

                                    <h3 className="text-white text-xl font-bold mb-2">
                                        AI in Financial Services
                                    </h3>

                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        Machine learning models analyze credit risk patterns, detect
                                        fraudulent transactions in real-time, and predict loan
                                        defaults with unprecedented accuracy.
                                    </p>

                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-slate-300">
                                            <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Zap className="h-3 w-3 text-cyan-400" />
                                            </div>
                                            <span className="text-sm">
                                                Automated credit scoring reducing processing time by
                                                90%
                                            </span>
                                        </li>

                                        <li className="flex items-start gap-3 text-slate-300">
                                            <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Shield className="h-3 w-3 text-cyan-400" />
                                            </div>
                                            <span className="text-sm">
                                                Real-time fraud detection preventing millions in
                                                losses
                                            </span>
                                        </li>

                                        <li className="flex items-start gap-3 text-slate-300">
                                            <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <TrendingUp className="h-3 w-3 text-cyan-400" />
                                            </div>
                                            <span className="text-sm">
                                                Predictive analytics for portfolio risk management
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Data Analytics AI */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                            <div
                                className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full rounded-xl"
                                style={{ background: "#1e2952" }}
                            >
                                <div className="p-6">
                                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                                        <Database className="h-7 w-7 text-white" />
                                    </div>

                                    <h3 className="text-white text-xl font-bold mb-2">
                                        AI in Data Analytics
                                    </h3>

                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        Advanced neural networks process massive datasets to uncover
                                        hidden patterns, generate predictive insights, and automate
                                        complex analytical workflows.
                                    </p>

                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-slate-300">
                                            <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Brain className="h-3 w-3 text-blue-400" />
                                            </div>
                                            <span className="text-sm">
                                                Deep learning for customer behavior prediction and
                                                segmentation
                                            </span>
                                        </li>

                                        <li className="flex items-start gap-3 text-slate-300">
                                            <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Zap className="h-3 w-3 text-blue-400" />
                                            </div>
                                            <span className="text-sm">
                                                Automated ETL pipelines with intelligent data
                                                quality checks
                                            </span>
                                        </li>

                                        <li className="flex items-start gap-3 text-slate-300">
                                            <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <TrendingUp className="h-3 w-3 text-blue-400" />
                                            </div>
                                            <span className="text-sm">
                                                Natural language queries for business intelligence
                                                dashboards
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Enterprise AI */}
                        <div className="group relative md:col-span-2 lg:col-span-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                            <div
                                className="relative bg-slate-800/50  backdrop-blur-sm border border-slate-700 hover:border-purple-500 transition-all duration-300 h-full rounded-xl "
                                style={{ background: "#1e2952" }}
                            >
                                <div className="p-6">
                                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                                        <Sparkles className="h-7 w-7 text-white" />
                                    </div>

                                    <h3 className="text-white text-xl font-bold mb-2">
                                        AI in Enterprise Operations
                                    </h3>

                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        Intelligent automation streamlines document processing,
                                        optimizes workflows, and provides real-time decision support
                                        across all business operations.
                                    </p>

                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-slate-300">
                                            <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Brain className="h-3 w-3 text-purple-400" />
                                            </div>
                                            <span className="text-sm">
                                                OCR and NLP for automated invoice and document
                                                processing
                                            </span>
                                        </li>

                                        <li className="flex items-start gap-3 text-slate-300">
                                            <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Cog className="h-3 w-3 text-purple-400" />
                                            </div>
                                            <span className="text-sm">
                                                Smart workflow automation reducing manual tasks by
                                                70%
                                            </span>
                                        </li>

                                        <li className="flex items-start gap-3 text-slate-300">
                                            <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <TrendingUp className="h-3 w-3 text-purple-400" />
                                            </div>
                                            <span className="text-sm">
                                                AI-powered chatbots for customer service and support
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Impact Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-700">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                                90%
                            </div>
                            <p className="text-slate-300 text-sm">
                                Faster Processing with AI Automation
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                                $2M+
                            </div>
                            <p className="text-slate-300 text-sm">Fraud Prevented with ML Models</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                                95%
                            </div>
                            <p className="text-slate-300 text-sm">Accuracy in Risk Prediction</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-2">
                                70%
                            </div>
                            <p className="text-slate-300 text-sm">Reduction in Manual Tasks</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Why Choose Senstx?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Partner with experts who understand your business challenges and deliver
                            solutions that create lasting value
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#e0e5eb] mb-4">
                                <span className="text-2xl font-bold text-[#173c63]">01</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Proven Expertise
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Decades of combined experience delivering enterprise-grade solutions
                                across industries
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#e0e5eb] mb-4">
                                <span className="text-2xl font-bold text-[#173c63]">02</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Tailored Solutions
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Custom-built software designed specifically for your unique business
                                requirements
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#e0e5eb] mb-4">
                                <span className="text-2xl font-bold text-[#173c63]">03</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Ongoing Support
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Continuous optimization and support to ensure your solutions deliver
                                maximum ROI
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-[#173c63] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-lg mb-8 text-white/90 leading-relaxed">
                            Let's discuss how our expert consulting services can help you achieve
                            your digital transformation goals
                        </p>
                        <Button
                            component={Link}
                            to="/contact"
                            variant="contained"
                            size="large"
                            className=" text-blue-600 hover:bg-gray-100"
                            style={{ background: "#e0e5eb", color: "#173c63" }}
                        >
                            Get Started Today
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
