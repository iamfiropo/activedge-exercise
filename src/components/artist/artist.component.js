import React from 'react';
import ReactTable from "react-table";
import './artist.styles.css';
import "react-table/react-table.css";

const Artist = ({ artists }) => {
  const columns = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'UserName',
      accessor: 'username'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      id: 'artistAddress',
      Header: 'Address',
      accessor: add => add.address.street + ' ' + add.address.suite + ' ' + add.address.city,
    },
    {
      Header: 'Phone',
      accessor: 'phone'
    }
]

  return (<ReactTable
    data={artists}
    columns={columns}
  />)
}

export default Artist;
