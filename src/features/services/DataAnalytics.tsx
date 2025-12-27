import { ArrowRight, Database, Zap, Warehouse, BarChart3, TrendingUp, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import { Card } from "@mui/material"
import { CardContent, CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { Button } from "../../components/common/Button"
import { useNavigate } from "react-router-dom"

export default function DataAnalyticsPage() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen flex flex-col">
            <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
                            Data Analytics
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                            Transform raw data into actionable insights with advanced analytics,
                            business intelligence, and data engineering solutions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="engineering" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-muted/50 p-2">
                            <TabsTrigger value="engineering" className="text-sm">
                                Data Engineering & Integration
                            </TabsTrigger>
                            <TabsTrigger value="bi" className="text-sm">
                                Business Intelligence
                            </TabsTrigger>
                            <TabsTrigger value="advanced" className="text-sm">
                                Advanced Analytics & Insights
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="engineering" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Data Engineering & Integration</CardTitle>
                                    <CardDescription>
                                        Build robust data pipelines and integrate disparate data
                                        sources for unified analytics
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/data-analytics/data-engineering/automated-etl-pipeline.png"
                                                        alt="Automated ETL Pipeline"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Database className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Automated ETL Pipeline Development
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Design and implement automated ETL
                                                                processes to extract, transform, and
                                                                load data efficiently. Build
                                                                scalable pipelines that handle large
                                                                volumes of data with error handling,
                                                                monitoring, and automated
                                                                scheduling.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Automated
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Scalable
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Monitoring
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/data-analytics/data-engineering/realtime-data-integration.png"
                                                        alt="Real-time Data Integration"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Real-time Data Integration
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Connect multiple data sources with
                                                                real-time synchronization for
                                                                up-to-date insights. Stream
                                                                processing capabilities ensure data
                                                                is always current and available for
                                                                immediate analysis.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Real-time
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Streaming
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Multi-source
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/data-analytics/data-engineering/Financial Data Warehousing.jpg"
                                                        alt="Financial Data Warehousing"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Warehouse className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Financial Data Warehousing
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Centralized data warehouse solutions
                                                                optimized for financial analysis and
                                                                reporting. Enterprise-grade
                                                                architecture with data governance,
                                                                security, and compliance built-in.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Centralized
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Secure
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Optimized
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="bi" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Business Intelligence & Visualization</CardTitle>
                                    <CardDescription>
                                        Create interactive dashboards and reports to visualize your
                                        data and drive decisions
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/data-analytics/business-intelligence/Custom BI Dashboards .jpg"
                                                        alt="Custom BI Dashboards"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <BarChart3 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Custom BI Dashboards (Power BI,
                                                                Tableau)
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Interactive dashboards tailored to
                                                                your KPIs with drill-down
                                                                capabilities. Create stunning
                                                                visualizations that tell your data
                                                                story and enable data-driven
                                                                decision making across your
                                                                organization.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Interactive
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Custom KPIs
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Drill-down
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/data-analytics/business-intelligence/Financial KPI Visualization2.jpg"
                                                        alt="Financial KPI Visualization"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Financial KPI Visualization
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Track and visualize key financial
                                                                metrics with real-time performance
                                                                indicators. Monitor revenue,
                                                                expenses, profitability, and other
                                                                critical financial metrics at a
                                                                glance.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Real-time
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Financial Metrics
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Performance
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="advanced" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Advanced Analytics & Insights</CardTitle>
                                    <CardDescription>
                                        Predictive analytics and customer insights to drive
                                        strategic business decisions
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/data-analytics/advanced-analytics/Sales & Revenue Analytics.jpg"
                                                        alt="Sales & Revenue Analytics"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Sales & Revenue Analytics
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Comprehensive sales analysis with
                                                                revenue forecasting and trend
                                                                identification. Predictive models
                                                                help anticipate future sales
                                                                patterns and optimize revenue
                                                                strategies.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Forecasting
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Trend Analysis
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Predictive
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/data-analytics/advanced-analytics/Customer Behavior Analysis.jpg"
                                                        alt="Customer Behavior Analysis"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Customer Behavior Analysis
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Deep insights into customer
                                                                patterns, preferences, and lifetime
                                                                value. Understand what drives
                                                                customer decisions and optimize
                                                                engagement strategies.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Behavioral Insights
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            LTV Analysis
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Patterns
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/data-analytics/advanced-analytics/Customer Analytics Report.jpg"
                                                        alt="Customer Analytics Report"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <BarChart3 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Customer Analytics Report
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Detailed customer segmentation and
                                                                behavior reports for targeted
                                                                marketing. Actionable insights to
                                                                personalize campaigns and improve
                                                                customer retention.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Segmentation
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Targeted Marketing
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Reports
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="mt-12 text-center">
                        <Card
                            className="bg-primary text-primary-foreground border-primary"
                            style={{ background: "#173c63" }}
                        >
                            <CardContent className="pt-6">
                                <h3 className="text-2xl font-bold mb-3 text-balance text-white">
                                    Ready to Unlock Your Data's Potential?
                                </h3>
                                <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl mx-auto text-balance">
                                    Let's discuss how data analytics can transform your business
                                    intelligence
                                </p>
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    onClick={() => navigate("/contact")}
                                >
                                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
