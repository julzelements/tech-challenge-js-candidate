import invoices from "./testData/invoices";
import plan from "./testData/plan";
const spendTargetReport = require("../src/3_spendTargetReport");

describe('spendTargetReport', () => {
  const expected = [
    {
      category: "Core Supports",
      categorySpend: 1380,
      code: 1,
      initialBudget: 4800,
      remainingBudget: 3420,
      target: "OVERSPEND",
    },
    {
      category: "Home Care",
      categorySpend: 618,
      code: 3,
      initialBudget: 2400,
      remainingBudget: 1782,
      target: "ON_TRACK",
    },
    {
      category: "transport",
      categorySpend: 312,
      code: 15,
      initialBudget: 1560,
      remainingBudget: 1248,
      target: "UNDERSPEND",
    },
  ];

  test("spend target report", () => {
    expect(spendTargetReport(plan, invoices)).toStrictEqual(expected);
  });
});
