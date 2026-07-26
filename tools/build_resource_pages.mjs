import fs from "node:fs";

const pages = [
  {
    slug: "daily-startup-checklist",
    title: "Daily Startup Checklist",
    eyebrow: "Operations Resource",
    description:
      "A daily startup checklist helps small businesses begin the day with clear priorities, assigned ownership, safety checks, and fewer missed steps.",
    h1: "Start each business day with fewer missed steps",
    promise:
      "A daily startup checklist gives the team a shared opening rhythm so priorities, safety items, schedules, and handoffs are confirmed before the day gets away from everyone.",
    problem: "When the day starts differently for every person, small missed steps turn into late jobs, unclear assignments, customer follow-up issues, and preventable interruptions.",
    outcome: "This resource helps teams begin each day with a short, repeatable review that clarifies what matters before work begins.",
    items: [
      "Daily priorities and schedule review",
      "Safety and readiness checks",
      "Team assignments and owner confirmation",
      "Open issues and blocked work",
      "End-of-day follow-up reminders",
    ],
    download: "/assets/sample-downloads/daily-startup-checklist.pdf",
    preview: "/assets/sample-previews/daily-startup-checklist.png",
    downloadLabel: "Download Sample",
  },
  {
    slug: "employee-onboarding-checklist",
    title: "Employee Onboarding Checklist",
    eyebrow: "HR Resource",
    description:
      "A practical employee onboarding checklist for small businesses that need new hires to understand people, tools, policies, expectations, and first-week priorities.",
    h1: "Employee onboarding that helps new hires become useful faster",
    promise:
      "A strong onboarding checklist gives every new employee a clear first week, reduces repeated questions, and helps managers train consistently without relying on memory.",
    problem: "New hires often receive information in fragments: a few emails, a quick tour, a policy file, and whatever the manager remembers that day.",
    outcome: "This resource gives small businesses a repeatable onboarding path so every hire receives the same essential context.",
    items: [
      "First-day setup and welcome steps",
      "People, tools, and systems introduction",
      "Policy and safety review",
      "Role expectations and first-week priorities",
      "Manager check-ins and training confirmation",
    ],
    download: "/assets/sample-downloads/new-hire-onboarding-checklist.pdf",
    preview: "/assets/sample-previews/new-hire-onboarding-checklist.png",
    downloadLabel: "Download Sample",
  },
  {
    slug: "vehicle-inspection-form",
    title: "Vehicle Inspection Form",
    eyebrow: "Operations Resource",
    description:
      "A vehicle inspection form helps small businesses document readiness, reduce preventable issues, and keep field teams accountable before vehicles leave for the day.",
    h1: "A simple vehicle inspection form for safer daily operations",
    promise:
      "Vehicle issues are easier to prevent when teams check the same items every time. A standard form creates accountability before small problems become expensive interruptions.",
    problem: "Without a repeatable inspection process, vehicle condition depends on memory, habit, or whoever happens to notice a problem first.",
    outcome: "This resource helps teams document vehicle readiness, flag issues, and keep field work moving with fewer avoidable delays.",
    items: [
      "Exterior and interior condition checks",
      "Fluids, tires, lights, and safety equipment",
      "Mileage and fuel tracking",
      "Issue reporting and manager review",
      "Clear pass, watch, and needs attention states",
    ],
    download: "/resources",
    preview: "/assets/sample-previews/daily-startup-checklist.png",
    downloadLabel: "Browse Related Resources",
  },
  {
    slug: "job-closeout-checklist",
    title: "Job Closeout Checklist",
    eyebrow: "Operations Resource",
    description:
      "A job closeout checklist helps small businesses finish work cleanly, collect missing details, confirm customer expectations, and reduce follow-up mistakes.",
    h1: "Finish every job with fewer loose ends",
    promise:
      "A closeout checklist protects the final mile of the work: what was completed, what changed, what the customer expects next, and what still needs follow-up.",
    problem: "Jobs often go wrong at the end because final photos, notes, signatures, invoices, or customer communication are skipped under pressure.",
    outcome: "This resource gives teams a simple closeout rhythm so completed work is documented before everyone moves on.",
    items: [
      "Work completed and exceptions noted",
      "Photos, signatures, and customer confirmation",
      "Materials, equipment, and cleanup checks",
      "Invoice or follow-up handoff",
      "Next-step owner and due date",
    ],
    download: "/resources",
    preview: "/assets/sample-previews/daily-startup-checklist.png",
    downloadLabel: "Browse Related Resources",
  },
  {
    slug: "weekly-kpi-dashboard",
    title: "Weekly KPI Dashboard",
    eyebrow: "Business Dashboard",
    description:
      "A weekly KPI dashboard helps business owners review revenue, work volume, overdue items, cash flow, and operational health without rebuilding reports from scratch.",
    h1: "A weekly KPI dashboard that shows what needs attention",
    promise:
      "Owners need a fast way to see whether the business is moving in the right direction. A weekly dashboard turns scattered numbers into a decision rhythm.",
    problem: "When performance data lives in separate spreadsheets, software tools, and inboxes, leaders spend too much time gathering numbers and not enough time deciding what to do.",
    outcome: "This workbook gives owners a starting point for reviewing revenue, job performance, cash flow, and operating priorities each week.",
    items: [
      "Revenue and weekly change",
      "Open work and overdue items",
      "Cash flow and receivables visibility",
      "Priority issues and follow-up owners",
      "Job costing and margin review",
    ],
    download: "/assets/sample-downloads/harbor-vault-sample-business-dashboard.xlsx",
    preview: "/assets/sample-previews/owner-dashboard.png",
    downloadLabel: "Download Workbook",
  },
  {
    slug: "customer-complaint-sop",
    title: "Customer Complaint SOP",
    eyebrow: "Customer Resource",
    description:
      "A customer complaint SOP gives teams a calm, consistent process for acknowledging issues, gathering facts, setting next steps, and closing the loop.",
    h1: "Handle customer complaints without improvising under pressure",
    promise:
      "Complaints are easier to resolve when the team knows how to respond before emotions rise. A standard process protects the customer relationship and the business.",
    problem: "When every complaint is handled differently, customers receive inconsistent answers and teams lose track of what was promised.",
    outcome: "This resource gives small businesses a practical script and process for responding, documenting, escalating, and following up.",
    items: [
      "Acknowledge the concern professionally",
      "Gather facts without arguing",
      "Set clear next steps and ownership",
      "Escalate when needed",
      "Close the loop with the customer",
    ],
    download: "/assets/sample-downloads/customer-complaint-handling-script.pdf",
    preview: "/assets/sample-previews/customer-complaint-handling-script.png",
    downloadLabel: "Download Sample",
  },
];

