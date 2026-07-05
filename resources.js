const resources = [
  ["Operations", "Daily startup checklist"],
  ["Operations", "Daily closeout checklist"],
  ["Operations", "Weekly operations review agenda"],
  ["Operations", "Office SOP index"],
  ["Operations", "Standard operating procedure template"],
  ["Operations", "Technician handbook"],
  ["Operations", "Dispatch checklist"],
  ["Operations", "Job packet cover sheet"],
  ["Operations", "Work order intake form"],
  ["Operations", "Job completion checklist"],
  ["Operations", "Vehicle inspection form"],
  ["Operations", "Vehicle maintenance log"],
  ["Operations", "Equipment assignment log"],
  ["Operations", "Equipment inspection checklist"],
  ["Operations", "Tool checkout form"],
  ["Operations", "Inventory reorder sheet"],
  ["Customer", "New customer welcome email"],
  ["Customer", "Estimate template"],
  ["Customer", "Proposal cover letter"],
  ["Customer", "Service agreement outline"],
  ["Customer", "Appointment confirmation email"],
  ["Customer", "Service reminder email"],
  ["Customer", "Post-service thank-you email"],
  ["Customer", "Review request message"],
  ["Customer", "Referral request message"],
  ["Customer", "Complaint handling script"],
  ["Customer", "Customer issue escalation form"],
  ["Customer", "Cancellation response letter"],
  ["Customer", "No-show follow-up message"],
  ["Customer", "Warranty response template"],
  ["Customer", "Customer satisfaction survey"],
  ["Customer", "Client file checklist"],
  ["HR", "Hiring packet checklist"],
  ["HR", "Job description template"],
  ["HR", "Interview guide"],
  ["HR", "Candidate scorecard"],
  ["HR", "Offer letter template"],
  ["HR", "New hire onboarding checklist"],
  ["HR", "First-day agenda"],
  ["HR", "30-day check-in form"],
  ["HR", "60-day check-in form"],
  ["HR", "90-day review form"],
  ["HR", "Performance review template"],
  ["HR", "Disciplinary action form"],
  ["HR", "Employee handbook outline"],
  ["HR", "Uniform policy"],
  ["HR", "Time-off request form"],
  ["HR", "Training checklist"],
  ["Business", "Monthly business review packet"],
  ["Business", "Weekly leadership meeting agenda"],
  ["Business", "KPI dashboard outline"],
  ["Business", "Monthly report template"],
  ["Business", "Quarterly planning worksheet"],
  ["Business", "Annual planning worksheet"],
  ["Business", "Decision log"],
  ["Business", "Priority planning sheet"],
  ["Business", "Project brief template"],
  ["Business", "Project status report"],
  ["Business", "Vendor evaluation form"],
  ["Business", "Vendor contact list"],
  ["Business", "Policy approval tracker"],
  ["Business", "Document control log"],
  ["Business", "Business continuity checklist"],
  ["Business", "Owner dashboard outline"],
  ["Finance", "Pricing calculator"],
  ["Finance", "Job costing worksheet"],
  ["Finance", "Budget spreadsheet"],
  ["Finance", "Monthly expense tracker"],
  ["Finance", "Cash flow forecast"],
  ["Finance", "Invoice checklist"],
  ["Finance", "Accounts receivable tracker"],
  ["Finance", "Accounts payable checklist"],
  ["Finance", "Purchase approval form"],
  ["Finance", "Mileage reimbursement form"],
  ["Finance", "Credit card reconciliation checklist"],
  ["Finance", "Profit margin worksheet"],
  ["Finance", "Payroll review checklist"],
  ["Finance", "Tax document checklist"],
  ["Finance", "Subscription audit sheet"],
  ["Finance", "Year-end close checklist"],
  ["Marketing", "Marketing calendar"],
  ["Marketing", "Campaign planning worksheet"],
  ["Marketing", "Social media posting calendar"],
  ["Marketing", "Local promotion checklist"],
  ["Marketing", "Email newsletter outline"],
  ["Marketing", "Before-and-after project brief"],
  ["Marketing", "Customer story template"],
  ["Marketing", "Case study outline"],
  ["Marketing", "Website update checklist"],
  ["Marketing", "Google Business Profile checklist"],
  ["Marketing", "Review response templates"],
  ["Marketing", "Referral campaign worksheet"],
  ["Marketing", "Trade show checklist"],
  ["Marketing", "Print collateral checklist"],
  ["Marketing", "Lead source tracker"],
  ["Marketing", "Marketing budget sheet"],
  ["Safety", "Safety meeting agenda"],
  ["Safety", "Safety meeting sign-in sheet"],
  ["Safety", "Incident report form"],
  ["Safety", "Near-miss report form"],
  ["Safety", "Job hazard analysis template"],
  ["Safety", "PPE checklist"],
  ["Safety", "Ladder safety checklist"],
  ["Safety", "Vehicle safety policy"],
  ["Safety", "Emergency contact sheet"],
  ["Safety", "Fire extinguisher inspection log"],
  ["Safety", "First aid kit inspection log"],
  ["Safety", "Weather delay policy"],
  ["Safety", "Return-to-work form"],
  ["Safety", "Safety training record"],
  ["Safety", "Site safety checklist"],
  ["Safety", "Accident follow-up checklist"],
  ["Field Work", "Pre-job site checklist"],
  ["Field Work", "Arrival script"],
  ["Field Work", "Photo documentation checklist"],
  ["Field Work", "Material pickup checklist"],
  ["Field Work", "Crew assignment sheet"],
  ["Field Work", "Daily field report"],
  ["Field Work", "Change order form"],
  ["Field Work", "Customer sign-off form"],
  ["Field Work", "Punch list template"],
  ["Field Work", "Quality control checklist"],
  ["Field Work", "Equipment return checklist"],
  ["Field Work", "End-of-day field closeout"],
  ["Field Work", "Job folder checklist"],
  ["Field Work", "Service route sheet"],
  ["Field Work", "Field training checklist"],
  ["Field Work", "Supervisor ride-along form"]
].map(([category, title], index) => ({
  id: index + 1,
  category,
  title,
  type: inferType(title)
}));

