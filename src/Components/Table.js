import React from "react";
import data from "../data/employeeRecords.json";
import companyData from "../data/company.json";
import { useParams } from "react-router-dom";

function Table() {
  const param = useParams();

  console.log("param", param.id);
  console.log("data", data);

  const employeeRecord = data.filter((d) => d.companyId === Number(param.id));

  console.log("employeeRecord", employeeRecord);
  const company = companyData.find((d) => d.id === Number(param.id));
  return (
    <div>
      <div className="Header">{company?.title}</div>
      <table className="table">
        <thead>
          <tr>
            <th className="t-head">Employee ID </th>
            <th className="name t-head">Name</th>
            <th className="email t-head">Email </th>
            <th className="t-head">DOJ</th>
            <th className="t-head">Age</th>
            <th className="t-head">DOB</th>
            <th className="t-head">Gender</th>
            <th className="t-head">Phone No</th>
            <th className="t-head">Role</th>
            <th className="t-head">Experience</th>
          </tr>
        </thead>

        {employeeRecord.map((val, key) => {
          return (
            <tbody>
              <tr key={key}>
                <td>{val.employeeId}</td>
                <td className="name">{val.name}</td>
                <td>{val.email}</td>
                <td>{val.doj}</td>
                <td>{val.age}</td>
                <td>{val.dob}</td>
                <td>{val.gender}</td>
                <td>{val.contacts}</td>
                <td>{val.role}</td>
                <td>{val.experence}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
