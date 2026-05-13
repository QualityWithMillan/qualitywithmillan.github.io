---
title: "constitution.md in Spec-Driven Development"
header:
  teaser: /assets/images/2026/05/sdd_SPECIFY_constitution_md.png
permalink: "/blog/ai/constitution-md-spec-driven-development.html"
search: true
date: 2026-05-13
last_modified_at: 2026-05-13
authors:
  - Millan Kaul
series: "QA Toolbox for AI"
categories:
  - blog
  - quality-engineering
  - ai
tags:
  - qa
  - quality-engineering
  - ai-testing
  - spec-driven-development
  - constitution-md
  - software-architecture
  - test-strategy
  - ai-native
  - prompt-engineering
  - human-in-the-loop
excerpt: "Here is what constitution.md is, and how developers, architects, and QA teams should use it in spec-driven development."
seo:
  title: "What is constitution.md in Spec-Driven Development?"
  description: "A practical guide to constitution.md in GitHub Spec Kit, with a QA, developer, and architecture focus."
  type: article
  image: /assets/images/2026/05/sdd_SPECIFY_constitution_md.png
  keywords:
    - "constitution md"
    - "spec driven development"
    - "github spec kit"
    - "ai testing"
    - "quality engineering"
    - "software architecture"
    - "test strategy"
    - "developer workflow"
    - "qa for ai"
    - "ai native development"
  author: "Millan Kaul"
  published_time: "2026-05-13"
  modified_time: "2026-05-13"
  site_name: "QualityWithMillan"
og:
  title: "What is constitution.md in Spec-Driven Development?"
  description: "A practical guide to constitution.md for developers, architects, and QA teams."
  image: /assets/images/2026/05/sdd_SPECIFY_constitution_md.png
  type: article
twitter:
  card: summary_large_image
  title: "What is constitution.md in Spec-Driven Development?"
  description: "A practical guide to constitution.md for developers, architects, and QA teams."
  image: /assets/images/2026/05/sdd_SPECIFY_constitution_md.png
---

<p>
 Written by -
{% if page.authors == nil or page.authors.size == 0 %}
   {{ page.author }}
{% else %}
    {% assign result = "" %}
    {% for author in page.authors %}
        {% if author != nil and author != "" %}
            {% if forloop.first %}
                {% assign result = author %}
            {% elsif forloop.last %}
                {% assign result = result | append: " and " | append: author %}
            {% else %}
                {% assign result = result | append: ", " | append: author %}
            {% endif %}
        {% endif %}
    {% endfor %}
    {% if result != "" %}
        <strong>{{ result }}</strong>
    {% endif %}
{% endif %}
</p>


## **`constitution.md`** : The Rules Behind Spec-Driven Development

`constitution.md` file is the project’s rulebook in Spec-Driven Development. It gives developers, architects, and QA teams a shared set of principles to follow before any feature spec, plan, or implementation begins.

![Image 01](/assets/images/2026/05/sdd_SPECIFY_ASCII.png)
<span style="font-size:0.5em;"></span>

If you are using [GitHub Spec Kit](https://github.com/github/spec-kit), `constitution.md` is the document that sets the **rules of the road** for your project. It is not the feature spec itself. It is the project’s guiding policy: the stable principles that shape how every spec, plan, task, and implementation decision should behave.

In simple terms, it tells your AI-assisted workflow: **this is how we build here**. The Spec Kit README describes spec-driven development as a process where the constitution provides the prescriptive guidance that keeps later planning and implementation aligned.

## Why it matters

For developers and architects, `constitution.md` :

- Acts like an architectural contract.
- It helps keep decisions consistent across features, teams, and AI-generated output, instead of letting each prompt invent its own style of development.

That is especially useful when multiple people or `agents` contribute to the same codebase.

> For QA and testing, it is equally important because it creates a baseline for what should always be true.

If your constitution says “no silent failures,” “test critical paths first,” or “do not leak user data,” then those become expectations that can be checked during review, planning, and implementation.

![Image 01](/assets/images/2026/05/sdd_SPECIFY_constitution_md.png)
<span style="font-size:0.5em;"></span>

## How to use it

A good way to think about `constitution.md` is this: it is the document you write **before** the feature spec. The feature spec changes often, but the constitution stays steady and guides every later step in the workflow.

A practical flow looks like this:

1. Define the project principles in `constitution.md`.
2. Use those principles while creating the feature spec.
3. Let the plan, tasks, and implementation remain consistent with those principles.
4. Review the final result against the constitution, not just the feature requirements.


> Here is a `constitution-template.md`

```md
---
constitution.md
---

# [PROJECT_NAME] Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### [PRINCIPLE_1_NAME]
<!-- Example: I. Library-First -->
[PRINCIPLE_1_DESCRIPTION]
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### [PRINCIPLE_2_NAME]
<!-- Example: II. CLI Interface -->
[PRINCIPLE_2_DESCRIPTION]
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### [PRINCIPLE_3_NAME]
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
[PRINCIPLE_3_DESCRIPTION]
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### [PRINCIPLE_4_NAME]
<!-- Example: IV. Integration Testing -->
[PRINCIPLE_4_DESCRIPTION]
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### [PRINCIPLE_5_NAME]
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
[PRINCIPLE_5_DESCRIPTION]
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

## [SECTION_2_NAME]
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

[SECTION_2_CONTENT]
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## [SECTION_3_NAME]
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

[SECTION_3_CONTENT]
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

[GOVERNANCE_RULES]
<!-- Example: All PRs/reviews must verify compliance; Complexity must be justified; Use [GUIDANCE_FILE] for runtime development guidance -->

**Version**: [CONSTITUTION_VERSION] | **Ratified**: [RATIFICATION_DATE] | **Last Amended**: [LAST_AMENDED_DATE]
<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->

```

## What to put in it

Keep it short, clear, and opinionated. Good constitution rules usually cover architecture, quality, security, testing, data handling, and how AI should behave in your codebase. Examples include:

- prefer simple, testable designs.
- fail loudly instead of hiding errors.
- protect user data by default.
- require tests for critical paths.
- keep generated code aligned with existing architecture.

That style works well because the constitution is meant to be a durable reference, not a long policy manual.

## My take

**constitution.md** is where Spec-Driven Development becomes real. It gives developers a shared architecture mindset, gives QA a testable quality baseline, and gives AI a guardrail before it starts generating anything.

In other words, it is the document that turns *“build it fast”* into **“build it right.”**
