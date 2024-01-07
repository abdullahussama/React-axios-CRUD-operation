import React from 'react'
import { useEffect,useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Update = () => {


  const [name,setName] = useState('');
  const [userName,setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [phone,setPhone] = useState('');
  const [webSite,setWebsite] = useState('');
  const [active,setActive] = useState(false);
  const [id, setID] = useState(null);
  useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setUserName(localStorage.getItem('UserName'));
        setEmail(localStorage.getItem('E-mail'));
        setPassword(localStorage.getItem('password'));
        setPhone(localStorage.getItem('Phone Number'));
        setWebsite(localStorage.getItem('WebSite'));
        setActive(localStorage.getItem('Checkbox Value'))
}, []);


let navigate = useNavigate();

const updateAPIData = () => {
  axios.put(`https://6599635aa20d3dc41cefa760.mockapi.io/users-crud-postman/${id}`, {
    name,
    userName,
    email,
    password,
    phone,
    webSite,
    active,
}).then(() => {
  navigate('/read')
})
}
  return (
    <Form className="create-form">
        <Form.Field>
            <label>Name</label>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>UserName</label>
            <input type="text" placeholder='UserName' value={userName} onChange={(e)=> setUserName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Phone</label>
            <input type="text" placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>WebSite</label>
            <input type="text" placeholder='WebSite' value={webSite} onChange={(e)=>setWebsite(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <Checkbox label='Active' checked={active} onChange={(e)=>setActive(!active)}/>
        </Form.Field>
        <Button type='submit' onClick={updateAPIData}>Update</Button>
    </Form>

  )
}

export default Update;
