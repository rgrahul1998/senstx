import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { Button } from "../../components/common/Button"
import { useNavigate } from "react-router-dom";

export default function DigitalSolutionsPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col">
            <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">Digital Solutions</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                            Modern web applications, mobile solutions, and APIs built with cutting-edge technology for exceptional
                            user experiences.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="web" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 bg-muted/50 p-2">
                            <TabsTrigger value="web" className="text-sm">
                                Custom Web Application Development
                            </TabsTrigger>
                            <TabsTrigger value="portal" className="text-sm">
                                Enterprise Portal Solutions
                            </TabsTrigger>
                            <TabsTrigger value="api" className="text-sm">
                                API Development & Integration
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="web" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Custom Web Application Development</CardTitle>
                                    <CardDescription>
                                        Build modern, scalable web applications with the latest technologies and frameworks
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Progressive Web Apps (PWA)</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Fast, reliable, and engaging web applications that work offline and feel like native apps
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">RESTful API Development</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Secure and scalable REST APIs for seamless integration between systems
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Frontend Development (React, Angular, Vue)</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Modern, responsive frontends built with the latest JavaScript frameworks
                                                </p>
                                            </div>
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Backend Development (Node.js, Python, .NET)</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Robust backend systems with your preferred technology stack
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="portal" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Enterprise Portal Solutions</CardTitle>
                                    <CardDescription>
                                        Centralized platforms for employee collaboration, customer self-service, and business operations
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">Enterprise Portal Dashboard</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Centralized portals for internal teams with role-based access and workflows
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="api" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>API Development & Integration</CardTitle>
                                    <CardDescription>
                                        Connect systems, enable data exchange, and build extensible platforms with robust APIs
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Specific Solutions</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border rounded-lg bg-card">
                                                <h4 className="font-medium mb-2">API Integration Diagram</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Design and document API architectures for complex system integrations
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
                                <h3 className="text-2xl font-bold mb-3 text-balance text-white">Ready to Build Your Digital Solution?</h3>
                                <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl mx-auto text-balance">
                                    Let's discuss how our digital solutions can help you create exceptional user experiences
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
