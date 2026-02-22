import { callAPI } from "./client"

export interface Blog {
    name: string
    title: string
    blog_intro: string
    blog_category: string
    meta_image: string | null
    blogger: string
    header_image: string | null
    published_on?: string
    read_time?: string
    content?: string
    author?: string
    author_bio?: string | null
    author_image?: string | null
    comments_count?: number
    disable_comments?: number
    disable_likes?: number
    featured_image?: string | null
    modified?: string
    tags?: string[]
}

export interface FetchBlogsResponse {
    message: {
        blogs: Blog[]
        total_pages: number
        categories: string[]
    }
}

export interface BlogDetailResponse {
    message: {
        blog: Blog
        success: boolean
    }
}

export interface Comment {
    id: string
    author: string
    email: string
    content: string
    date: string
    author_image: string | null
}

export interface FetchCommentsResponse {
    message: {
        comments: Comment[]
        pagination: {
            page: number
            total_pages: number
            total_comments: number
            page_size: number
        }
        success: boolean
    }
}

export interface LikeStatusResponse {
    message: {
        success: boolean
        liked: boolean
        like_count: number
    }
}

export const fetchBlogs = async (
    page: number = 1,
    pageSize: number = 6,
): Promise<FetchBlogsResponse> => {
    return await callAPI("blog", "fetch_blogs", {
        page,
        page_size: pageSize,
        filters: "[]",
    })
}

export const fetchBlogDetail = async (blogName: string): Promise<BlogDetailResponse> => {
    return await callAPI("blog", "fetch_blog_detail", {
        blog_name: blogName,
    })
}

export const fetchBlogComments = async (
    blogName: string,
    page: number = 1,
    pageSize: number = 10,
): Promise<FetchCommentsResponse> => {
    return await callAPI("blog", "fetch_blog_comments", {
        blog_name: blogName,
        page,
        page_size: pageSize,
    })
}

export const getBlogLikeStatus = async (
    blogName: string,
    userEmail: string,
): Promise<LikeStatusResponse> => {
    return await callAPI("blog", "get_blog_like_status", {
        blog_name: blogName,
        user_email: userEmail,
    })
}

export const toggleBlogLike = async (blogName: string, userEmail: string): Promise<any> => {
    return await callAPI("blog", "toggle_blog_like", {
        blog_name: blogName,
        user_email: userEmail,
    })
}

export const addBlogComment = async (
    blogName: string,
    comment: string,
    authorName: string,
    authorEmail: string,
): Promise<any> => {
    return await callAPI("blog", "add_blog_comment", {
        blog_name: blogName,
        comment,
        author_name: authorName,
        author_email: authorEmail,
    })
}

export const subscribeNewsletter = async (email: string): Promise<any> => {
    return await callAPI("blog", "subscribe_newsletter", {
        email,
    })
}
