// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import { Button } from "../../components/common/Button"
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { useNavigate } from "react-router-dom";

export default function EnterpriseSolutionPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col">
            <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">Enterprise Solution</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                            Custom enterprise software solutions including ERP, CRM, and accounting systems tailored to your business
                            needs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="erp" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto gap-2 bg-muted/50 p-2">
                            <TabsTrigger value="erp" className="text-sm">
                                ERP Solution
                            </TabsTrigger>
                            <TabsTrigger value="crm" className="text-sm">
                                CRM Solution
                            </TabsTrigger>
                            <TabsTrigger value="accounting" className="text-sm">
                                Accounting Software
                            </TabsTrigger>
                            <TabsTrigger value="ms-business" className="text-sm">
                                MS Business Solution
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="erp" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>ERP Solution</CardTitle>
                                    <CardDescription>
                                        Comprehensive enterprise resource planning systems to streamline your business operations
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Custom ERP Development & Implementation</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Tailored ERP systems designed to match your unique business processes and workflows
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Dynamics 365 Integration</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Seamless Microsoft Dynamics 365 implementation and customization for enterprise needs
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">ERP Module Customization</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Custom modules to extend your ERP capabilities and adapt to changing business requirements
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Multi-system Workflow Automation</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Automate complex workflows across multiple systems for improved efficiency
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="crm" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>CRM Solution</CardTitle>
                                    <CardDescription>
                                        Customer relationship management systems to enhance customer engagement and sales
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Salesforce Integration</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Complete Salesforce setup, customization, and integration with your existing systems
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">HubSpot Integration</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    HubSpot CRM implementation with marketing automation and sales pipeline management
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Zoho CRM Integration</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Affordable and powerful Zoho CRM solutions for growing businesses
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="accounting" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Accounting Software Solution & Management</CardTitle>
                                    <CardDescription>
                                        Integrated accounting platforms to streamline financial management and bookkeeping
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Xero Integration</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Cloud-based accounting with Xero for real-time financial visibility
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">QuickBooks Integration</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    QuickBooks setup and customization for small to medium businesses
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">NetSuite Integration</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Enterprise-grade NetSuite ERP and financial management solutions
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Automated Invoice Processing</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Streamline invoice processing with automated data extraction and approval workflows
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Real-time Data Synchronization</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Keep all your financial systems in sync with real-time data integration
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="ms-business" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>MS Business Solution</CardTitle>
                                    <CardDescription>
                                        Microsoft Business Central and Dynamics solutions for comprehensive business management
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Microsoft Business Central</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Complete business management solution connecting sales, service, finance, and operations
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="mt-12 text-center ">
                        <Card className="bg-primary text-primary-foreground border-primary " style={{ background: "#173c63" }}>
                            <CardContent className="pt-6">
                                <h3 className="text-2xl font-bold mb-3 text-balance text-white">Ready to Modernize Your Enterprise Systems?</h3>
                                <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl mx-auto text-balance">
                                    Let's discuss how our enterprise solutions can transform your business operations
                                </p>
                                <Button size="lg" variant="secondary" onClick={() => navigate("/contact")}>

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
