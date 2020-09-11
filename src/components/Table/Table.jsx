import React from 'react';
import { Table } from 'reactstrap';
import './table.css'
const Tables = (props) => {
  return (
    <Table  className='tables'>
      <thead>
        <tr>
          <th className='header'>LoginId</th>
          <th className='header'>First Name</th>
          <th className='header'>Last Name</th>
          <th className='header'>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th  scope="row">1</th>
          <td>Ahmed </td>
          <td>Raza</td>
          <td>ahmedraza@gmail.com</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Usama</td>
          <td>NoorUddin</td>
          <td>usama@gmail.com</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Afif</td>
          <td>Khan</td>
          <td>afif@gmail.com</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;