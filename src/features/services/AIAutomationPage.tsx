import { ArrowRight, Brain, Shield, BarChart3 } from "lucide-react"
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

export default function AIAutomationPage() {
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
                                    "AI Automation Page",
                                    "Block 1",
                                    "Image 1",
                                )}
                                alt="AI & Automation Dashboard"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="ai-risk" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-muted/50 p-2">
                            <TabsTrigger value="ai-risk" className="text-sm">
                                Financial AI & Risk Analytics
                            </TabsTrigger>
                            <TabsTrigger value="document" className="text-sm">
                                Intelligent Document Processing
                            </TabsTrigger>
                            <TabsTrigger value="fraud" className="text-sm">
                                Automated Fraud Detection
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="ai-risk" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Financial AI & Risk Analytics</CardTitle>
                                    <CardDescription>
                                        AI-powered predictive models for credit risk, fraud
                                        detection, and financial analysis
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Credit Risk Prediction Models"
                                                description="Machine learning models to predict credit defaults and assess borrower risk. Advanced algorithms analyze historical data and patterns to provide accurate risk predictions and early warning signals."
                                                imageSrc={getDynamicImage(
                                                    "AI Automation Page",
                                                    "Block 2",
                                                    "Image 1",
                                                )}
                                                imageAlt="Credit Risk Prediction"
                                                icon={Brain}
                                                tags={[
                                                    "ML-Powered",
                                                    "Predictive",
                                                    "Risk Assessment",
                                                ]}
                                            />

                                            <SpecificSolutionCard
                                                title="Risk Scoring & Monitoring Automation"
                                                description="Automated risk scoring systems with real-time monitoring and alerts. Continuous assessment of risk levels with instant notifications for threshold breaches and anomalies."
                                                imageSrc={getDynamicImage(
                                                    "AI Automation Page",
                                                    "Block 3",
                                                    "Image 1",
                                                )}
                                                imageAlt="Risk Scoring Automation"
                                                icon={Shield}
                                                tags={["Automated", "Real-time", "Alerts"]}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="document" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Intelligent Document Processing</CardTitle>
                                    <CardDescription>
                                        Automate document handling with AI-powered extraction,
                                        classification, and analysis
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            {/* Sections moved to Data Analytics page */}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="fraud" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Automated Fraud Detection & Monitoring</CardTitle>
                                    <CardDescription>
                                        Continuous monitoring and automated reporting to identify
                                        and prevent fraudulent activities
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Financial Report Generation Automation"
                                                description="Automatically generate comprehensive financial reports on schedule or on-demand. Streamline reporting workflows with intelligent automation that ensures accuracy and consistency."
                                                imageSrc={getDynamicImage(
                                                    "AI Automation Page",
                                                    "Block 4",
                                                    "Image 1",
                                                )}
                                                imageAlt="Financial Report Automation"
                                                icon={BarChart3}
                                                tags={["Automated", "Scheduled", "On-demand"]}
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
