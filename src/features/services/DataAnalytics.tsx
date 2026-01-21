import { ArrowRight, Database, Zap, BarChart3, TrendingUp, Users, Receipt, FileCheck } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import { Card } from "@mui/material"
import { CardContent, CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { Button } from "../../components/common/Button"
import { useNavigate } from "react-router-dom"
import SpecificSolutionCard from "../../components/services/SpecificSolutionCard"
import DynamicMedia from "../../components/common/DynamicMedia"
import { useSettings } from "../../context/SettingsContext"
import { useCallback } from "react"
import type { SettingsMedia } from "../../api/settings"

export default function DataAnalyticsPage() {
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
    return (
        <div className="min-h-screen flex flex-col">
            <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="max-w-xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
                                AI & Automation
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                                Leverage artificial intelligence and automation to streamline
                                operations, reduce costs, and improve accuracy across your business.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border shadow-lg">
                            <DynamicMedia
                                src={getDynamicImage(
                                    "Data Analytics Page",
                                    "Block 1",
                                    "Image 1",
                                )}
                                alt="Data Analytics Dashboard"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="engineering" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-muted/50 p-2">
                            <TabsTrigger value="engineering" className="text-sm">
                                AI & Data Engineering
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
                                    <CardTitle>AI & Data Engineering</CardTitle>
                                    <CardDescription>
                                        Build robust data pipelines and integrate disparate data
                                        sources for unified analytics powered by AI
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Automated ETL Pipeline Development"
                                                description="Design and implement automated ETL processes to extract, transform, and load data efficiently. Build scalable pipelines that handle large volumes of data with error handling, monitoring, and automated scheduling."
                                                imageSrc={getDynamicImage(
                                                    "Data Analytics Page",
                                                    "Block 2",
                                                    "Image 1",
                                                )}
                                                imageAlt="Automated ETL Pipeline"
                                                icon={Database}
                                                tags={["Automated", "Scalable", "Monitoring"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Real-time Data Integration"
                                                description="Connect multiple data sources with real-time synchronization for up-to-date insights. Stream processing capabilities ensure data is always current and available for immediate analysis."
                                                imageSrc={getDynamicImage(
                                                    "Data Analytics Page",
                                                    "Block 2",
                                                    "Image 2",
                                                )}
                                                imageAlt="Real-time Data Integration"
                                                icon={Zap}
                                                tags={["Real-time", "Streaming", "Multi-source"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Automated Invoice & Receipt Processing"
                                                description="Extract and process invoice data automatically with high accuracy. OCR technology and AI extract key information from invoices and receipts for seamless accounting integration and data analysis workflows."
                                                imageSrc={getDynamicImage(
                                                    "Data Analytics Page",
                                                    "Block 2",
                                                    "Image 3",
                                                )}
                                                imageAlt="Invoice Processing"
                                                icon={Receipt}
                                                tags={["OCR", "Automated", "High Accuracy"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Loan Document Analysis & Extraction"
                                                description="Automated extraction of key information from loan applications and supporting documents. Streamline loan processing with intelligent document understanding and data extraction for comprehensive analytics."
                                                imageSrc={getDynamicImage(
                                                    "Data Analytics Page",
                                                    "Block 2",
                                                    "Image 4",
                                                )}
                                                imageAlt="Loan Document Analysis"
                                                icon={FileCheck}
                                                tags={["Intelligent", "Extraction", "Streamlined"]}
                                            />
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
                                            <SpecificSolutionCard
                                                title="Custom BI Dashboards (Power BI, Tableau)"
                                                description="Interactive dashboards tailored to your KPIs with drill-down capabilities. Create stunning visualizations that tell your data story and enable data-driven decision making across your organization."
                                                imageSrc={getDynamicImage(
                                                    "Data Analytics Page",
                                                    "Block 3",
                                                    "Image 1",
                                                )}
                                                imageAlt="Custom BI Dashboards"
                                                icon={BarChart3}
                                                tags={["Interactive", "Custom KPIs", "Drill-down"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Financial KPI Visualization"
                                                description="Track and visualize key financial metrics with real-time performance indicators. Monitor revenue, expenses, profitability, and other critical financial metrics at a glance."
                                                imageSrc={getDynamicImage(
                                                    "Data Analytics Page",
                                                    "Block 3",
                                                    "Image 2",
                                                )}
                                                imageAlt="Financial KPI Visualization"
                                                icon={TrendingUp}
                                                tags={[
                                                    "Real-time",
                                                    "Financial Metrics",
                                                    "Performance",
                                                ]}
                                            />
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
                                            <SpecificSolutionCard
                                                title="Sales & Revenue Analytics"
                                                description="Comprehensive sales analysis with revenue forecasting and trend identification. Predictive models help anticipate future sales patterns and optimize revenue strategies."
                                                imageSrc={getDynamicImage(
                                                    "Data Analytics Page",
                                                    "Block 4",
                                                    "Image 1",
                                                )}
                                                imageAlt="Sales & Revenue Analytics"
                                                icon={TrendingUp}
                                                tags={[
                                                    "Forecasting",
                                                    "Trend Analysis",
                                                    "Predictive",
                                                ]}
                                            />

                                            <SpecificSolutionCard
                                                title="Customer Behavior Analysis"
                                                description="Deep insights into customer patterns, preferences, and lifetime value. Understand what drives customer decisions and optimize engagement strategies."
                                                imageSrc={getDynamicImage(
                                                    "Data Analytics Page",
                                                    "Block 4",
                                                    "Image 2",
                                                )}
                                                imageAlt="Customer Behavior Analysis"
                                                icon={Users}
                                                tags={[
                                                    "Behavioral Insights",
                                                    "LTV Analysis",
                                                    "Patterns",
                                                ]}
                                            />

                                            <SpecificSolutionCard
                                                title="Customer Analytics Report"
                                                description="Detailed customer segmentation and behavior reports for targeted marketing. Actionable insights to personalize campaigns and improve customer retention."
                                                imageSrc={getDynamicImage(
                                                    "Data Analytics Page",
                                                    "Block 4",
                                                    "Image 3",
                                                )}
                                                imageAlt="Customer Analytics Report"
                                                icon={BarChart3}
                                                tags={[
                                                    "Segmentation",
                                                    "Targeted Marketing",
                                                    "Reports",
                                                ]}
                                            />
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
                                    Ready to Automate Your Operations?
                                </h3>
                                <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl mx-auto text-balance">
                                    Let's discuss how AI and automation can transform your business
                                    processes
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
