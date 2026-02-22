import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Clock, User, Tag, Loader2 } from "lucide-react"
import Card, { CardContent } from "../../components/common/Card"
import { Button } from "../../components/common/Button"
import { fetchBlogs } from "../../api/blog"
import type { Blog } from "../../api/blog"

export default function UseCasesPage() {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                const res = await fetchBlogs()
                if (res.message.blogs) {
                    setBlogs(res.message.blogs)
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error)
            } finally {
                setLoading(false)
            }
        }
        loadBlogs()
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Use Cases &
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {" "}
                                Insights
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Explore our latest success stories, industry insights, and comprehensive
                            use cases demonstrating the power of AI-driven transformation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Listing Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
                            <p className="text-slate-500">Loading insights...</p>
                        </div>
                    ) : blogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog) => (
                                <Card
                                    key={blog.name}
                                    className="group hover:shadow-xl transition-all duration-300 border-none bg-white flex flex-col h-full"
                                >
                                    {/* Blog Header Image Placeholder or Real Image */}
                                    <div className="aspect-video overflow-hidden bg-slate-100 rounded-t-xl relative">
                                        {blog.header_image ? (
                                            <img
                                                src={blog.header_image}
                                                alt={blog.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors">
                                                <Tag className="h-12 w-12 text-slate-300" />
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                                                {blog.blog_category || "Insight"}
                                            </span>
                                        </div>
                                    </div>

                                    <CardContent className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <User size={14} />
                                                <span>{blog.blogger || "Admin"}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={14} />
                                                <span>{blog.read_time || "5 min read"}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                                            {blog.blog_intro ||
                                                "Read more about how our solutions are transforming businesses across industries."}
                                        </p>

                                        <div className="mt-auto">
                                            <Button
                                                variant="ghost"
                                                className="p-0 h-auto font-bold text-primary hover:text-primary hover:bg-transparent flex items-center gap-2 group/btn transition-all"
                                                onClick={() => navigate(`/use-cases/${blog.name}`)}
                                            >
                                                Read Full Case Study
                                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-xl text-slate-400 font-medium">
                                No use cases or insights found at the moment.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Integration in Listing Page */}
            <section className="py-20 bg-slate-900 text-white mt-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-full bg-accent/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
                            <p className="text-slate-400 leading-relaxed">
                                Subscribe to our newsletter to receive the latest industry insights,
                                case studies, and technological updates directly in your inbox.
                            </p>
                        </div>
                        <div className="flex-1 w-full max-w-md">
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white placeholder-slate-500"
                                />
                                <Button className="bg-primary hover:bg-primary/90 text-white px-8 h-[50px] font-bold">
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
