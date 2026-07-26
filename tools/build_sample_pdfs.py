from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
)


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "sample-resources" / "pdf"

NAVY = colors.HexColor("#08263F")
TEAL = colors.HexColor("#0F5B66")
COPPER = colors.HexColor("#B66A2E")
CREAM = colors.HexColor("#F7F3EC")
LINE = colors.HexColor("#D9D1C4")
INK = colors.HexColor("#122234")
MUTED = colors.HexColor("#5E6872")


def styles():
    base = getSampleStyleSheet()
    return {
        "kicker": ParagraphStyle(
            "Kicker",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.5,
            leading=11,
            textColor=COPPER,
            uppercase=True,
            spaceAfter=8,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=base["Title"],
            fontName="Times-Bold",
            fontSize=25,
            leading=28,
            textColor=NAVY,
            alignment=0,
            spaceAfter=8,
        ),
        "subtitle": ParagraphStyle(
            "Subtitle",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=11,
            leading=15,
            textColor=MUTED,
            spaceAfter=18,
        ),
        "h2": ParagraphStyle(
            "H2",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=12,
            leading=15,
            textColor=NAVY,
            spaceBefore=14,
            spaceAfter=8,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.6,
            leading=13.4,
            textColor=INK,
            spaceAfter=7,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.2,
            leading=10.5,
            textColor=MUTED,
        ),
    }


def add_brand_header(canvas, doc):
    canvas.saveState()
    width, height = letter
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.7)
    canvas.line(doc.leftMargin, height - 0.62 * inch, width - doc.rightMargin, height - 0.62 * inch)
    canvas.setFont("Helvetica-Bold", 8)
    canvas.setFillColor(NAVY)
    canvas.drawString(doc.leftMargin, height - 0.48 * inch, "COTTONWOOD HARBOR")
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(width - doc.rightMargin, height - 0.48 * inch, "Helping Businesses Run Better")
    canvas.setFont("Helvetica", 8)
    canvas.drawRightString(width - doc.rightMargin, 0.46 * inch, f"Page {doc.page}")
    canvas.restoreState()


