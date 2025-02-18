
import { fetchTransactions } from "@/constants";
import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdDelete } from "react-icons/md";

import CategoryBadge from "@/components/CategoryBadge";
const TransactionsTable = () => {

  const [transactions,setTransactions]=useState([]);
  const getTransactions=async ()=>{
    try{  
        const data=await fetchTransactions();
        setTransactions(data);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getTransactions();
  },[]);

  const handleDelete = async (id: string) => {
  try {
    
    const response = await fetch(`http://localhost:4000/api/transaction/delete/${id}`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Delete successful:", result);
    getTransactions();
  } catch (error) {
    console.error("Delete failed:", error);
  }
};

  return (
    <div className=" ">
      <div className="px-[6%]">
        <Table className=" h-auto border-2">
          <TableHeader className="bg-white h-[50px] ">
            <TableRow className="grid grid-cols-6 ">
              <TableHead className="px-2 ">Transaction</TableHead>
              <TableHead className="px-2 ">Amount</TableHead>
              <TableHead className="px-2 ">Status</TableHead>
              <TableHead className="px-2 ">Date</TableHead>
              <TableHead className="px-2  max-md:hidden ">Category</TableHead>
              <TableHead className="px-2">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {transactions.map((t: Transaction) => {
              // console.log(t._id);
              const { _id: id, category, date, amount, name, status } = t;
              return (
                <TableRow
                  key={id}
                  className="w-full grid grid-cols-6  h-[40px]"
                >
                  <TableCell className="pl-2 pr-10">
                    <div className="flex items-center gap-3">
                      <h1 className="text-14 font-semibold text-[#344054]">
                        {name}
                      </h1>
                    </div>
                  </TableCell>

                  <TableCell
                    className={`pl-2 pr-10 font-semibold ${
                      amount[0] === "-" ? "text-[#f04438]" : "text-[#039855]"
                    }`}
                  >
                    {t.amount[0] == "-"
                      ? `-$${Math.abs(parseInt(amount))}`
                      : `$${Math.abs(parseInt(amount))}`}
                  </TableCell>

                  <TableCell className="pl-2 pr-10 ">
                    <div className="flex items-center gap-3">
                      <CategoryBadge category={status} />
                    </div>
                  </TableCell>

                  <TableCell className="min-w-32 pl-2 pr-10">{date}</TableCell>

                  <TableCell className="pl-2 w-auto pr-10 max-md:hidden">
                    {category}
                  </TableCell>
                  <TableCell>
                    <button
                      className="relative z-10 cursor-pointer"
                      onClick={() => handleDelete(id)}
                    >
                      <MdDelete className="w-5 h-5" />
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionsTable;
