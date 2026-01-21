import { ArrowRight, Smartphone, Layout, Code2, Server, Brain, Workflow } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/common/Table"
import Card, {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/common/Card"
import { Button } from "../../components/common/Button"
import { useNavigate } from "react-router-dom"
import SpecificSolutionCard from "../../components/services/SpecificSolutionCard"
import { useSettings } from "../../context/SettingsContext"
import { useCallback } from "react"
import type { SettingsMedia } from "../../api/settings"

export default function DigitalSolutionsPage() {
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
                            Software Solutions
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                            Modern web applications, mobile solutions, and AI-powered software built
                            with cutting-edge technology for exceptional user experiences.
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
                            <TabsTrigger value="ai" className="text-sm">
                                AI Solutions
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="web" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Custom Web Application Development</CardTitle>
                                    <CardDescription>
                                        Build modern, scalable web applications with the latest
                                        technologies and frameworks
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Progressive Web Apps (PWA)"
                                                description="Fast, reliable, and engaging web applications that work offline and feel like native apps. Modern web technology at its best."
                                                imageSrc={getDynamicImage(
                                                    "Software Solutions Page",
                                                    "Block 1",
                                                    "Image 1",
                                                )}
                                                imageAlt="Progressive Web Apps"
                                                icon={Smartphone}
                                                tags={["PWA", "Offline-ready", "Fast"]}
                                            />

                                            <SpecificSolutionCard
                                                title="API Development & Integration"
                                                description="Design and implement robust APIs for seamless system integration and data exchange. Connect disparate systems with secure, scalable API architecture and comprehensive documentation."
                                                imageSrc={getDynamicImage(
                                                    "Software Solutions Page",
                                                    "Block 1",
                                                    "Image 2",
                                                )}
                                                imageAlt="API Development & Integration"
                                                icon={Code2}
                                                tags={["API Design", "Integration", "Scalable"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Frontend Development (React, Angular, Vue)"
                                                description="Modern, responsive frontends built with the latest JavaScript frameworks. Beautiful and performant user interfaces."
                                                imageSrc={getDynamicImage(
                                                    "Software Solutions Page",
                                                    "Block 1",
                                                    "Image 3",
                                                )}
                                                imageAlt="Frontend Development"
                                                icon={Layout}
                                                tags={["React", "Angular", "Vue"]}
                                            />

                                            <SpecificSolutionCard
                                                title="Backend Development (Node.js, Python, .NET)"
                                                description="Robust backend systems with your preferred technology stack. Powerful server-side solutions."
                                                imageSrc={getDynamicImage(
                                                    "Software Solutions Page",
                                                    "Block 1",
                                                    "Image 4",
                                                )}
                                                imageAlt="Backend Development"
                                                icon={Server}
                                                tags={["Node.js", "Python", ".NET"]}
                                            />
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
                                        Centralized platforms for employee collaboration, customer
                                        self-service, and business operations
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Enterprise Portal Dashboard"
                                                description="Centralized portals for internal teams with role-based access and workflows. Streamline collaboration and operations."
                                                imageSrc={getDynamicImage(
                                                    "Software Solutions Page",
                                                    "Block 2",
                                                    "Image 1",
                                                )}
                                                imageAlt="Enterprise Portal Dashboard"
                                                icon={Layout}
                                                tags={["Portal", "Role-based", "Centralized"]}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="ai" className="mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>AI Solutions</CardTitle>
                                    <CardDescription>
                                        Advanced artificial intelligence solutions for intelligent
                                        automation, multi-agent systems, and autonomous workflow
                                        management
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Specific Solutions
                                        </h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <SpecificSolutionCard
                                                title="Multi-Agentic AI Systems"
                                                description="Deploy intelligent multi-agent frameworks where multiple AI agents collaborate to solve complex business problems. Each agent specializes in specific tasks, communicating and coordinating to achieve optimal outcomes with enhanced scalability and resilience."
                                                imageSrc={getDynamicImage(
                                                    "Software Solutions Page",
                                                    "Block 3",
                                                    "Image 1",
                                                )}
                                                imageAlt="Multi-Agentic AI Systems"
                                                icon={Brain}
                                                tags={[
                                                    "Multi-Agent",
                                                    "AI Collaboration",
                                                    "Intelligent Systems",
                                                ]}
                                            />

                                            <SpecificSolutionCard
                                                title="Autonomous Workflow AI"
                                                description="Implement self-managing AI systems that automatically orchestrate and optimize business workflows. These intelligent systems learn from patterns, adapt to changes, and continuously improve processes without human intervention, delivering unprecedented operational efficiency."
                                                imageSrc={getDynamicImage(
                                                    "Software Solutions Page",
                                                    "Block 3",
                                                    "Image 2",
                                                )}
                                                imageAlt="Autonomous Workflow AI"
                                                icon={Workflow}
                                                tags={[
                                                    "Auto-Workflow",
                                                    "Process Optimization",
                                                    "Self-Learning",
                                                ]}
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
                                    Ready to Build Your Software Solution?
                                </h3>
                                <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-2xl mx-auto text-balance">
                                    Let's discuss how our software solutions can help you create
                                    exceptional user experiences
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
