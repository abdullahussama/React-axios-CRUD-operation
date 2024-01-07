import { useState } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import  axios  from "axios";
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [name,setName] = useState('');
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [webSite,setWebsite] = useState('');
    const [active,setActive] = useState(false);

    let navigate = useNavigate();

    const postData = ()=>{
        axios.post("https://6599635aa20d3dc41cefa760.mockapi.io/users-crud-postman",{
            name,
            userName,
            email,
            password,
            phone,
            webSite,
            active,
        }).then(() => {
            navigate('/read')
        });
    };
  return (
    
    <Form className="create-form">
        <Form.Field>
            <label>Name</label>
            <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>UserName</label>
            <input type="text" placeholder='UserName' onChange={(e)=> setUserName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Phone</label>
            <input type="text" placeholder='Phone' onChange={(e)=>setPhone(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>WebSite</label>
            <input type="text" placeholder='WebSite' onChange={(e)=>setWebsite(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <Checkbox label='Active' onChange={(e)=>setActive(!active)}/>
        </Form.Field>
        <Button type='submit' onClick={postData}>Submit</Button>
    </Form>
    
  );
};

export default Create;
