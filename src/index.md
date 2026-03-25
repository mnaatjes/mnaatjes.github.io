---
layout: home
is_home: true
hero:
    name: "Michael Naatjes"
    text: "Backend and DevOps Engineer"
    tagline: "Building resilient architectures and documentation hubs."
    actions:
        - theme: brand
          text: View Projects
          link: /projects/
        - theme: alt
          text: View on my Github
          link: https://github.com/mnaatjes
          target: _blank
---

<SectionHeader 
  eyebrow="Portfolio"
  title="Featured Projects"
  description="A selection of my best engineering work, ETL pipelines, and developer tools."
  showLine
/>

<ProjectGrid :limit="8" />

<Quote author="David Lynch">
  Absurdity is what I like most in life, and there's humor in struggling in ignorance. 
  If you saw a man repeatedly running into a wall until he was a bloody pulp, 
  after a while it would make you laugh because it becomes absurd
</Quote>
