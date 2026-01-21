import { ArrowRight, Server, CloudUpload, Network } from "lucide-react"
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

export default function CloudServicesPage() {
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
                                Cloud Services
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                                Migrate, manage, and optimize your cloud infrastructure across AWS,
                                Google Cloud, and Microsoft Azure.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border shadow-lg">
                            <DynamicMedia
                                src={getDynamicImage(
                                    "Cloud Services Page",
                                    "Block 1",
                                    "Image 1",
                                )}
                                alt="Cloud Services Infrastructure"
                                className="w-full h-full object-cover"
                            />
                        </div>
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
                                            <SpecificSolutionCard
                                                title="AWS Cloud Setup & Management"
                                                description="Complete AWS infrastructure design, deployment, and ongoing management. Leverage the full power of Amazon Web Services for your business."
                                                imageSrc={getDynamicImage(
                                                    "Cloud Services Page",
                                                    "Block 2",
                                                    "Image 1",
                                                )}
                                                imageAlt="AWS Cloud Setup"
                                                icon={Server}
                                                tags={["AWS", "Infrastructure", "Managed"]}
                                            />

                                            <SpecificSolutionCard
                                                title="MS Cloud Setup and Management"
                                                description="Complete Microsoft Azure infrastructure design, deployment, and ongoing management. Leverage the full power of Microsoft Azure cloud services for your business with seamless integration to Microsoft ecosystem."
                                                imageSrc={getDynamicImage(
                                                    "Cloud Services Page",
                                                    "Block 2",
                                                    "Image 2",
                                                )}
                                                imageAlt="MS Cloud Setup"
                                                icon={CloudUpload}
                                                tags={["Azure", "Microsoft", "Managed"]}
                                            />
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
                                            <SpecificSolutionCard
                                                title="Google Cloud Platform (GCP) Deployment"
                                                description="GCP infrastructure setup with best practices for scalability and security. Build on Google's powerful cloud platform."
                                                imageSrc={getDynamicImage(
                                                    "Cloud Services Page",
                                                    "Block 3",
                                                    "Image 1",
                                                )}
                                                imageAlt="Google Cloud Platform Deployment"
                                                icon={CloudUpload}
                                                tags={["GCP", "Scalable", "Secure"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Microsoft Azure Infrastructure"
                                                description="Azure cloud solutions with integration to Microsoft ecosystem. Seamless connectivity with your Microsoft tools."
                                                imageSrc={getDynamicImage(
                                                    "Cloud Services Page",
                                                    "Block 3",
                                                    "Image 2",
                                                )}
                                                imageAlt="Microsoft Azure Infrastructure"
                                                icon={Server}
                                                tags={["Azure", "Microsoft", "Integration"]}
                                            />
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
                                            <SpecificSolutionCard
                                                title="Multi-cloud Infrastructure Setup"
                                                description="Design and deploy infrastructure across multiple cloud providers. Maximize flexibility and minimize vendor lock-in."
                                                imageSrc={getDynamicImage(
                                                    "Cloud Services Page",
                                                    "Block 4",
                                                    "Image 1",
                                                )}
                                                imageAlt="Multi-cloud Infrastructure"
                                                icon={Network}
                                                tags={["Multi-cloud", "Flexible", "Resilient"]}
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
