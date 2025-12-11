// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { Card } from "@mui/material"
import { Briefcase, MapPin, Clock, Users, TrendingUp, Heart } from "lucide-react"
import { CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { Badge } from "../../components/common/Badge"
import { Button } from "../../components/common/Button"

export default function CareerPage() {
  const openings = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "We're looking for an experienced full-stack developer to build scalable enterprise solutions.",
    },
    {
      title: "Data Engineer",
      department: "Data Analytics",
      location: "New York, NY / Hybrid",
      type: "Full-time",
      description: "Join our data team to build robust data pipelines and analytics infrastructure.",
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement cloud infrastructure solutions for enterprise clients.",
    },
    {
      title: "AI/ML Engineer",
      department: "AI & Automation",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Develop cutting-edge AI solutions and automation tools for financial services clients.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA / Hybrid",
      type: "Full-time",
      description: "Lead product strategy and development for our enterprise software solutions.",
    },
    {
      title: "Business Analyst",
      department: "Consulting",
      location: "Remote",
      type: "Full-time",
      description: "Work directly with clients to understand requirements and deliver tailored solutions.",
    },
  ]

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive, innovative environment",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear paths for advancement",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote options, and generous time-off policies",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Competitive Compensation",
      description: "Industry-leading salaries, equity, and comprehensive benefits packages",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
              Build Your Career With Us
            </h1>
            <p className="text-lg text-muted-foreground text-balance leading-relaxed">
              Join a team of innovators, problem-solvers, and technology enthusiasts dedicated to transforming
              businesses through cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Join TechConsult?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in creating an environment where talented individuals can thrive and make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Open Positions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our current openings and find the perfect role for your skills and ambitions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed mb-4">{job.description}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {job.department}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    <Button className="sm:self-start">Apply Now</Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see a position that fits?</p>
            <Button variant="outline" size="lg">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
