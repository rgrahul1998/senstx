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
    Phone,
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

export default function EnterpriseSolutionPage() {
    const navigate = useNavigate()

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
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/erp/custom-erp-development.png"
                                                        alt="Custom ERP Development"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Settings className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Custom ERP Development &
                                                                Implementation
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Tailored ERP systems designed to
                                                                match your unique business processes
                                                                and workflows. Build comprehensive
                                                                solutions that integrate all aspects
                                                                of your business operations.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Custom Built
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Tailored
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Integrated
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/erp/dynamics-365-integration.png"
                                                        alt="Dynamics 365 Integration"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Cloud className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Dynamics 365 Integration
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Seamless Microsoft Dynamics 365
                                                                implementation and customization for
                                                                enterprise needs. Leverage the power
                                                                of Microsoft's cloud-based ERP
                                                                platform.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Microsoft
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Cloud-based
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Enterprise
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/erp/erp-module-customization.png"
                                                        alt="ERP Module Customization"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Layers className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                ERP Module Customization
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Custom modules to extend your ERP
                                                                capabilities and adapt to changing
                                                                business requirements. Add new
                                                                functionality without disrupting
                                                                existing operations.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Modular
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Extensible
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Flexible
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/erp/workflow-automation.png"
                                                        alt="Workflow Automation"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Workflow className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Multi-system Workflow Automation
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Automate complex workflows across
                                                                multiple systems for improved
                                                                efficiency. Streamline processes and
                                                                reduce manual intervention.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Automated
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Multi-system
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Efficient
                                                        </span>
                                                    </div>
                                                </div>
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
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/crm/salesforce-integration.png"
                                                        alt="Salesforce Integration"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Building2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Salesforce Integration
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Complete Salesforce setup,
                                                                customization, and integration with
                                                                your existing systems. Maximize your
                                                                CRM investment with tailored
                                                                solutions.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Salesforce
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Customization
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Integration
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/crm/hubspot-integration.png"
                                                        alt="HubSpot Integration"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                HubSpot Integration
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                HubSpot CRM implementation with
                                                                marketing automation and sales
                                                                pipeline management. Streamline your
                                                                customer engagement.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            HubSpot
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Marketing
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Sales Pipeline
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/crm/zoho-crm-integration.png"
                                                        alt="Zoho CRM Integration"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Zoho CRM Integration
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Affordable and powerful Zoho CRM
                                                                solutions for growing businesses.
                                                                Scale your customer relationships
                                                                efficiently.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Zoho
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Affordable
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Scalable
                                                        </span>
                                                    </div>
                                                </div>
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
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/accounting/xero-integration.png"
                                                        alt="Xero Integration"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Xero Integration
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Cloud-based accounting with Xero for
                                                                real-time financial visibility.
                                                                Manage your finances from anywhere
                                                                with confidence.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Cloud-based
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Real-time
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Xero
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/accounting/quickbooks-integration.png"
                                                        alt="QuickBooks Integration"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Calculator className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                QuickBooks Integration
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                QuickBooks setup and customization
                                                                for small to medium businesses.
                                                                Simplify your accounting processes.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            QuickBooks
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            SMB
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Customizable
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/accounting/netsuite-integration.png"
                                                        alt="NetSuite Integration"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Cloud className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                NetSuite Integration
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Enterprise-grade NetSuite ERP and
                                                                financial management solutions.
                                                                Comprehensive platform for large
                                                                organizations.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            NetSuite
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Enterprise
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            ERP
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/accounting/automated-invoice-processing.png"
                                                        alt="Automated Invoice Processing"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <FileSpreadsheet className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Automated Invoice Processing
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Streamline invoice processing with
                                                                automated data extraction and
                                                                approval workflows. Reduce manual
                                                                work and errors.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Automated
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Workflow
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Efficient
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/accounting/realtime-data-sync.png"
                                                        alt="Real-time Data Synchronization"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <RefreshCw className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Real-time Data Synchronization
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Keep all your financial systems in
                                                                sync with real-time data
                                                                integration. Ensure data consistency
                                                                across platforms.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Real-time
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Sync
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
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/services/enterprise-solutions/ms-business/business-central.png"
                                                        alt="Microsoft Business Central"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Cloud className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Microsoft Business Central
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Complete business management
                                                                solution connecting sales, service,
                                                                finance, and operations. All-in-one
                                                                Microsoft platform for growing
                                                                businesses.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Microsoft
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            All-in-one
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Cloud
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
