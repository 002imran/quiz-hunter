import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
 
} from "recharts";


const Statistics = () => {
    const statistics = useLoaderData();
    // console.log(statistics);
    return (
      <div>
        <h2>Hello</h2>
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-2 lg:row-gap-8">
          {statistics.data.map((quizCard) =>  quizCard )}
        </div>
        <div>

          <BarChart width={500} height={300} data={statistics}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
          </BarChart>
        </div>
      </div>
    );
};

export default Statistics;