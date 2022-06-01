import { Invoice, Month } from "../../types";

const invoices: Invoice[] = [
  {
    provider: "George's shopping services",
    date: Month.JAN,
    amount: 445,
    code: 1,
  },
  {
    provider: "George's shopping services",
    date: Month.FEB,
    amount: 392,
    code: 1,
  },
  {
    provider: "George's shopping services",
    date: Month.MAR,
    amount: 543,
    code: 1,
  },
  {
    provider: "Ability co support services",
    date: Month.JAN,
    amount: 237,
    code: 3,
  },
  {
    provider: "Ability co support services",
    date: Month.FEB,
    amount: 136,
    code: 3,
  },
  {
    provider: "Ability co support services",
    date: Month.MAR,
    amount: 245,
    code: 3,
  },
  {
    provider: "Uber",
    date: Month.JAN,
    amount: 174,
    code: 15,
  },
  {
    provider: "CabCharge",
    date: Month.JAN,
    amount: 138,
    code: 15,
  },
];

export default invoices;
