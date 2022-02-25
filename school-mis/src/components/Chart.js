// import React from 'react'
// import styled from "styled-components";
// import {
//     LineChart,
//     Line,
//     XAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
//   } from "recharts";
  
//  const Chart = styled.div`
//  margin: 20px;
//  padding: 20px;
//  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
//  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

 
 
  
//   .chartTitle {
//     margin-bottom: 20px;
//   }
//   `
  
// function Chartt({ title, data, dataKey, grid }) {
//   return (
//     <Chart>
//     <h3 className="chartTitle">{title}</h3>
//     <ResponsiveContainer width="100%" aspect={4 / 1}>
//       <LineChart data={data}>
//         <XAxis dataKey="name" stroke="#5550bd" />
//         <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
//         <Tooltip />
//         {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
//       </LineChart>
//     </ResponsiveContainer>
//   </Chart>

//   )
// }

// export default Chartt