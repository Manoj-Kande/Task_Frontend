import React from "react";
import ExpenseCard from "./ExpenseCard";
import { fetchTransactions } from "@/constants";
import { useEffect, useState } from "react";
const FrontPage = () => {
  const [transactions, setTransactions] = useState([]);

  const expenseCardProps = [
    {
      title: "Groceries",
      amount: "150.00",
      description: "Weekly grocery shopping for the family.",
      logo: "Total Expenses",
    },
    {
      title: "Rent",
      amount: "1200.00",
      description: "Monthly rent payment for the apartment.",
      logo: "Monthly Budget",
    },
    {
      title: "Electricity Bill",
      amount: "80.00",
      description: "Electricity bill for the month.",
      logo: "Categories",
    },
  ];
  return <ExpenseCard Expenseses={expenseCardProps}></ExpenseCard>;
};

export default FrontPage;
