---
name: blog-post-creation
description: Standard workflow and required components for creating or updating blog posts on QualityWithMillan. Ensures product spotlight cards and author CTA footers are never missed.
---

# Blog Post Creation & Publishing Workflow

When drafting, reviewing, or publishing blog posts in `_posts/`:

## Checklist

1. **Frontmatter SEO**:
   - Descriptive `title`, `excerpt`, and `permalink`.
   - `seo.keywords` must include relevant core topic keywords plus:
     - `"the ai eval mindset"`
     - `"the ai eval mindset book"`
     - `"millan kaul book"`
     - `"ai testing book"`

2. **Mid-Article Product Spotlight**:
   - Insert `{% include product-spotlight-card.html ... %}` or `{% include book-ad-card.html %}` before key takeaways or mid-way in the post.

3. **End-of-Article CTA**:
   - Place `{% include book-cta-footer.html %}` at the very bottom of the post content (before post meta and taxonomy).

4. **AI Summarize & Social Share**:
   - The "Summarize with AI" (ChatGPT, Perplexity, Claude, Grok, Gemini) and "Copy for LLM" tool are automatically rendered on all blog posts via `_includes/social-share.html`.