function header(current = "resources") {
  const active = current === "resources" ? ' aria-current="page"' : "";
  return `<header class="site-header" data-header>
      <a class="brand" href="/" aria-label="Cottonwood Harbor home">
        <img src="/assets/cottonwood-harbor-logo.svg" alt="Cottonwood Harbor">
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="/products">Products</a>
        <a href="/resources"${active}>Harbor Library</a>
        <a href="/philosophy">Philosophy</a>
        <a href="mailto:admin@cottonwoodharbor.com?subject=Cottonwood%20Harbor%20Question">Contact</a>
      </nav>
      <a class="header-cta" href="mailto:admin@cottonwoodharbor.com?subject=Cottonwood%20Harbor%20Question">Start a Conversation</a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-button>
        <span></span>
        <span></span>
      </button>
    </header>

    <nav class="mobile-menu" id="mobile-menu" data-mobile-menu aria-label="Mobile navigation">
      <a href="/products">Products</a>
      <a href="/resources">Harbor Library</a>
      <a href="/philosophy">Philosophy</a>
      <a href="mailto:admin@cottonwoodharbor.com?subject=Cottonwood%20Harbor%20Question">Contact</a>
    </nav>`;
}

function footer() {
  return `<footer class="site-footer">
      <img src="/assets/cottonwood-harbor-logo.svg" alt="Cottonwood Harbor">
      <p>The business operations library for better-run work.</p>
      <p class="footer-meta">Cottonwood Harbor Helping Businesses Run Better</p>
    </footer>

    <script src="/script.js"></script>`;
}

for (const page of pages) {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${page.title} Cottonwood Harbor</title>
    <meta name="description" content="${page.description}">
    <meta property="og:title" content="${page.title}">
    <meta property="og:description" content="${page.description}">
    <meta property="og:image" content="${page.preview}">
    <meta property="og:type" content="article">
    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    ${header()}

    <main>
      <section class="resource-detail-hero">
        <div class="resource-detail-copy">
          <p class="eyebrow">${page.eyebrow}</p>
          <h1>${page.h1}</h1>
          <p class="hero-lede">${page.promise}</p>
          <div class="hero-actions">
            <a class="button primary" href="${page.download}">${page.downloadLabel}</a>
            <a class="button secondary" href="/products#pricing">View Pricing</a>
          </div>
        </div>
        <a class="resource-detail-preview" href="${page.download}" aria-label="${page.downloadLabel} for ${page.title}">
          <img src="${page.preview}" alt="${page.title} preview">
        </a>
      </section>

      <section class="section resource-detail-section">
        <div>
          <p class="eyebrow">The business problem</p>
          <h2>Why this resource matters</h2>
        </div>
        <div class="resource-detail-text">
          <p>${page.problem}</p>
          <p>${page.outcome}</p>
        </div>
      </section>

      <section class="section resource-detail-section resource-detail-includes">
        <div>
          <p class="eyebrow">What it helps standardize</p>
          <h2>Built for daily use, not shelfware.</h2>
        </div>
        <ul>
          ${page.items.map((item) => `<li>${item}</li>`).join("\n          ")}
        </ul>
      </section>

      <section class="section resource-detail-section">
        <div>
          <p class="eyebrow">Part of the Harbor Library</p>
          <h2>One resource is useful. A complete operating library is better.</h2>
        </div>
        <div class="resource-detail-text">
          <p>Cottonwood Harbor is building the operating library for small businesses: practical documents, dashboards, checklists, forms, and workflows that help teams reduce rework, train faster, serve customers consistently, and know what needs attention next.</p>
          <div class="hero-actions">
            <a class="button primary" href="/resources">Browse the Library</a>
            <a class="button secondary" href="mailto:admin@cottonwoodharbor.com?subject=${encodeURIComponent(page.title)}">Ask a Question</a>
          </div>
        </div>
      </section>
    </main>

    ${footer()}
  </body>
</html>
`;

  fs.writeFileSync(`${page.slug}.html`, html);
}

console.log(`Generated ${pages.length} resource pages.`);
