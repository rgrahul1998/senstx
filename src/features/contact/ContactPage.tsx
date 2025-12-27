import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent } from "@mui/material"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { Textarea } from "../../components/common/Textarea"
import { Label } from "../../components/common/Label"
import { Input } from "../../components/common/Inputs"
import { Button } from "../../components/common/Button"
import { CardDescription, CardHeader, CardTitle } from "../../components/common/Card"
import { submitContact, type ContactFormData } from "../../api/contact"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null
        message: string
    }>({
        type: null,
        message: "",
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>()

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: "" })

        try {
            await submitContact(data)
            setSubmitStatus({
                type: "success",
                message: "Your message has been sent successfully! We'll be in touch soon.",
            })
            reset()
        } catch (error) {
            console.error("Failed to submit contact form:", error)
            setSubmitStatus({
                type: "error",
                message: "Failed to send message. Please try again later.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-muted-foreground text-balance leading-relaxed">
                            Ready to start your digital transformation journey? Let's discuss how we
                            can help your business thrive.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                                    Let's Start a Conversation
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Whether you need a complete digital transformation or specific
                                    software solutions, our team is here to help. Fill out the form
                                    or reach out directly using the contact information below.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <Card>
                                    <CardContent className="flex items-start gap-4 pt-6">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1 text-foreground">
                                                Email
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                info@senstx.com
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                sales@senstx.com
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="flex items-start gap-4 pt-6">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1 text-foreground">
                                                Phone
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                +1 (555) 123-4567
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Mon-Fri 9am-6pm EST
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="flex items-start gap-4 pt-6">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1 text-foreground">
                                                Office
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                123 Tech Street
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                San Francisco, CA 94105
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Send Us a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you within 24
                                    hours
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {submitStatus.type && (
                                    <div
                                        className={`mb-6 p-4 rounded-md ${
                                            submitStatus.type === "success"
                                                ? "bg-green-50 text-green-700 border border-green-200"
                                                : "bg-red-50 text-red-700 border border-red-200"
                                        }`}
                                    >
                                        {submitStatus.message}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input
                                                id="firstName"
                                                placeholder="John"
                                                {...register("first_name", {
                                                    required: "First name is required",
                                                })}
                                            />
                                            {errors.first_name && (
                                                <p className="text-sm text-red-500">
                                                    {errors.first_name.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Doe"
                                                {...register("last_name", {
                                                    required: "Last name is required",
                                                })}
                                            />
                                            {errors.last_name && (
                                                <p className="text-sm text-red-500">
                                                    {errors.last_name.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john.doe@company.com"
                                                {...register("email_id", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address",
                                                    },
                                                })}
                                            />
                                            {errors.email_id && (
                                                <p className="text-sm text-red-500">
                                                    {errors.email_id.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+1 (555) 000-0000"
                                                {...register("phone")}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input
                                            id="company"
                                            placeholder="Your Company Name"
                                            {...register("company")}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="service">Service Interest</Label>
                                        <select
                                            id="service"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                            {...register("service_interest")}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="financial">Financial Services</option>
                                            <option value="enterprise">Enterprise Solutions</option>
                                            <option value="ai">AI & Automation</option>
                                            <option value="data">Data Analytics</option>
                                            <option value="cloud">Cloud Services</option>
                                            <option value="digital">Digital Solutions</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your project or requirements..."
                                            rows={5}
                                            {...register("notes", {
                                                required: "Message is required",
                                            })}
                                        />
                                        {errors.notes && (
                                            <p className="text-sm text-red-500">
                                                {errors.notes.message}
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
