# Introduction

At TShirt Ventures, we help participants manage their National Disabilty Insurance Scheme funds. This involves deducting invoice balances from a participants fund and tracking how the spending over time.

In the `/data` directory there are two files.

- `plan.js` has a participants plan.
- `invoices.js` has that invoices that have been incurred against that participant.

Our web app needs to display some reports which you are about to build with us. 😀

# Initial installation:

- run `yarn` in the root directory, to grab jest and it's many, many dependencies.

# Tests:

In the `__tests__` directory, there are some tests that are ready to go.
Run the tests with `yarn test`

# Task 1:

Our participants need a budget summary.
Produce the following summary for all the invoices:

```js
{
  initialBudget: 8760,
  invoicesTotal: 2310,
  remainingBudget: 6450,
}
```

# Task 2:

We just realised we need to display the individual categories too!
Produce the following summary for 3 months of invoices:

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

# Task 3

The plan budget is for 12 months.
The invoices are for January, February and March.

Create a report to show whether a category is 'overspent', 'underspent' or 'ontrack' for the period of January thru March.

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
