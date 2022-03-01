import "./studentReportsList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { reportsRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
// import styled from "styled-components"

// const studentsListstudents = styled.div`
//   display: flex;
//   align-items: center;
// `

// const studentModify = styled.div`
//   .studentsListEdit{
//     border: none;
//     border-radius: 10px;
//     padding: 5px 10px;
//     background-color: #3bb077;
//     color: white;
//     cursor: pointer;
//     margin-right: 20px;
// }

// .studentsListDelete{
//     color: red;
//     cursor: pointer;
// }
// `
// const studentsList = styled.div`
//   width: 100%;
// `


export default function StudentsReportsList() {
  const [data, setData] = useState(reportsRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "FullName",
      headerName: "StudentName",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="studentsListstudents">
            {/* <img className="studentsListImg" src={params.row.avatar} alt="" /> */}
            {params.row.studentsname}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "AggregateGrade",
      headerName: "Report",
      width: 120,
    },
    {
      field: "attendance",
      headerName: "Attendance",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/studentsReports/" + params.row.id}>
              <button className="studentsListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="studentsListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="studentsList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

















































