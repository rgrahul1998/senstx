import { ArrowRight, Shield, TrendingUp, FileText, AlertTriangle, BarChart, Lock, Link } from "lucide-react"
import { Card } from "@mui/material"
import { CardContent, CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import { Button } from "../../components/common/Button"
import { useNavigate } from "react-router-dom"

export default function FinancialServicesPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col">

            {/* Hero Section */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">Financial Services</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                            Comprehensive risk management, analytics, and financial reporting solutions to protect and optimize your
                            financial operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Tabs */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="credit-risk" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-muted/50 p-2">
                            <TabsTrigger value="credit-risk" className="text-sm">
                                Credit Risk Management
                            </TabsTrigger>
                            <TabsTrigger value="operational-risk" className="text-sm">
                                Operational Risk Management
                            </TabsTrigger>
                            <TabsTrigger value="analytics" className="text-sm">
                                Financial Analytics & Reporting
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="credit-risk" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Credit Risk Management (Business & Personal)</CardTitle>
                                    <CardDescription className="text-base leading-relaxed">
                                        Our advanced credit risk assessment platform combines machine learning algorithms with traditional
                                        financial analysis to provide comprehensive risk evaluation. Make informed lending decisions with
                                        real-time scoring models and predictive analytics that adapt to market conditions.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    {/* Overview with Image */}
                                    <div className="grid md:grid-cols-2 gap-6 items-center">
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                                <Shield className="h-5 w-5 text-primary" />
                                                Comprehensive Risk Assessment
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Our platform analyzes multiple data points including credit history, financial statements,
                                                market trends, and behavioral patterns to generate accurate risk scores. We employ sophisticated
                                                algorithms that continuously learn and improve from historical data, ensuring your risk models
                                                stay current and effective.
                                            </p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2 text-sm">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                                                    <span>Multi-factor credit analysis with 100+ data points</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-sm">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                                                    <span>Real-time risk scoring and decisioning</span>
                                                </li>
                                                <li className="flex items-start gap-2 text-sm">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                                                    <span>Automated credit limit recommendations</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border shadow-lg">
                                            <img
                                                src="/credit-risk-assessment-dashboard-with-charts.jpg"
                                                alt="Credit Risk Dashboard"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-semibold mb-4">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            {/* Business Credit Risk */}
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/business-credit-scoring-analytics.jpg"
                                                        alt="Business Credit Scoring"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">
                                                                Business Credit Risk Assessment & Scoring
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Comprehensive credit risk evaluation for businesses with real-time scoring models and
                                                                predictive analytics. Our system analyzes financial statements, payment history,
                                                                industry trends, and market conditions to provide accurate credit assessments. Features
                                                                include automated credit limit calculations, early warning systems for deteriorating
                                                                credit quality, and portfolio concentration analysis.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Real-time Scoring
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Predictive Analytics
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Portfolio Analysis
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Personal Credit Risk */}
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/personal-credit-evaluation-interface.jpg"
                                                        alt="Personal Credit Evaluation"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">Personal Credit Risk Evaluation</h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Individual creditworthiness assessment using advanced algorithms and multi-factor
                                                                analysis. Our platform evaluates credit history, income stability, debt-to-income
                                                                ratios, and behavioral patterns to generate comprehensive credit profiles. Includes
                                                                support for alternative data sources, thin-file applicants, and continuous monitoring
                                                                for credit limit adjustments.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Multi-factor Analysis
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Alternative Data
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Continuous Monitoring
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Loan Default Prediction */}
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/ai-loan-default-prediction-model.jpg"
                                                        alt="Loan Default Prediction"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">Loan Default Prediction Models</h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                AI-powered models to predict loan defaults and minimize financial risk exposure.
                                                                Utilizing machine learning and historical data, our system identifies early warning
                                                                signs of potential defaults. Features include risk segmentation, probability of default
                                                                calculations, loss given default estimates, and automated alert systems for high-risk
                                                                accounts requiring immediate attention.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            AI-Powered
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Early Warning
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Risk Segmentation
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Operational Risk Mitigation */}
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/operational-risk-management-dashboard.jpg"
                                                        alt="Operational Risk Mitigation"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">Operational Risk Mitigation</h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Proactive risk identification and mitigation strategies to protect your operations. Our
                                                                comprehensive framework monitors operational processes, identifies vulnerabilities, and
                                                                recommends corrective actions. Includes incident tracking, risk heat maps, control
                                                                effectiveness monitoring, and regulatory compliance checks to ensure your operations
                                                                remain secure and efficient.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Proactive Monitoring
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Risk Heat Maps
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Compliance
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="operational-risk" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Operational Risk Management</CardTitle>
                                    <CardDescription className="text-base leading-relaxed">
                                        Proactive risk monitoring and fraud prevention systems to safeguard your financial operations. Our
                                        integrated platform provides end-to-end visibility into operational risks across your organization,
                                        helping you identify, assess, and mitigate threats before they impact your business.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6 items-center">
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                                <BarChart className="h-5 w-5 text-primary" />
                                                Real-Time Risk Monitoring
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Monitor your entire loan portfolio with advanced analytics and visualization tools. Track
                                                performance metrics, identify trends, and receive automated alerts for accounts requiring
                                                attention. Our system provides comprehensive insights into portfolio composition, risk
                                                concentration, and performance trends.
                                            </p>
                                        </div>
                                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border shadow-lg">
                                            <img
                                                src="/operational-risk-monitoring-dashboard.jpg"
                                                alt="Risk Monitoring Dashboard"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-semibold mb-4">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/loan-portfolio-analytics-visualization.jpg"
                                                        alt="Loan Portfolio Analytics"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <BarChart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">Loan Portfolio Analytics</h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Deep insights into your loan portfolio performance with risk concentration analysis.
                                                                Track key metrics including delinquency rates, loss rates, and vintage analysis. Our
                                                                platform provides drill-down capabilities to analyze performance by segment, product
                                                                type, geography, and time period. Features include stress testing, scenario analysis,
                                                                and what-if modeling to assess portfolio resilience under different market conditions.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Performance Tracking
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Stress Testing
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Scenario Analysis
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="aspect-video relative bg-muted">
                                                    <img
                                                        src="/fraud-detection-system-alert-interface.jpg"
                                                        alt="Fraud Detection"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-5 space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="font-semibold text-base mb-1">Fraud Detection & Prevention</h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                Real-time fraud detection using machine learning to identify suspicious activities
                                                                instantly. Our system analyzes transaction patterns, user behavior, and network
                                                                relationships to detect anomalies. Features include identity verification, device
                                                                fingerprinting, transaction monitoring, and automated case management for investigation
                                                                workflows. Continuously updated fraud rules adapt to emerging threats.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Real-time Detection
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            ML-Powered
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                            Case Management
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="analytics" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Financial Analytics & Reporting</CardTitle>
                                    <CardDescription className="text-base leading-relaxed">
                                        Automated reporting and compliance solutions to streamline your financial operations. Transform
                                        complex financial data into actionable insights with our comprehensive reporting platform that
                                        ensures regulatory compliance while providing strategic business intelligence.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6 items-center">
                                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border shadow-lg order-2 md:order-1">
                                            <img
                                                src="/financial-reporting-dashboard.png"
                                                alt="Financial Reporting Dashboard"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="space-y-4 order-1 md:order-2">
                                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                                <FileText className="h-5 w-5 text-primary" />
                                                Intelligent Automation
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Eliminate manual reporting tasks with our intelligent automation platform. Generate financial
                                                statements, regulatory reports, and management dashboards automatically. Our system ensures data
                                                accuracy, maintains audit trails, and provides version control for all generated reports.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-semibold mb-4">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 gap-6">
                                            <div className="border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="aspect-video md:aspect-auto relative bg-muted">
                                                        <img
                                                            src="/automated-financial-reports-generation.jpg"
                                                            alt="Automated Financial Reporting"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="p-5 space-y-3 flex flex-col justify-center">
                                                        <div className="flex items-start gap-2">
                                                            <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                            <div>
                                                                <h4 className="font-semibold text-base mb-2">Automated Financial Reporting</h4>
                                                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                                                    Automated generation of financial statements, compliance reports, and regulatory
                                                                    filings. Our platform supports multiple reporting standards including GAAP, IFRS, and
                                                                    regulatory requirements. Features include scheduled report generation, multi-entity
                                                                    consolidation, intercompany eliminations, and customizable report templates. Built-in
                                                                    validation rules ensure data accuracy and compliance with reporting standards.
                                                                </p>
                                                                <ul className="space-y-2">
                                                                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                        <span>Automated P&L, Balance Sheet, and Cash Flow statements</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                        <span>Regulatory reporting (Basel III, FINRA, SEC filings)</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                        <span>Management dashboards with KPI tracking</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                        <span>Audit trail and version control for compliance</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2 pt-2">
                                                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                                Automated Generation
                                                            </span>
                                                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                                Multi-Standard
                                                            </span>
                                                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                                Compliance Ready
                                                            </span>
                                                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                                                Audit Trail
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    {/* CTA Section */}
                    <div className="mt-12 text-center">
                        <Card className="bg-primary text-primary-foreground border-primary" style={{ background: "#173c63" }}>
                            <CardContent className="pt-6">
                                <h3 className="text-2xl font-bold mb-3 text-balance text-white">Ready to Transform Your Financial Operations?</h3>
                                <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl mx-auto text-balance">
                                    Let's discuss how our financial services solutions can help protect and optimize your business
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
