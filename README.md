# TShirt Ventures tech exercise

Hey! Congrats on the interview progress!

We need your help to get our tests passing.

While doing this. Remember to:
- Share your thoughts and think the problem out aloud.
- Ask clarifying questions to make sure you are building the correct thing.

You can get the tests passing by implementing [3_spendTargetReport.ts](./src/3_spendTargetReport.ts) to convert a plan and invoices into a spending report for the period JAN through MAR. 

The report will tell us whether we have under spent, over spent or on track for each of the plan items.

For example:
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