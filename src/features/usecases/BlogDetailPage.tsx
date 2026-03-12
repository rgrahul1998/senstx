import { useEffect, useState, useCallback } from "react"
import { useParams } from "react-router-dom"
import { Heart, Loader2, X } from "lucide-react"
import {
    fetchBlogDetail,
    fetchBlogComments,
    getBlogLikeStatus,
    toggleBlogLike,
    addBlogComment,
    subscribeNewsletter,
} from "../../api/blog"
import type { Blog, Comment } from "../../api/blog"
import { Button } from "../../components/common/Button"
import { processBlogContent, extractHeadings } from "../../utils/blogUtils"
import { API_URL } from "../../config"

// Custom SVG Icons to avoid Lucide deprecation warnings for brand icons
const FacebookIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
)

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
)

const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z" />
        <path d="m9.75 15.02 5.75-3.02-5.75-3.02V15.02z" />
    </svg>
)

export default function BlogDetailPage() {
    const { blog_name } = useParams<{ blog_name: string }>()
    const [blog, setBlog] = useState<Blog | null>(null)
    const [comments, setComments] = useState<Comment[]>([])
    const [loading, setLoading] = useState(true)
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const [commentContent, setCommentContent] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [authorEmail, setAuthorEmail] = useState("satya@gmail.com") // Mocking default email from screenshot
    const [newsletterEmail, setNewsletterEmail] = useState("")
    const [newsletterRes, setNewsletterRes] = useState<{ status: string; message: string } | null>(
        null,
    )
    const [sendingComment, setSendingComment] = useState(false)
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
    const loadBlogData = useCallback(async () => {
        if (!blog_name) return
        try {
            setLoading(true)
            const [detailRes, commentsRes, likeStatusRes] = await Promise.all([
                fetchBlogDetail(blog_name),
                fetchBlogComments(blog_name),
                getBlogLikeStatus(blog_name, authorEmail),
            ])
            if (detailRes.message.blog) {
                const blogData = detailRes.message.blog
                if (blogData.content) {
                    blogData.content = processBlogContent(blogData.content, API_URL)
                    setHeadings(extractHeadings(blogData.content))
                }
                setBlog(blogData)
            }
            if (commentsRes.message.success) {
                setComments(commentsRes.message.comments)
            }
            if (likeStatusRes.message.success) {
                setLiked(likeStatusRes.message.liked)
                setLikeCount(likeStatusRes.message.like_count)
            }
        } catch (error) {
            console.error("Failed to load blog data:", error)
        } finally {
            setLoading(false)
        }
    }, [blog_name, authorEmail])
    useEffect(() => {
        loadBlogData()
    }, [loadBlogData])
    const handleLikeToggle = async () => {
        if (!blog_name) return
        try {
            const res = await toggleBlogLike(blog_name, authorEmail)
            if (res.message.success) {
                setLiked((prev) => !prev)
                setLikeCount((prev) => (liked ? prev - 1 : prev + 1))
            }
        } catch (error) {
            console.error("Failed to toggle like:", error)
        }
    }
    const handleAddComment = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!blog_name || !commentContent || !authorName) return
        try {
            setSendingComment(true)
            const res = await addBlogComment(blog_name, commentContent, authorName, authorEmail)
            if (res.message.success) {
                setCommentContent("")
                setAuthorName("")
                // Reload comments
                const commentsRes = await fetchBlogComments(blog_name)
                if (commentsRes.message.success) {
                    setComments(commentsRes.message.comments)
                }
            }
        } catch (error) {
            console.error("Failed to add comment:", error)
        } finally {
            setSendingComment(false)
        }
    }
    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!newsletterEmail) return
        try {
            const res = await subscribeNewsletter(newsletterEmail)
            if (res.message) {
                setNewsletterRes(res.message)
                if (res.message.status === "success") {
                    setNewsletterEmail("")
                }
            }
        } catch (error) {
            console.error("Failed to subscribe:", error)
            setNewsletterRes({ status: "fail", message: "Something went wrong. Please try again." })
        }
    }
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }
    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-muted-foreground">Blog not found.</p>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Hero Section - Aligned with FinancialServices Hero */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-b border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full uppercase tracking-wider">
                                {blog.blog_category || "General"}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-foreground">
                                    By {blog.blogger || blog.author || "Admin"}
                                </span>
                            </div>
                            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <span>{blog.published_on || "Recently"}</span>
                            </div>
                            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <span>{blog.read_time || "5 min read"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main className="container mx-auto px-4 py-12 flex-grow">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Content Area */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Main Content Area */}
                        <div className="space-y-6">
                            {/* Intro / Highlight section matching existing accent styles */}
                            {blog.blog_intro && (
                                <div className="p-6 bg-slate-50 border-l-4 border-[#6366f1] rounded-r-lg italic text-slate-700 leading-relaxed text-lg">
                                    {blog.blog_intro}
                                </div>
                            )}
                            <div
                                className="prose prose-slate prose-lg max-w-none text-slate-800 leading-relaxed mb-8 prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700"
                                dangerouslySetInnerHTML={{ __html: blog.content || "" }}
                            />
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-100">
                                <div className="flex items-center gap-4">
                                    <Button
                                        variant={liked ? "default" : "secondary"}
                                        onClick={handleLikeToggle}
                                        className={`gap-2 h-10 px-4 py-2 ${liked ? "bg-[#6366f1] hover:bg-[#5254e3]" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                                    >
                                        <Heart
                                            className={`h-4 w-4 ${liked ? "fill-current" : ""}`}
                                        />
                                        <span>Like ({likeCount})</span>
                                    </Button>
                                    <span className="text-sm text-slate-500">
                                        Log in to like this post
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-bold text-sm text-slate-900">Share</span>
                                    <div className="flex items-center gap-3">
                                        {[
                                            {
                                                icon: LinkedinIcon,
                                                color: "hover:text-[#0077B5]",
                                                label: "LinkedIn",
                                            },
                                            {
                                                icon: YoutubeIcon,
                                                color: "hover:text-[#FF0000]",
                                                label: "YouTube",
                                            },
                                            {
                                                icon: FacebookIcon,
                                                color: "hover:text-[#1877F2]",
                                                label: "Facebook",
                                            },
                                        ].map((social, i) => (
                                            <a
                                                key={i}
                                                href="#"
                                                className={`text-slate-900 ${social.color} transition-colors`}
                                                aria-label={social.label}
                                            >
                                                <social.icon size={20} />
                                            </a>
                                        ))}
                                        <a
                                            href="#"
                                            className="text-slate-900 hover:text-black transition-colors"
                                            aria-label="X (Twitter)"
                                        >
                                            <X size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Comments Section */}
                        <div className="space-y-6 pt-6">
                            <h2 className="text-2xl font-bold text-foreground">
                                Discussions ({comments.length})
                            </h2>
                            {/* Leave a Comment Form */}
                            <div className="border border-slate-200 shadow-sm p-8 rounded-lg bg-white">
                                <h3 className="text-lg font-bold mb-6">Join the conversation</h3>
                                <form onSubmit={handleAddComment} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your full name"
                                                value={authorName}
                                                onChange={(e) => setAuthorName(e.target.value)}
                                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="example@email.com"
                                                value={authorEmail}
                                                onChange={(e) => setAuthorEmail(e.target.value)}
                                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                            Comment
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            placeholder="What are your thoughts?"
                                            value={commentContent}
                                            onChange={(e) => setCommentContent(e.target.value)}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={sendingComment}
                                        className="shadow-md active:scale-95"
                                    >
                                        {sendingComment ? "Posting..." : "Submit Comment"}
                                    </Button>
                                </form>
                            </div>
                            {/* Comments List */}
                            <div className="space-y-4">
                                {comments.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="p-6 bg-white border border-slate-100 rounded-lg shadow-sm"
                                    >
                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 font-bold shrink-0">
                                                {comment.author.charAt(0)}
                                            </div>
                                            <div className="space-y-2 flex-1">
                                                <div className="flex items-center justify-between">
                                                    <span className="font-bold text-slate-800">
                                                        {comment.author}
                                                    </span>
                                                    <span className="text-xs text-slate-400">
                                                        {comment.date}
                                                    </span>
                                                </div>
                                                <p className="text-slate-600 leading-relaxed text-sm">
                                                    {comment.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <aside className="space-y-6">
                        {/* Table of Contents - Aligned with site's Card Header style */}
                        <div className="border border-slate-200 shadow-sm rounded-lg p-6 bg-white sticky top-24">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="w-1 h-5 bg-primary rounded-full"></span>
                                Contents
                            </h3>
                            {headings.length > 0 ? (
                                <nav className="space-y-2">
                                    {headings.map((heading) => (
                                        <a
                                            key={heading.id}
                                            href={`#${heading.id}`}
                                            className={`block text-sm transition-colors hover:text-primary ${
                                                heading.level > 2 ? "ml-4" : ""
                                            } ${
                                                heading.level > 1
                                                    ? "text-slate-600"
                                                    : "text-slate-800 font-medium"
                                            }`}
                                        >
                                            {heading.text}
                                        </a>
                                    ))}
                                </nav>
                            ) : (
                                <div className="text-slate-400 text-sm italic">
                                    No headings found in this article.
                                </div>
                            )}
                        </div>
                        {/* Newsletter Subscription - Matching User Screenshot */}
                        <div className="bg-[#113355] text-white rounded-xl shadow-lg overflow-hidden p-8">
                            <h3 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h3>
                            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                Stay updated with our latest posts and news
                            </p>
                            <form onSubmit={handleSubscribe} className="space-y-4">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    className="w-full px-5 py-4 bg-[#ebf2ff] border-none rounded-xl text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white transition-all text-sm font-medium"
                                />
                                {newsletterRes && (
                                    <div className="w-full py-3 px-4 bg-[#2a3045] rounded-lg text-center text-sm font-medium">
                                        {newsletterRes.message}
                                    </div>
                                )}
                                <Button
                                    type="submit"
                                    variant="ghost"
                                    className="w-full bg-white text-black hover:bg-slate-50 font-bold py-4 h-14 rounded-xl shadow-lg transition-all border-none"
                                >
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    )
}
