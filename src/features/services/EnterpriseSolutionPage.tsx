// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
import {
    ArrowRight,
    Settings,
    Layers,
    Workflow,
    Users,
    Building2,
    DollarSign,
    Calculator,
    FileSpreadsheet,
    RefreshCw, // Changed from Sync to RefreshCw
    Cloud,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import { Button } from "../../components/common/Button"
import Card, {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/common/Card"
import { useNavigate } from "react-router-dom"
import SpecificSolutionCard from "../../components/services/SpecificSolutionCard"
import { useSettings } from "../../context/SettingsContext"
import { useCallback } from "react"
import type { SettingsMedia } from "../../api/settings"

export default function EnterpriseSolutionPage() {
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
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
                            Enterprise Solution
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                            Custom enterprise software solutions including ERP, CRM, and accounting
                            systems tailored to your business needs.
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
                                        Comprehensive enterprise resource planning systems to
                                        streamline your business operations
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Custom ERP Development & Implementation"
                                                description="Tailored ERP systems designed to match your unique business processes and workflows. Build comprehensive solutions that integrate all aspects of your business operations."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 1",
                                                    "Image 1",
                                                )}
                                                imageAlt="Custom ERP Development"
                                                icon={Settings}
                                                tags={["Custom Built", "Tailored", "Integrated"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Dynamics 365 Integration"
                                                description="Seamless Microsoft Dynamics 365 implementation and customization for enterprise needs. Leverage the power of Microsoft's cloud-based ERP platform."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 1",
                                                    "Image 2",
                                                )}
                                                imageAlt="Dynamics 365 Integration"
                                                icon={Cloud}
                                                tags={["Microsoft", "Cloud-based", "Enterprise"]}
                                            />

                                            <SpecificSolutionCard
                                                title="ERP Module Customization"
                                                description="Custom modules to extend your ERP capabilities and adapt to changing business requirements. Add new functionality without disrupting existing operations."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 1",
                                                    "Image 3",
                                                )}
                                                imageAlt="ERP Module Customization"
                                                icon={Layers}
                                                tags={["Modular", "Extensible", "Flexible"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Multi-system Workflow Automation"
                                                description="Automate complex workflows across multiple systems for improved efficiency. Streamline processes and reduce manual intervention."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 1",
                                                    "Image 4",
                                                )}
                                                imageAlt="Workflow Automation"
                                                icon={Workflow}
                                                tags={["Automated", "Multi-system", "Efficient"]}
                                            />
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
                                        Customer relationship management systems to enhance customer
                                        engagement and sales
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Salesforce Integration"
                                                description="Complete Salesforce setup, customization, and integration with your existing systems. Maximize your CRM investment with tailored solutions."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 2",
                                                    "Image 1",
                                                )}
                                                imageAlt="Salesforce Integration"
                                                icon={Building2}
                                                tags={[
                                                    "Salesforce",
                                                    "Customization",
                                                    "Integration",
                                                ]}
                                            />

                                            <SpecificSolutionCard
                                                title="HubSpot Integration"
                                                description="HubSpot CRM implementation with marketing automation and sales pipeline management. Streamline your customer engagement."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 2",
                                                    "Image 2",
                                                )}
                                                imageAlt="HubSpot Integration"
                                                icon={Users}
                                                tags={["HubSpot", "Marketing", "Sales Pipeline"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Zoho CRM Integration"
                                                description="Affordable and powerful Zoho CRM solutions for growing businesses. Scale your customer relationships efficiently."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 2",
                                                    "Image 3",
                                                )}
                                                imageAlt="Zoho CRM Integration"
                                                icon={Building2}
                                                tags={["Zoho", "Affordable", "Scalable"]}
                                            />
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
                                        Integrated accounting platforms to streamline financial
                                        management and bookkeeping
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Xero Integration"
                                                description="Cloud-based accounting with Xero for real-time financial visibility. Manage your finances from anywhere with confidence."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 3",
                                                    "Image 1",
                                                )}
                                                imageAlt="Xero Integration"
                                                icon={DollarSign}
                                                tags={["Cloud-based", "Real-time", "Xero"]}
                                            />

                                            <SpecificSolutionCard
                                                title="QuickBooks Integration"
                                                description="QuickBooks setup and customization for small to medium businesses. Simplify your accounting processes."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 3",
                                                    "Image 2",
                                                )}
                                                imageAlt="QuickBooks Integration"
                                                icon={Calculator}
                                                tags={["QuickBooks", "SMB", "Customizable"]}
                                            />

                                            <SpecificSolutionCard
                                                title="NetSuite Integration"
                                                description="Enterprise-grade NetSuite ERP and financial management solutions. Comprehensive platform for large organizations."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 3",
                                                    "Image 3",
                                                )}
                                                imageAlt="NetSuite Integration"
                                                icon={DollarSign}
                                                tags={["NetSuite", "Enterprise", "ERP"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Automated Invoice Processing"
                                                description="Streamline invoice processing with automated data extraction and approval workflows. Reduce manual work and errors."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 3",
                                                    "Image 4",
                                                )}
                                                imageAlt="Automated Invoice Processing"
                                                icon={FileSpreadsheet}
                                                tags={["Automated", "Workflow", "Efficient"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Real-time Data Synchronization"
                                                description="Keep all your financial systems in sync with real-time data integration. Ensure data consistency across platforms."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 3",
                                                    "Image 5",
                                                )}
                                                imageAlt="Real-time Data Synchronization"
                                                icon={RefreshCw}
                                                tags={["Real-time", "Sync", "Integration"]}
                                            />
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
                                        Microsoft Business Central and Dynamics solutions for
                                        comprehensive business management
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Microsoft Business Central"
                                                description="Complete business management solution connecting sales, service, finance, and operations. All-in-one Microsoft platform for growing businesses."
                                                imageSrc={getDynamicImage(
                                                    "Enterprise Solution Page",
                                                    "Block 4",
                                                    "Image 1",
                                                )}
                                                imageAlt="Microsoft Business Central"
                                                icon={DollarSign}
                                                tags={["Microsoft", "All-in-one", "Cloud"]}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="mt-12 text-center ">
                        <Card
                            className="bg-primary text-primary-foreground border-primary "
                            style={{ background: "#173c63" }}
                        >
                            <CardContent className="pt-6">
                                <h3 className="text-2xl font-bold mb-3 text-balance text-white">
                                    Ready to Modernize Your Enterprise Systems?
                                </h3>
                                <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl mx-auto text-balance">
                                    Let's discuss how our enterprise solutions can transform your
                                    business operations
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
