
export const transactionCategoryStyles = {
    "Food and Drink": {
      borderColor: "border-pink-600",
      backgroundColor: "bg-pink-500",
      textColor: "text-pink-700",
      chipBackgroundColor: "bg-inherit",
    },
    Payment: {
      borderColor: "border-green-600",
      backgroundColor: "bg-green-600",
      textColor: "text-green-700",
      chipBackgroundColor: "bg-inherit",
    },
    "Bank Fees": {
      borderColor: "border-green-600",
      backgroundColor: "bg-green-600",
      textColor: "text-green-700",
      chipBackgroundColor: "bg-inherit",
    },
    Transfer: {
      borderColor: "border-red-700",
      backgroundColor: "bg-red-700",
      textColor: "text-red-700",
      chipBackgroundColor: "bg-inherit",
    },
    Processing: {
      borderColor: "border-gray-200",
      backgroundColor: "bg-gray-500",
      textColor: "text-gray-700",
      chipBackgroundColor: "bg-gray-200",
    },
    Success: {
      borderColor: "border-green-500",
      backgroundColor: "bg-green-500",
      textColor: "text-green-700",
      chipBackgroundColor: "bg-green-100",
    },
    Travel: {
      borderColor: "border-blue-700",
      backgroundColor: "bg-blue-500",
      textColor: "text-blue-700",
      chipBackgroundColor: "bg-blue-100",
    },
    default: {
      borderColor: "border-gray-400",
      backgroundColor: "bg-blue-500",
      textColor: "text-blue-700",
      chipBackgroundColor: "bg-inherit",
    },
  };
  
 
  

  export const fetchTransactions = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/transaction/get");
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      return [];
    }
  };
  



  export const Transaction=[
    {
      id: 1,
      name: "Invoice #001",
      type: "Payment",
      amount: "150.00",
      date: "2025-02-01",
      status: "Success",
      category: "Food and Drink",
    },
    {
      id: 2,
      name: "Invoice #002",
      type: "Transfer",
      amount: "-200.00",
      date: "2025-02-02",
      status: "Processing",
      category: "Payment",
    },
    {
      id: 3,
      name: "Invoice #003",
      type: "Payment",
      amount: "250.00",
      date: "2025-02-03",
      status: "Success",
      category: "Bank Fees",
    },
    {
      id: 4,
      name: "Invoice #004",
      type: "Transfer",
      amount: "-100.00",
      date: "2025-02-04",
      status: "Success",
      category: "Transfer",
    },
    {
      id: 5,
      name: "Invoice #005",
      type: "Payment",
      amount: "300.00",
      date: "2025-02-05",
      status: "Success",
      category: "Food and Drink",
    },
    {
      id: 6,
      name: "Invoice #006",
      type: "Processing",
      amount: "-50.00",
      date: "2025-02-06",
      status: "Processing",
      category: "Bank Fees",
    },
    {
      id: 7,
      name: "Invoice #007",
      type: "Payment",
      amount: "350.00",
      date: "2025-02-07",
      status: "Success",
      category: "Success",
    },
    {
      id: 8,
      name: "Invoice #008",
      type: "Transfer",
      amount: "-400.00",
      date: "2025-02-08",
      status: "Processing",
      category: "Transfer",
    },
    {
      id: 9,
      name: "Invoice #009",
      type: "Payment",
      amount: "120.00",
      date: "2025-02-09",
      status: "Success",
      category: "Food and Drink",
    },
    {
      id: 10,
      name: "Invoice #010",
      type: "Transfer",
      amount: "-500.00",
      date: "2025-02-10",
      status: "Success",
      category: "Travel",
    },
  ];
  
  