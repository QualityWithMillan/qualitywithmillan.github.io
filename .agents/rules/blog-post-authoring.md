# Blog Post Authoring Guidelines

When creating or modifying blog posts in `_posts/`:

## 1. Mid-Post Spotlight Card
Always include the reusable product spotlight card mid-post (typically right before the concluding section or before `### My QA takeaway:`):

```liquid
{% include product-spotlight-card.html 
   hook="📖 <em>This is a lesson from the 30-day AI testing framework in:</em>"
   title="THE AI EVAL MINDSET: 30 Focused Lessons for Testing AI That Works in the Real World"
   link="https://us.amazon.com/dp/B0HHJ84359/"
   link_text="Shop on Amazon ›"
   image="/assets/images/books/001_The_AI_Eval_Mindset.png"
   image_alt="THE AI EVAL MINDSET Book by Millan Kaul"
   author="by Millan Kaul"
   price="$9.99 Kindle"
   format="Also available in Paperback & Hardcover"
%}
```

## 2. In-Blog End-of-Post CTA
Always append the authentic author CTA box at the end of the post content (above the post metadata and site footer):

```liquid
{% include book-cta-footer.html %}
```

## 3. SEO Frontmatter Keywords
Ensure the `seo.keywords` list in the YAML frontmatter includes relevant book and topic tags:
```yaml
seo:
  keywords:
    - "the ai eval mindset"
    - "the ai eval mindset book"
    - "millan kaul book"
    - "ai testing book"
```
