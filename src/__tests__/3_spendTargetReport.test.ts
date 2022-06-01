import invoices from "./testData/invoices";
import plan from "./testData/plan";
import spendTargetReport from "../3_spendTargetReport";
import { SpendTargetReportItem, TargetCategory } from "../types";


const expected: SpendTargetReportItem[] = [
  {
    category: "Core Supports",
    categorySpend: 1380,
    code: 1,
    initialBudget: 4800,
    remainingBudget: 3420,
    target: TargetCategory.OVERSPEND,
  },
  {
    category: "Home Care",
    categorySpend: 618,
    code: 3,
    initialBudget: 2400,
    remainingBudget: 1782,
    target: TargetCategory.ON_TRACK,
  },
  {
    category: "transport",
    categorySpend: 312,
    code: 15,
    initialBudget: 1560,
    remainingBudget: 1248,
    target: TargetCategory.UNDERSPEND,
  },
];

test("spend target report", () => {
  expect(spendTargetReport(plan, invoices)).toStrictEqual(expected);
});

