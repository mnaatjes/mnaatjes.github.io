# Page Logic & Component Schemas: Architectural Content Strategy

This document outlines the structural logic, Vue component specifications, and JSON schemas required to transform the portfolio into a professional, "Business Value-First" engineering hub.

---

## 1. AboutMe Page: The "Structural Logic" Journey
**Goal:** Demonstrate that a 15-year career in diverse sectors (Hospitality, Fiduciary, History) serves as an apprenticeship in systems thinking, compliance, and high-pressure troubleshooting.

### A. Recommended Vue Components

| Component | Purpose | Key Props / Data |
| :--- | :--- | :--- |
| **`NarrativeHero.vue`** | A high-level introduction focusing on an "Architecture-First" philosophy. | `title`, `subtitle`, `philosophy_statement` |
| **`ExperienceBridges.vue`** | A three-column/tabbed component translating past experience into technical pillars. | `pillars: { title, description, sme_role }[]` |
| **`TechStackGrid.vue`** | Multi-dimensional stack grouped by system layers (Data, Backend, Frontend, Infra). | `layers: { name, tools: { name, icon }[] }[]` |
| **`EducationalTimeline.vue`** | Vertical timeline showing the convergence of History BA, Web Dev, and Analytics. | `events: { year, title, institution, description }[]` |

### B. The Three Pillars (ExperienceBridges)
1.  **The Fiduciary Pillar:** Data integrity, court-mandated reporting, and legal compliance (SME: Guardian/Conservator).
2.  **The Operational Pillar:** Troubleshooting under pressure, inventory flow, and team coordination (SME: 15 years in Hospitality).
3.  **The Academic Pillar:** Structural research, evidence-based reporting, and complex analysis (SME: History BA).

---

## 2. Case-Studies Hub: The JSON-Driven Architecture
**Goal:** Create a scalable, data-driven hub where `case-studies.json` acts as the source of truth for all project deep-dives.

### A. JSON Schema (`case-studies.json`)
```json
{
  "id": "string (url-slug)",
  "title": "string",
  "tagline": "string (1-sentence business value)",
  "problem_statement": "string (technical/business friction)",
  "architectural_choice": "string (detailed technical justification)",
  "validation_strategy": "string (compliance/testing mindset)",
  "technologies": ["string"],
  "outcome": "string (quantifiable result)",
  "doc_links": [
    { "label": "string", "url": "string" }
  ]
}
```

### B. Component Logic: Grid vs. Individual Pages

#### The Grid View (The "Hook")
Displays high-level value to grab attention:
- `title`
- `tagline`
- `technologies` (Top 3 icons/badges)
- `outcome` (High-level summary)

#### Individual Pages (The "Deep-Dive")
Provides the technical proof for recruiters and managers:
- `problem_statement` (Expanded)
- `architectural_choice` (Pattern justification, e.g., "Hexagonal Architecture")
- `validation_strategy` (Showing "Compliance-First" mindset)
- `doc_links` (Integrated as "Technical Documentation" buttons)

---

## 3. Solutions and Services: The Commercial Landing Page
**Goal:** Use non-technical language to explain technical value to stakeholders and non-engineering managers.

### A. Targeted Service Blocks
- **Data Pipeline Automation:** "Bridges the gap between your legacy data sources and modern reporting needs. I build pipelines that handle the manual labor of data ingestion and validation."
- **UI/UX Performance Audits:** "Identifying and fixing the digital hurdles that prevent users from accessing your resources—specifically focusing on mobile responsiveness and load-speed optimization."
- **System Integrity Consulting:** "For businesses in high-stakes sectors (Legal, Fiduciary, Medical), I provide audits of existing software logic to ensure security and compliance standards are met."

### B. Homepage Hero CTA (index.md)
Update the `index.md` Hero section to point directly to these service pillars:
- **Primary Button:** "View Solutions" (Links to `/services` or `/solutions`)
- **Secondary Button:** "Explore Architectures" (Links to `/case_studies`)

---

## 4. Documentation Samples (Integration)
**Goal:** Reuse existing documentation from repositories (e.g., `etl-pipeline`, `php-abac-auth`) without duplication.

### A. `DocSampleCard.vue`
A specialized component that fetches and renders snippets of specific documentation files.

**Logic:**
- Fetch raw markdown from a provided URL (GitHub raw).
- Render a "Preview" snippet using `markdown-it`.
- Link to the full documentation page in the Hub.

**Placement:**
- Positioned at the bottom of "Case Studies" pages to prove that the code is supported by "Standard Operating Procedures" (SOPs).
- Examples: `slalom_glossary.md` (ETL) or `system_audit.md` (Auth).
