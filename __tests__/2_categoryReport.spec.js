const invoices = require("../data/invoices");
const plan = require("../data/plan");
const categoryReport = require("../src/categoryReport");

const expected = [
  {
    category: "Core Supports",
    code: 1,
    initialBudget: 4800,
    categorySpend: 1380,
    remainingBudget: 3420,
  },
  {
    category: "Home Care",
    code: 3,
    initialBudget: 2400,
    categorySpend: 618,
    remainingBudget: 1782,
  },
  {
    category: "transport",
    code: 15,
    initialBudget: 1560,
    categorySpend: 312,
    remainingBudget: 1248,
  },
];

test.skip("category totals report", () => {
  expect(categoryReport(plan, invoices)).toStrictEqual(expected);
});
