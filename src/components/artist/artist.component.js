import React from 'react';
import ReactTable from "react-table";
import './artist.styles.css';
import "react-table/react-table.css";

const Artist = ({ artists }) => {
  const {name, email, phone} = artists;
  console.log('**********', artists);
  const columns = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Phone',
      accessor: 'phone'
    }
]

  return <ReactTable
    artists={artists}
    columns={columns}
  />
}

export default Artist;