def table(data, widths, header=True):
    t = Table(data, colWidths=widths, hAlign="LEFT")
    style = [
        ("GRID", (0, 0), (-1, -1), 0.45, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("FONTNAME", (0, 0), (-1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 8.4),
        ("LEADING", (0, 0), (-1, -1), 10.5),
        ("TEXTCOLOR", (0, 0), (-1, -1), INK),
    ]
    if header:
        style += [
            ("BACKGROUND", (0, 0), (-1, 0), NAVY),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ]
    t.setStyle(TableStyle(style))
    return t


def check_rows(items):
    return [["", item, "", ""] for item in items]


def build_pdf(filename, title, subtitle, sections):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    path = OUT_DIR / filename
    doc = SimpleDocTemplate(
        str(path),
        pagesize=letter,
        rightMargin=0.72 * inch,
        leftMargin=0.72 * inch,
        topMargin=0.88 * inch,
        bottomMargin=0.7 * inch,
    )
    s = styles()
    story = [
        Paragraph("Sample Resource", s["kicker"]),
        Paragraph(title, s["title"]),
        Paragraph(subtitle, s["subtitle"]),
    ]

    for idx, section in enumerate(sections):
        if section.get("page_break_before") and idx:
            story.append(PageBreak())
        story.append(Paragraph(section["heading"], s["h2"]))
        if section.get("body"):
            story.append(Paragraph(section["body"], s["body"]))
        if section.get("table"):
            story.append(table(section["table"]["data"], section["table"]["widths"], section["table"].get("header", True)))
            story.append(Spacer(1, 12))
        if section.get("note"):
            story.append(
                table(
                    [[Paragraph(f"<b>{section['note'][0]}</b><br/>{section['note'][1]}", s["body"])]],
                    [6.55 * inch],
                    header=False,
                )
            )
            story.append(Spacer(1, 10))

    doc.build(story, onFirstPage=add_brand_header, onLaterPages=add_brand_header)
    return path


def main():
    checkbox_header = ["Done", "Action", "Owner", "Notes"]

    build_pdf(
        "daily-startup-checklist.pdf",
        "Daily Startup Checklist",
        "A practical opening routine for teams that need the day to start the same way every time.",
        [
            {
                "heading": "Purpose",
                "body": "Use this checklist at the beginning of each workday to confirm people, priorities, schedule, equipment, customer commitments, and open issues are clear before work begins.",
            },
            {
                "heading": "Daily Startup Checks",
                "table": {
                    "data": [checkbox_header]
                    + check_rows(
                        [
                            "Review today's calendar, appointments, job starts, and customer deadlines.",
                            "Confirm staffing, attendance, call-outs, and coverage gaps.",
                            "Identify high-priority work that must be completed today.",
                            "Check open customer issues that require follow-up before noon.",
                            "Review overdue work, blocked work, and waiting items.",
                            "Confirm vehicles, equipment, supplies, tools, and required documents.",
                            "Review safety concerns, weather risks, or site-specific hazards.",
                            "Send the daily priorities update to the team.",
                        ]
                    ),
                    "widths": [0.45 * inch, 3.55 * inch, 1.08 * inch, 1.48 * inch],
                },
            },
            {
                "heading": "Today's Attention List",
                "table": {
                    "data": [
                        ["Priority", "Item", "Decision Needed", "Due"],
                        ["Critical", "", "", ""],
                        ["High", "", "", ""],
                        ["Medium", "", "", ""],
                        ["Waiting", "", "", ""],
                    ],
                    "widths": [0.9 * inch, 2.35 * inch, 2.15 * inch, 1.15 * inch],
                },
            },
            {
                "heading": "Close the Loop",
                "note": (
                    "Manager review",
                    "The day should not begin until priorities, blockers, and customer commitments are visible to the people responsible for the work.",
                ),
            },
        ],
    )

    build_pdf(
        "new-hire-onboarding-checklist.pdf",
        "New Hire Onboarding Checklist",
        "A structured first-week checklist that helps new employees understand expectations, systems, people, and daily routines.",
        [
            {
                "heading": "Before Day One",
                "table": {
                    "data": [checkbox_header]
                    + check_rows(
                        [
                            "Send welcome email with start time, location, dress expectations, and contact person.",
                            "Prepare workspace, tools, account access, uniform, vehicle, or equipment if applicable.",
                            "Assign onboarding owner and first-week point of contact.",
                            "Print or share role description, training checklist, and company policies.",
                            "Schedule first-week check-ins with manager and trainer.",
                        ]
                    ),
                    "widths": [0.45 * inch, 3.75 * inch, 1.1 * inch, 1.28 * inch],
                },
            },
            {
                "heading": "First Day",
                "table": {
                    "data": [checkbox_header]
                    + check_rows(
                        [
                            "Review company purpose, standards, and how the role helps customers.",
                            "Complete employment documents, payroll details, and required acknowledgements.",
                            "Walk through daily schedule, communication norms, and escalation paths.",
                            "Introduce team members, key customers or accounts, and support contacts.",
                            "Confirm the first assignment and what good completion looks like.",
                        ]
                    ),
                    "widths": [0.45 * inch, 3.75 * inch, 1.1 * inch, 1.28 * inch],
                },
            },
            {
                "heading": "First Week Check-In",
                "table": {
                    "data": [
                        ["Question", "Notes"],
                        ["What is clear so far?", ""],
                        ["Where does the employee need more support?", ""],
                        ["What should be practiced again?", ""],
                        ["What is the next milestone?", ""],
                    ],
                    "widths": [2.2 * inch, 4.35 * inch],
                },
            },
        ],
    )

    build_pdf(
        "customer-complaint-handling-script.pdf",
        "Customer Complaint Handling Script",
        "A simple customer workflow for acknowledging concerns, gathering facts, setting next steps, and closing the loop professionally.",
        [
            {
                "heading": "Purpose",
                "body": "Use this script when a customer is frustrated, disappointed, confused, or asking for escalation. The goal is to slow the situation down, show ownership, understand the issue, and define the next responsible action.",
            },
            {
                "heading": "Conversation Flow",
                "table": {
                    "data": [
                        ["Step", "Say / Do", "Outcome"],
                        ["1. Acknowledge", "Thank you for telling us. I understand why that would be frustrating.", "Customer feels heard before problem-solving begins."],
                        ["2. Clarify", "Can I confirm what happened and what result you expected?", "Facts are separated from assumptions."],
                        ["3. Own next step", "Here is what I am going to do next, and when you will hear from me.", "Customer knows the path forward."],
                        ["4. Document", "Record issue, customer impact, owner, deadline, and promised follow-up.", "Team has a clear internal record."],
                        ["5. Close loop", "Confirm what was resolved and ask if anything remains open.", "The issue ends cleanly."],
                    ],
                    "widths": [1.05 * inch, 3.25 * inch, 2.25 * inch],
                },
            },
            {
                "heading": "Issue Record",
                "table": {
                    "data": [
                        ["Field", "Response"],
                        ["Customer", ""],
                        ["Issue summary", ""],
                        ["Impact", ""],
                        ["Owner", ""],
                        ["Promised follow-up date", ""],
                        ["Resolution", ""],
                    ],
                    "widths": [1.65 * inch, 4.9 * inch],
                },
            },
            {
                "heading": "Escalation Rule",
                "note": (
                    "Escalate quickly",
                    "If the issue involves safety, legal exposure, payment dispute, repeated service failure, or a customer threatening public action, notify the owner or manager immediately.",
                ),
            },
        ],
    )


if __name__ == "__main__":
    main()
