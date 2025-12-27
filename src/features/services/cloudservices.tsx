import { ArrowRight, Server, CloudUpload, Network } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import { Card } from "@mui/material"
import { CardContent, CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { Button } from "../../components/common/Button"
import { useNavigate } from "react-router-dom"

export default function CloudServicesPage() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col">
            <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
                            Cloud Services
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                            Migrate, manage, and optimize your cloud infrastructure across AWS,
                            Google Cloud, and Microsoft Azure.
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
                                        Comprehensive cloud infrastructure setup, management, and
                                        optimization services
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
                                                        src="/services/cloud-services/infrastructure/aws-cloud-setup.png"
                                                        alt="AWS Cloud Setup"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Server className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                AWS Cloud Setup & Management
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Complete AWS infrastructure design,
                                                                deployment, and ongoing management.
                                                                Leverage the full power of Amazon
                                                                Web Services for your business.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            AWS
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Infrastructure
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Managed
                                                        </span>
                                                    </div>
                                                </div>
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
                                        Seamless migration of your applications and data to the
                                        cloud with minimal disruption
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
                                                        src="/services/cloud-services/migration/gcp-deployment.png"
                                                        alt="Google Cloud Platform Deployment"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <CloudUpload className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Google Cloud Platform (GCP)
                                                                Deployment
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                GCP infrastructure setup with best
                                                                practices for scalability and
                                                                security. Build on Google's powerful
                                                                cloud platform.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            GCP
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Scalable
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Secure
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/cloud-services/migration/azure-infrastructure.png"
                                                        alt="Microsoft Azure Infrastructure"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Server className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Microsoft Azure Infrastructure
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Azure cloud solutions with
                                                                integration to Microsoft ecosystem.
                                                                Seamless connectivity with your
                                                                Microsoft tools.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Azure
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Microsoft
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Integration
                                                        </span>
                                                    </div>
                                                </div>
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
                                        Leverage multiple cloud providers for maximum flexibility,
                                        resilience, and cost optimization
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
                                                        src="/services/cloud-services/multi-cloud/multi-cloud-setup.png"
                                                        alt="Multi-cloud Infrastructure"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Network className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Multi-cloud Infrastructure Setup
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Design and deploy infrastructure
                                                                across multiple cloud providers.
                                                                Maximize flexibility and minimize
                                                                vendor lock-in.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Multi-cloud
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Flexible
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Resilient
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
                                    Ready to Move to the Cloud?
                                </h3>
                                <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl mx-auto text-balance">
                                    Let's discuss how cloud services can improve your infrastructure
                                    and reduce costs
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