function inferType(title) {
  const lower = title.toLowerCase();
  if (lower.includes("dashboard")) return "Dashboard";
  if (lower.includes("calculator") || lower.includes("spreadsheet") || lower.includes("forecast") || lower.includes("budget")) return "Spreadsheet";
  if (lower.includes("email") || lower.includes("message") || lower.includes("letter") || lower.includes("script")) return "Template";
  if (lower.includes("log") || lower.includes("tracker") || lower.includes("record")) return "Log";
  if (lower.includes("form") || lower.includes("sheet") || lower.includes("scorecard") || lower.includes("survey")) return "Form";
  if (lower.includes("agenda") || lower.includes("policy") || lower.includes("handbook") || lower.includes("outline")) return "Document";
  return "Checklist";
}

const grid = document.querySelector("[data-resource-grid]");
const searchInput = document.querySelector("[data-resource-search]");
const filters = document.querySelector("[data-resource-filters]");
const visibleCount = document.querySelector("[data-visible-count]");
const totalCount = document.querySelector("[data-resource-count]");

if (grid && filters && searchInput) {
  const categories = ["All", ...new Set(resources.map((resource) => resource.category))];
  let activeCategory = "All";

  if (totalCount) totalCount.textContent = String(resources.length);
  if (visibleCount) visibleCount.textContent = String(resources.length);

  filters.innerHTML = categories.map((category) => {
    const active = category === "All" ? " is-active" : "";
    const count = category === "All" ? resources.length : resources.filter((resource) => resource.category === category).length;
    return `<button class="filter-button${active}" type="button" data-filter="${category}">${category}<span>${count}</span></button>`;
  }).join("");

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeCategory = button.dataset.filter;
    filters.querySelectorAll("[data-filter]").forEach((filter) => filter.classList.toggle("is-active", filter === button));
    renderResources();
  });

  searchInput.addEventListener("input", renderResources);
  renderResources();

  function renderResources() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = resources.filter((resource) => {
      const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
      const matchesSearch = !query || `${resource.title} ${resource.category} ${resource.type}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    if (visibleCount) visibleCount.textContent = String(filtered.length);
    grid.innerHTML = filtered.map((resource) => `
      <article class="resource-card">
        <div class="resource-card-top">
          <span>${resource.category}</span>
          <span>${resource.type}</span>
        </div>
        <h3>${resource.title}</h3>
        <a href="mailto:admin@cottonwoodharbor.com?subject=${encodeURIComponent(resource.title)}">Request this resource</a>
      </article>
    `).join("");
  }
}
