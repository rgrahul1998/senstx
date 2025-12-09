import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import { Card } from "@mui/material"
import { CardContent, CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { Button } from "../../components/common/Button"
import { useNavigate } from "react-router-dom"

export default function CloudServicesPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col">
            <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">Cloud Services</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                            Migrate, manage, and optimize your cloud infrastructure across AWS, Google Cloud, and Microsoft Azure.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="infrastructure" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-muted/50 p-2">
                            <TabsTrigger value="infrastructure" className="text-sm">
                                Cloud Infrastructure Management
                            </TabsTrigger>
                            <TabsTrigger value="migration" className="text-sm">
                                Cloud Migration Services
                            </TabsTrigger>
                            <TabsTrigger value="multi-cloud" className="text-sm">
                                Multi-Cloud Solutions
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="infrastructure" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Cloud Infrastructure Management</CardTitle>
                                    <CardDescription>
                                        Comprehensive cloud infrastructure setup, management, and optimization services
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">AWS Cloud Setup & Management</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Complete AWS infrastructure design, deployment, and ongoing management
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="migration" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Cloud Migration Services</CardTitle>
                                    <CardDescription>
                                        Seamless migration of your applications and data to the cloud with minimal disruption
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Google Cloud Platform (GCP) Deployment</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    GCP infrastructure setup with best practices for scalability and security
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Microsoft Azure Infrastructure</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Azure cloud solutions with integration to Microsoft ecosystem
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="multi-cloud" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Multi-Cloud Solutions</CardTitle>
                                    <CardDescription>
                                        Leverage multiple cloud providers for maximum flexibility, resilience, and cost optimization
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Multi-cloud Infrastructure Setup</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Design and deploy infrastructure across multiple cloud providers
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
                                <h3 className="text-2xl font-bold mb-3 text-balance text-white">Ready to Move to the Cloud?</h3>
                                <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl mx-auto text-balance">
                                    Let's discuss how cloud services can improve your infrastructure and reduce costs
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
