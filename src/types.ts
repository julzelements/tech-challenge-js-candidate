import spendTargetReport from "./3_spendTargetReport";

export interface Plan {
    givenName: string,
    familyName: string,
    planItems: PlanItem[]
};

export interface PlanItem {
    category: string,
    code: number,
    yearlyBudget: number,
};

export interface Invoice {
    provider: string,
    date: Month,
    amount: number,
    code: number,   
};

export enum Month {
    JAN = "JAN",
    FEB = "FEB",
    MAR = "MAR"
};

export interface SpendTargetReport {
    category: string,
    categorySpend: number,
    code: number,
    initialBudget: number,
    remainingBudget: number,
    target: TargetCategory,
};

export enum TargetCategory {
    UNDERSPEND = "UNDERSPEND",
    ON_TRACK = "ON_TRACK",
    OVERSPEND = "OVERSPEND"
}