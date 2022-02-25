// import React from 'react'
// import styled from "styled-components";
// const Widget=styled.div`
 
//     flex: 2;
//     -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
//     box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
//     padding: 20px;
//   }
  
//   .widgetLgTitle {
//     font-size: 22px;
//     font-weight: 600;
//   }
  
//   .widgetLgTable{
//     width: 100%;
//     border-spacing: 20px;
//   }
  
//   .widgetLgTh{
//     text-align: left;
//   }
  
//   .widgetLgUser{
//     display: flex;
//     align-items: center;
//     font-weight: 600;
//   }
  
//   .widgetLgImg {
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     object-fit: cover;
//     margin-right: 10px;
//   }
  
//   .widgetLgDate,.widgetLgAmount{
//     font-weight: 300;
//   }
  
//   .widgetLgButton {
//     padding: 5px 7px;
//     border: none;
//     border-radius: 10px;
//   }
  
//   .widgetLgButton.Approved{
//       background-color: #e5faf2;
//       color: #3bb077;
//   }
//   .widgetLgButton.Declined{
//       background-color: #fff0f1;
//       color: #d95087;
  
//   }
//   .widgetLgButton.Pending{
//       background-color: #ebf1fe;
//       color: #2a7ade;
  
//   } 
//  `
  
// function widgetLg() {
//     const Button = ({ type }) => {
//         return <button className={"widgetLgButton " + type}>{type}</button>;
//       };
//   return (
//     <Widget>
//     <h3 className="widgetLgTitle">Latest admissions</h3>
//     <table className="widgetLgTable">
//       <tr className="widgetLgTr">
//         <th className="widgetLgTh">Student</th>
//         <th className="widgetLgTh">Date</th>
//         <th className="widgetLgTh">Marks</th>
//         <th className="widgetLgTh">Status</th>
//       </tr>
//       <tr className="widgetLgTr">
//         <td className="widgetLgUser">
//           <img
//             src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//             alt=""
//             className="widgetLgImg"
//           />
//           <span className="widgetLgName">Susan Carol</span>
//         </td>
//         <td className="widgetLgDate">2 Jun 2021</td>
//         <td className="widgetLgAmount">356</td>
//         <td className="widgetLgStatus">
//           <Button type="Approved" />
//         </td>
//       </tr>
//       <tr className="widgetLgTr">
//         <td className="widgetLgUser">
//           <img
//             src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//             alt=""
//             className="widgetLgImg"
//           />
//           <span className="widgetLgName">Susan Carol</span>
//         </td>
//         <td className="widgetLgDate">3 Jun 2021</td>
//         <td className="widgetLgAmount">222</td>
//         <td className="widgetLgStatus">
//           <Button type="Declined" />
//         </td>
//       </tr>
//       <tr className="widgetLgTr">
//         <td className="widgetLgUser">
//           <img
//             src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//             alt=""
//             className="widgetLgImg"
//           />
//           <span className="widgetLgName">Susan Carol</span>
//         </td>
//         <td className="widgetLgDate">12 Jun 2021</td>
//         <td className="widgetLgAmount">256</td>
//         <td className="widgetLgStatus">
//           <Button type="Pending" />
//         </td>
//       </tr>
//       <tr className="widgetLgTr">
//         <td className="widgetLgUser">
//           <img
//             src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//             alt=""
//             className="widgetLgImg"
//           />
//           <span className="widgetLgName">Susan Carol</span>
//         </td>
//         <td className="widgetLgDate">2 Jun 2021</td>
//         <td className="widgetLgAmount">323</td>
//         <td className="widgetLgStatus">
//           <Button type="Approved" />
//         </td>
//       </tr>
//     </table>
//   </Widget>
//   )
// }

// export default widgetLg