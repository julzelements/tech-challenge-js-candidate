import { Invoice, Plan, SpendTargetReportItem, TargetCategory } from "./types";

const spendTargetReport = (plan: Plan, invoices: Invoice[]): SpendTargetReportItem[] => {
    /**
     * TODO
     * 
     * Given a plan and invoices.
     * 
     * We need you to generate a spending report for the period JAN through MAR 
     * to calculate whether we have under spent, over spent or on track for each of our plan items.
     * 
     * For example:
     * [
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
     * 
     * 
     * 
     * 
     * Run `npm test` to test your solution
     * 
     */

    return null;
};

export default spendTargetReport;
