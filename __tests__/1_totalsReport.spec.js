const invoices = require("../data/invoices");
const plan = require("../data/plan");
const totalsReport = require("../src/totalsReport");

const expected = {
  initialBudget: 8760,
  invoicesTotal: 2310,
  remainingBudget: 6450,
};

test.skip("totals report", () => {
  expect(totalsReport(plan, invoices)).toStrictEqual(expected);
});
