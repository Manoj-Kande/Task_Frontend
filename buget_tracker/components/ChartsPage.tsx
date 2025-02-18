import React from 'react';
import Chart from './Chart';


const ChartsPage = () => {


  const ChartData = [
    {
      title: "Monthly Expenses",
      categoryList: [
        { title: "Revenue" },
        { title: "Expenses" },
        { title: "Profit" },
      ],
    },
    {
      title: "Category BreakDown",
      categoryList: [
        { title: "Revenue" },
        { title: "Expenses" },
        { title: "Profit" },
      ],
    }
  ];

  return (
    <div className='child mt-[2%] w-auto mx-[6%] h-[50%] border-2 border-black flex flex-row justify-around'>
      {
        ChartData.map((data, id) => (
          <div key={id} className='w-[40%] h-[80%] my-10 flex flex-col justify-evenly border-2 border-black'>
            <p className='text-black font-bold px-4 py-3'>{data.title}</p>
            <div className='h-[90%] w-[90%] mx-[10%] mb-4 '>
              <Chart title={data.title} categoryList={data.categoryList} />
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ChartsPage;
