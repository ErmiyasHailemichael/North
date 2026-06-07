from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Preformatted
from reportlab.lib.enums import TA_LEFT

doc = SimpleDocTemplate("BubbleSort_Report.pdf", pagesize=letter,
                        rightMargin=inch, leftMargin=inch,
                        topMargin=inch, bottomMargin=inch)

styles = getSampleStyleSheet()
title_style = styles["Title"]
h2 = styles["Heading2"]
body = styles["BodyText"]
body.leading = 16
code_style = ParagraphStyle("code", fontName="Courier", fontSize=8,
                             leading=12, leftIndent=20)

def h(text): return Paragraph(text, h2)
def p(text): return Paragraph(text, body)
def space(): return Spacer(1, 0.15 * inch)
def code(text): return Preformatted(text, code_style)

story = []

story.append(Paragraph("Exploring and Optimizing Bubble Sort", title_style))
story.append(p("Ermi | Intermediate Development II | June 2026"))
story.append(space())

# --- Section 1 ---
story.append(h("1. Implementation"))
story.append(p(
    "Both a basic and an optimized version of Bubble Sort were implemented in Python. "
    "The basic version uses two nested loops to repeatedly compare and swap adjacent elements. "
    "The optimized version adds a swapped flag that stops the algorithm early if no swaps occur "
    "during a pass, indicating the array is already sorted."
))
story.append(space())
story.append(p("<b>Basic Bubble Sort:</b>"))
story.append(code(
"""def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # Each pass bubbles the next largest to its final position
        for j in range(0, n - i - 1):
            # Swap if left element is greater than right
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr"""
))
story.append(space())
story.append(p("<b>Optimized Bubble Sort:</b>"))
story.append(code(
"""def bubble_sort_optimized(arr):
    n = len(arr)
    for i in range(n):
        swapped = False  # Reset flag each pass
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:  # No swaps = already sorted, stop early
            break
    return arr"""
))
story.append(space())

# --- Section 2 ---
story.append(h("2. Test Cases and Outcomes"))
test_cases = [
    ("Random Array", "[37, 27, 28, 67, 10, 59, 54, 15]", "[10, 15, 27, 28, 37, 54, 59, 67]", "Sorted correctly."),
    ("Already Sorted", "[1, 2, 3, 4, 5, 6]", "[1, 2, 3, 4, 5, 6]", "No changes needed; optimized version exited after 1 pass."),
    ("Reverse Sorted", "[6, 5, 4, 3, 2, 1]", "[1, 2, 3, 4, 5, 6]", "Worst case; both versions required all 6 passes."),
    ("All Identical", "[7, 7, 7, 7, 7]", "[7, 7, 7, 7, 7]", "No swaps needed; optimized exited after 1 pass."),
    ("Empty Array", "[]", "[]", "Handled gracefully with no iterations."),
    ("Single Element", "[42]", "[42]", "Trivially sorted; 1 pass, no swaps."),
]
for label, inp, out, note in test_cases:
    story.append(p(f"<b>{label}</b> — Input: {inp} → Output: {out}<br/>{note}"))
    story.append(Spacer(1, 0.08 * inch))
story.append(space())

# --- Section 3 ---
story.append(h("3. Optimization — Performance Comparison"))
story.append(p(
    "The pass counts below demonstrate where the early-exit optimization provides measurable savings:"
))
rows = [
    ("Random Array",   "8", "7", "Saved 1 pass"),
    ("Already Sorted", "6", "1", "Saved 5 passes — best case benefit"),
    ("Reverse Sorted", "6", "6", "No difference — worst case"),
    ("All Identical",  "5", "1", "Saved 4 passes"),
    ("Empty Array",    "0", "0", "No difference"),
    ("Single Element", "1", "1", "No difference"),
]
story.append(code(
    f"{'Scenario':<20} {'Basic':>8} {'Optimized':>10}  Note\n" +
    "-" * 60 + "\n" +
    "\n".join(f"{r[0]:<20} {r[1]:>8} {r[2]:>10}  {r[3]}" for r in rows)
))
story.append(space())

# --- Section 4 ---
story.append(h("4. Complexity Analysis"))
story.append(p("<b>Time Complexity:</b>"))
story.append(p(
    "The basic Bubble Sort has O(n²) time complexity in both the average and worst cases. "
    "This arises from the two nested loops: the outer loop runs n times, and for each pass, "
    "the inner loop performs up to n-1 comparisons, yielding roughly n*(n-1)/2 total comparisons. "
    "In the best case (already sorted array), the optimized version detects no swaps on the first "
    "pass and exits immediately, achieving O(n) time."
))
story.append(space())
story.append(p("<b>Space Complexity:</b>"))
story.append(p(
    "Bubble Sort has O(1) space complexity. Sorting is performed in-place by swapping elements "
    "within the original array. No additional arrays or data structures are allocated, making it "
    "a memory-efficient in-place sorting algorithm."
))
story.append(space())
story.append(p("<b>Stability:</b>"))
story.append(p(
    "Bubble Sort is a stable sorting algorithm. Because elements are only swapped when one is "
    "strictly greater than its neighbor (arr[j] > arr[j+1]), equal elements are never swapped. "
    "This guarantees that elements with identical values retain their original relative order "
    "after sorting."
))
story.append(space())

# --- Section 5 ---
story.append(h("5. Observations and Conclusion"))
story.append(p(
    "The optimization had the most dramatic effect on already-sorted and uniform arrays, "
    "reducing passes from n down to 1. For reverse-sorted arrays, no benefit was gained "
    "because swaps occur on every pass. This confirms that the early-exit optimization is "
    "most valuable when the input is partially or fully sorted."
))
story.append(p(
    "Bubble Sort is best suited for small or nearly sorted datasets. For large datasets "
    "with random order, algorithms such as Merge Sort or Quick Sort (O(n log n)) are "
    "significantly more efficient."
))

doc.build(story)
print("Report generated: BubbleSort_Report.pdf")
