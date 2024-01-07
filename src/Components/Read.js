import React from "react";
import { Table, Button } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
  axios
    .get("https://6599635aa20d3dc41cefa760.mockapi.io/users-crud-postman")
    .then((res) => {
      setAPIData(res.data);
    });},
     []);

     const setData = (data) => {
      let { id, name, userName, email, password, phone, webSite, active } = data;
      localStorage.setItem('ID', id);
      localStorage.setItem('Name', name);
      localStorage.setItem('UserName', userName);
      localStorage.setItem('E-mail', email);
      localStorage.setItem('Password', password);
      localStorage.setItem('Phone Number', phone);
      localStorage.setItem('WebSite', webSite);
      localStorage.setItem('Active Value', active)   }

      const onDelete = (id) => {
          axios.delete(`https://6599635aa20d3dc41cefa760.mockapi.io/users-crud-postman/${id}`)
          .then(() => {
            getData();
        })
      }

      const getData = () => {
        axios.get(`https://6599635aa20d3dc41cefa760.mockapi.io/users-crud-postman`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
  return (
    <div>
    <Link to={'/create'}>
    <Button>Add User</Button>
    </Link>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>UserName</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Password</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
            <Table.HeaderCell>Active</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return(
              <Table.Row>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.userName}</Table.Cell>
              <Table.Cell>{data.email}</Table.Cell>
              <Table.Cell>{data.password}</Table.Cell>
              <Table.Cell>{data.phone}</Table.Cell>
              <Table.Cell>{data.webSite}</Table.Cell>
              <Table.Cell>{data.active ? 'Active' : 'Not Active'}</Table.Cell>
              <Link to='/update'>
              <Table.Cell>
                <Button onClick={() => setData(data)}>Update</Button>
              </Table.Cell>
              </Link>
              <Table.Cell>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
            )
          })}
          
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
