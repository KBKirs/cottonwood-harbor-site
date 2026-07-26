import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "sample-resources/spreadsheets";
await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();

const colors = {
  navy: "#08263F",
  teal: "#0F5B66",
  copper: "#B66A2E",
  cream: "#F7F3EC",
  white: "#FFFDF9",
  line: "#D9D1C4",
  muted: "#64707B",
  green: "#1F7A4D",
  yellow: "#B7791F",
  red: "#B42318",
};

function styleTitle(sheet, titleRange, subtitleRange, title, subtitle) {
  sheet.showGridLines = false;
  sheet.getRange(titleRange).merge();
  sheet.getRange(titleRange).values = [[title]];
  sheet.getRange(titleRange).format = {
    fill: colors.navy,
    font: { bold: true, color: colors.white, size: 20 },
    horizontalAlignment: "left",
    verticalAlignment: "center",
  };
  sheet.getRange(titleRange).format.rowHeight = 34;

  sheet.getRange(subtitleRange).merge();
  sheet.getRange(subtitleRange).values = [[subtitle]];
  sheet.getRange(subtitleRange).format = {
    fill: colors.cream,
    font: { color: colors.muted, size: 10 },
    horizontalAlignment: "left",
  };
  sheet.getRange(subtitleRange).format.rowHeight = 24;
}

function header(range) {
  range.format = {
    fill: colors.navy,
    font: { bold: true, color: colors.white },
    horizontalAlignment: "center",
    verticalAlignment: "center",
  };
  range.format.borders = { preset: "all", style: "thin", color: colors.line };
}

function body(range) {
  range.format = {
    fill: colors.white,
    font: { color: "#122234" },
    verticalAlignment: "center",
    wrapText: true,
  };
  range.format.borders = { preset: "all", style: "thin", color: colors.line };
}

function sectionLabel(range, label) {
  range.merge();
  range.values = [[label]];
  range.format = {
    fill: colors.teal,
    font: { bold: true, color: colors.white },
    horizontalAlignment: "left",
  };
  range.format.rowHeight = 24;
}

const dashboard = workbook.worksheets.add("Owner Dashboard");
styleTitle(
  dashboard,
  "A1:H1",
  "A2:H2",
  "Owner Dashboard Sample",
  "A weekly business review view for owners who need to know what deserves attention."
);

dashboard.getRange("A4:H4").values = [["Metric", "Current", "Target", "Status", "Prior Week", "Change", "Owner", "Next Action"]];
header(dashboard.getRange("A4:H4"));
dashboard.getRange("A5:H10").values = [
  ["Revenue", 48250, 45000, "Healthy", 43800, null, "Owner", "Review high-margin work and repeat lead source."],
  ["Gross Margin", 0.43, 0.4, "Healthy", 0.39, null, "Finance", "Confirm material costs on current jobs."],
  ["Open Issues", 7, 5, "Watch", 9, null, "Operations", "Clear two overdue customer follow-ups."],
  ["Team Capacity", 0.82, 0.85, "Watch", 0.78, null, "Manager", "Rebalance Thursday workload."],
  ["Overdue Work", 3, 0, "Needs Attention", 2, null, "Operations", "Escalate blocked work before noon."],
  ["Customer Satisfaction", 0.94, 0.95, "Watch", 0.92, null, "Customer", "Send follow-up on two recent service calls."],
];
dashboard.getRange("F5").formulas = [["=B5-E5"]];
dashboard.getRange("F5:F10").fillDown();
body(dashboard.getRange("A5:H10"));
dashboard.getRange("B5:B5").format.numberFormat = "$#,##0";
dashboard.getRange("B6:C6").format.numberFormat = "0%";
dashboard.getRange("B8:C8").format.numberFormat = "0%";
dashboard.getRange("B10:C10").format.numberFormat = "0%";
dashboard.getRange("E5:E5").format.numberFormat = "$#,##0";
dashboard.getRange("E6:E6").format.numberFormat = "0%";
dashboard.getRange("E8:E8").format.numberFormat = "0%";
dashboard.getRange("E10:E10").format.numberFormat = "0%";
dashboard.getRange("F5:F10").format.numberFormat = "0.0";
dashboard.getRange("A:H").format.autofitColumns();
dashboard.getRange("A:A").format.columnWidth = 20;
dashboard.getRange("B:G").format.columnWidth = 13;
dashboard.getRange("H:H").format.columnWidth = 42;
dashboard.freezePanes.freezeRows(4);

sectionLabel(dashboard.getRange("A13:H13"), "Harbor AI Brief Sample");
dashboard.getRange("A14:H17").merge();
dashboard.getRange("A14:H17").values = [[
  "Good morning. Revenue is ahead of target, but overdue work and team capacity need attention. Three work items are past due, two customer follow-ups are open, and Thursday appears overloaded. Recommended action: prioritize blocked work first, then rebalance the schedule before new work is accepted."
]];
dashboard.getRange("A14:H17").format = {
  fill: colors.white,
  font: { color: "#122234", size: 11 },
  wrapText: true,
  verticalAlignment: "top",
};
dashboard.getRange("A14:H17").format.borders = { preset: "all", style: "thin", color: colors.line };

