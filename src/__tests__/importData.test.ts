import invoices from "./testData/invoices";
import plan from "./testData/plan";

test("should import invoices", () => {
  expect(invoices[0].date).toBe("JAN");
  expect(invoices[0].provider).toBe("George's shopping services");
  expect(invoices[0].code).toBe(1);
  expect(invoices[0].total).toBe(445);
});

test("should import plan", () => {
  expect(plan.givenName).toBe("Carol");
  expect(plan.familyName).toBe("Danvers");
  expect(plan.planItems[0].code).toBe(1);
  expect(plan.planItems[0].category).toBe("Core Supports");
  expect(plan.planItems[0].total).toBe(4800);
});
