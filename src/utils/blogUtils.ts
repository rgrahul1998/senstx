/**
 * Format a date string into a readable format
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

/**
 * Extract and process headings from HTML content
 * @param {string} content - HTML content
 * @returns {Array} Array of heading objects with id, text and level
 */
export const extractHeadings = (content: string) => {
    if (typeof window === "undefined" || !content) return []
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")
    const headings = Array.from(doc.querySelectorAll("h1, h2, h3, h4, h5, h6"))
    return headings.map((heading, index) => {
        // Create an ID for each heading if it doesn't exist
        const id = heading.id || `heading-${index}`
        return {
            id,
            text: heading.textContent || "",
            level: parseInt(heading.tagName.substring(1)),
        }
    })
}

/**
 * Process blog content - adjust image URLs and add IDs to headings
 * @param {string} content - Raw HTML content
 * @param {string} apiUrl - Base API URL
 * @returns {string} Processed HTML content
 */
export const processBlogContent = (content: string, apiUrl: string) => {
    if (!content) return ""

    // Process image URLs
    let processedContent = content.replace(
        /<img\s+([^>]*?)src=["'](\/files[^"']*)["']/g,
        (_match, attrs, src) => `<img ${attrs}src="${apiUrl}${src}" loading="lazy"`,
    )

    // Add IDs to headings
    if (typeof window !== "undefined") {
        const parser = new DOMParser()
        const doc = parser.parseFromString(processedContent, "text/html")
        const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6")

        headings.forEach((heading, index) => {
            if (!heading.id) {
                heading.id = `heading-${index}`
            }
        })
        return doc.body.innerHTML
    }

    return processedContent
}

/**
 * Truncate text to a specific number of characters
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text: string, maxLength = 150) => {
    if (!text || text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
}
