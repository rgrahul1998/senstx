import { Card, CardContent } from "@mui/material"
import { Building2, Users, Target, Award, MapPin } from "lucide-react"

export default function WhoWeArePage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses with cutting-edge software solutions that drive growth, efficiency, and innovation in the digital age.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "A diverse group of skilled professionals with expertise in financial services, enterprise solutions, AI, data analytics, and cloud technologies.",
    },
    {
      icon: Building2,
      title: "Our Experience",
      description:
        "Over a decade of experience delivering enterprise-grade solutions to clients across various industries worldwide.",
    },
    {
      icon: Award,
      title: "Our Commitment",
      description:
        "Dedicated to excellence, innovation, and building long-term partnerships with our clients through reliable and scalable solutions.",
    },
  ]

  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Projects Delivered", value: "500+" },
    { label: "Clients Worldwide", value: "200+" },
    { label: "Team Members", value: "150+" },
  ]

  const locations = [
    {
      country: "New Zealand",
      city: "Auckland",
      address: "Level 12, 123 Queen Street",
      postalCode: "Auckland 1010",
      email: "nz@techconsult.com",
      phone: "+64 9 123 4567",
    },
    {
      country: "United Kingdom",
      city: "London",
      address: "45 Moorgate",
      postalCode: "London EC2R 6BL",
      email: "uk@techconsult.com",
      phone: "+44 20 1234 5678",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Who We Are</h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
              We are a leading software consultancy firm specializing in delivering innovative solutions that transform
              businesses. Our expertise spans across financial services, enterprise solutions, AI & automation, data
              analytics, cloud services, and digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">What Drives Us</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Our core values and principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors pt-10 pb-10 px-6" style={{ borderRadius: "10px" }}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-balance">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between technology and business success, we have grown from a
                small team of passionate developers to a full-service software consultancy serving clients worldwide.
              </p>
              <p>
                Our journey has been marked by continuous innovation and a commitment to staying ahead of technological
                trends. We've helped hundreds of businesses transform their operations through intelligent automation,
                data-driven insights, and scalable cloud solutions.
              </p>
              <p>
                Today, we pride ourselves on being trusted partners to organizations across various industries,
                delivering solutions that not only meet current needs but also prepare businesses for future challenges
                and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Locations</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Serving clients globally from our offices in New Zealand and the United Kingdom
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-color pt-10 pb-10 px-6" style={{ borderRadius: "10px" }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{location.country}</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p className="font-medium text-foreground">{location.city}</p>
                        <p>{location.address}</p>
                        <p>{location.postalCode}</p>
                        <div className="pt-4 space-y-1">
                          <p>
                            <span className="font-medium text-foreground">Email:</span>{" "}
                            <a href={`mailto:${location.email}`} className="text-primary hover:underline">
                              {location.email}
                            </a>
                          </p>
                          <p>
                            <span className="font-medium text-foreground">Phone:</span>{" "}
                            <a
                              href={`tel:${location.phone.replace(/\s/g, "")}`}
                              className="text-primary hover:underline"
                            >
                              {location.phone}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
