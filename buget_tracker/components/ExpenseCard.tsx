import React from "react";
import { MdOutlineBookmarks } from "react-icons/md";
import { FaPiggyBank } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

const ExpenseCard = ({ Expenseses }: ExpenseCardProps) => {
  return (
    <div className="flex flex-row mx-[6%] my-2 w-auto h-auto bg-[#F4F3F2] justify-around ">
      {Expenseses.map((e, index) => {
        return (
          <div key={index} className="justify-around my-3 h-[100%] w-[30%] bg-white py-2 rounded-[6px] ">
            
              <div className="flex flex-row items-center h-[30%] mt-2 bg-white">
                <p className="text-[14px] font-[600] pl-2 items-start bg-white">
                  {e.title}
                </p>
                {e.logo === "Categories" && (
                  <MdOutlineBookmarks className="w-10 place-self-center mr-4 bg-white" />
                )}
                {e.logo === "Monthly Budget" && (
                  <FaPiggyBank className="w-10 place-self-center mr-4 bg-white" />
                )}
                {e.logo === "Total Expenses" && (
                  <MdAttachMoney className="w-10 place-self-center mr-4 bg-white" />
                )}
              </div>
              <div>
                <p className="pl-2 text-[24px] font-bold h-auto bg-white">${e.amount}</p>
                <p className="pl-2 text-amber-800 text-[12px] pd-[20px] h-auto  bg-white">
                  {e.description}
                </p>
                
              </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseCard;
