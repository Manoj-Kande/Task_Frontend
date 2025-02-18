"use client";
import Transactions from "./(transactions)/page";
import FrontPage from "@/components/FrontPage";
import Charts from "@/components/ChartsPage";
import { useState } from "react";

export default function Home() {
  const [formFlag,setFormFlag]=useState(false);
  console.log(formFlag);
  return (
    <div className="parent relative" >
     <FrontPage></FrontPage> 
     <Charts></Charts>
     <div className=" my-[2%] mx-[6%] w-auto h-[8%] border-2  flex flex-row-reverse rounded-[22px]" >
        <button className=" w-[20%]  h-[80%]  mt-1 mx-[12%] bg-sky-600/50 rounded-[22px]" 
        onClick={()=>setFormFlag(true)}
        >Add Transaction </button>
     </div>
     <Transactions/>
      {/* Add transaction and edit transaction */}
      {/* {
        formFlag && (
          <div className="absolute  top-[89%] left-[6%]  w-[50%] h-[50%] " >
              
          </div>
        )
      } */}
    </div>


    
  );
}

