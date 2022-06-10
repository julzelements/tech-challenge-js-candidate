# Introduction

At TShirt Ventures, we help participants manage their National Disabilty Insurance Scheme funds. 
NDIS particpants have a funding plan which specifies which funds can be spent in which categories.
A plan specifies funds for a 12 month period.
Funds do not carry over into the next year, ideally a participant will spend all thier money in each category by the end of the year.
We help our participants track the fund spending over time, to see if they are over spending or underspending.


In the `/data` directory there are two files.

- `plan.js` has a participants plan.
- `invoices.js` has that invoices that have been incurred against that participant.

# Task 1: Category Totals Report

Our participants need a budget summary.
This will help them see how much they have spent and how much they have left in thier plan.
They also need to track the spending in each category, so they do not overspend or underspend in each category.

Produce the following summary for all the invoices:

```js
[
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
```
# Task 2: 

The plan budget is for 12 months.
The invoices are for January, February and March.
Create a report to show whether a category is 'overspent', 'underspent' or 'ontrack' for the period of January thru March.

Before you begin, discuss briefly with your interviewers to define the critera for 'overspent', 'underspent' or 'ontrack' spending.

```js
[
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
```