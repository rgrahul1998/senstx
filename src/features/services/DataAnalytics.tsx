import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import { Card } from "@mui/material"
import { CardContent, CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { Button } from "../../components/common/Button"
import { useNavigate } from "react-router-dom"

export default function DataAnalyticsPage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col">

            <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">Data Analytics</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                            Transform raw data into actionable insights with advanced analytics, business intelligence, and data
                            engineering solutions.
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
                                        Build robust data pipelines and integrate disparate data sources for unified analytics
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Automated ETL Pipeline Development</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Design and implement automated ETL processes to extract, transform, and load data efficiently
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Real-time Data Integration</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Connect multiple data sources with real-time synchronization for up-to-date insights
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Financial Data Warehousing</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Centralized data warehouse solutions optimized for financial analysis and reporting
                                                </p>
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
                                        Create interactive dashboards and reports to visualize your data and drive decisions
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Custom BI Dashboards (Power BI, Tableau)</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Interactive dashboards tailored to your KPIs with drill-down capabilities
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Financial KPI Visualization</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Track and visualize key financial metrics with real-time performance indicators
                                                </p>
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
                                        Predictive analytics and customer insights to drive strategic business decisions
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Sales & Revenue Analytics</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Comprehensive sales analysis with revenue forecasting and trend identification
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Customer Behavior Analysis</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Deep insights into customer patterns, preferences, and lifetime value
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Customer Analytics Report</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Detailed customer segmentation and behavior reports for targeted marketing
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="mt-12 text-center">
                        <Card className="bg-primary text-primary-foreground border-primary" style={{ background: "#173c63" }}>
                            <CardContent className="pt-6">
                                <h3 className="text-2xl font-bold mb-3 text-balance text-white">Ready to Unlock Your Data's Potential?</h3>
                                <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl mx-auto text-balance">
                                    Let's discuss how data analytics can transform your business intelligence
                                </p>
                                <Button size="lg" variant="secondary" onClick={() => navigate("/contact")} >

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