const costing = workbook.worksheets.add("Job Costing Calculator");
styleTitle(
  costing,
  "A1:H1",
  "A2:H2",
  "Job Costing Calculator Sample",
  "A simple estimate worksheet that helps owners price work from labor, materials, overhead, and margin."
);
sectionLabel(costing.getRange("A4:H4"), "Inputs");
costing.getRange("A5:D12").values = [
  ["Input", "Value", "Notes", ""],
  ["Labor hours", 18, "Estimated field hours", ""],
  ["Labor rate", 65, "Loaded hourly labor cost", ""],
  ["Materials", 1250, "Expected materials and supplies", ""],
  ["Subcontractors", 350, "Outside labor or specialty vendor", ""],
  ["Overhead allocation", 0.12, "Percent of direct cost", ""],
  ["Target margin", 0.35, "Desired gross margin", ""],
  ["Contingency", 0.08, "Risk buffer", ""],
];
header(costing.getRange("A5:D5"));
body(costing.getRange("A6:D12"));
costing.getRange("B7:B9").format.numberFormat = "$#,##0";
costing.getRange("B10:B12").format.numberFormat = "0%";

sectionLabel(costing.getRange("A15:H15"), "Pricing Summary");
costing.getRange("A16:D22").values = [
  ["Output", "Formula", "Amount", "Decision"],
  ["Labor cost", "Labor hours x labor rate", null, ""],
  ["Direct cost", "Labor + materials + subcontractors", null, ""],
  ["Overhead", "Direct cost x overhead allocation", null, ""],
  ["Contingency", "Direct cost x contingency", null, ""],
  ["Total cost", "Direct + overhead + contingency", null, ""],
  ["Recommended price", "Total cost / (1 - margin)", null, "Review if market price is materially lower."],
];
header(costing.getRange("A16:D16"));
body(costing.getRange("A17:D22"));
costing.getRange("C17").formulas = [["=B6*B7"]];
costing.getRange("C18").formulas = [["=C17+B8+B9"]];
costing.getRange("C19").formulas = [["=C18*B10"]];
costing.getRange("C20").formulas = [["=C18*B12"]];
costing.getRange("C21").formulas = [["=C18+C19+C20"]];
costing.getRange("C22").formulas = [["=C21/(1-B11)"]];
costing.getRange("C17:C22").format.numberFormat = "$#,##0";
costing.getRange("A:H").format.autofitColumns();
costing.getRange("A:A").format.columnWidth = 22;
costing.getRange("B:B").format.columnWidth = 14;
costing.getRange("C:D").format.columnWidth = 34;

const cash = workbook.worksheets.add("Cash Flow Tracker");
styleTitle(
  cash,
  "A1:J1",
  "A2:J2",
  "Cash Flow Tracker Sample",
  "A rolling 8-week cash view that helps owners see shortfalls before they become emergencies."
);
cash.getRange("A4:J4").values = [["Week", "Starting Cash", "Expected Inflows", "Payroll", "Materials", "Other Expenses", "Net Change", "Ending Cash", "Minimum Target", "Status"]];
header(cash.getRange("A4:J4"));
cash.getRange("A5:J12").values = [
  ["Week 1", 18500, 14200, 7200, 3100, 2600, null, null, 15000, null],
  ["Week 2", null, 11300, 7200, 5200, 2100, null, null, 15000, null],
  ["Week 3", null, 17600, 7200, 4100, 2900, null, null, 15000, null],
  ["Week 4", null, 9200, 7200, 3800, 2500, null, null, 15000, null],
  ["Week 5", null, 15100, 7200, 4300, 2400, null, null, 15000, null],
  ["Week 6", null, 16400, 7200, 3900, 2700, null, null, 15000, null],
  ["Week 7", null, 13800, 7200, 4600, 2600, null, null, 15000, null],
  ["Week 8", null, 19200, 7200, 4200, 2800, null, null, 15000, null],
];
cash.getRange("B6").formulas = [["=H5"]];
cash.getRange("B6:B12").fillDown();
cash.getRange("G5").formulas = [["=C5-D5-E5-F5"]];
cash.getRange("G5:G12").fillDown();
cash.getRange("H5").formulas = [["=B5+G5"]];
cash.getRange("H5:H12").fillDown();
cash.getRange("J5").formulas = [["=IF(H5>=I5,\"Healthy\",IF(H5>=I5*0.85,\"Watch\",\"Needs Attention\"))"]];
cash.getRange("J5:J12").fillDown();
body(cash.getRange("A5:J12"));
cash.getRange("B5:I12").format.numberFormat = "$#,##0";
cash.getRange("A:J").format.autofitColumns();
cash.getRange("A:A").format.columnWidth = 12;
cash.getRange("B:I").format.columnWidth = 15;
cash.getRange("J:J").format.columnWidth = 18;
cash.freezePanes.freezeRows(4);

const preview = await workbook.render({
  sheetName: "Owner Dashboard",
  range: "A1:H17",
  scale: 1,
  format: "png",
});
await fs.writeFile(`${outputDir}/owner-dashboard-preview.png`, new Uint8Array(await preview.arrayBuffer()));

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "formula error scan",
});
console.log(errors.ndjson);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(`${outputDir}/harbor-vault-sample-business-dashboard.xlsx`);
