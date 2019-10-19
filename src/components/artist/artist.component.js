import React from 'react';
import ReactTable from "react-table";
import './artist.styles.css';
import "react-table/react-table.css";

const Artist = ({ artists, onHandleDisplayAlbum }) => {
  const columns = [
    {
      Header: 'User ID',
      accessor: 'id',
      width: 100,
      maxWidth: 100,
      minWidth: 100
    },
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
    },
    {
      Header: 'Actions',
      Cell: props => (
        <button
        onClick={() => {
          onHandleDisplayAlbum(props.original.id)
        }}
        >Album</button>
      ),
      width: 100,
      maxWidth: 100,
      minWidth: 100
    }
]

  return (<ReactTable
    data={artists}
    columns={columns}
    showPagination={false}
    noDataText={'Please wait...'}
    />)
}

export default Artist;
