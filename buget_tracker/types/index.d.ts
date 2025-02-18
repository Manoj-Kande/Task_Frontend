declare interface CategoryBadgeProps {
    category: string;
}

declare type Transaction = {
    id:number;
    name: string;
    type: string;
    amount: string;
    date: string;
    status:string;
    category:string;
};

declare type ExpenseCard={
    title:string,
    amount:string,
    description:string,
    logo:string
};

declare interface ExpenseCardProps{
    Expenseses:ExpenseCard[];
};

declare interface TransactionTableProps{
    transactions: Transaction[];
};

declare type category={
  title:string
};

declare interface ChartProps{
  title:string,
  categoryList:category[]
}