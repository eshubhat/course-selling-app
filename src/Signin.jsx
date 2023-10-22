import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card,Typography} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

function Signin(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    return <div>
            
                <div style={{
                    paddingTop:200,
                    marginBottom:10,
                    display: 'flex',
                    justifyContent: 'center'}}>
                        <Typography variant = {"h5"}>
                        Welcome back to E-Course
                        </Typography>
                       
                </div>
            
        
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
        <Card variant="outlined" style={{width: 400, padding: 25} }>
            <div>
            <TextField 
            fullWidth = {true}
            id="outlined-basic" 
            label="Email / mobile number" 
            variant="outlined"
            onChange={(data)=>{
                setUsername(data.target.value);
            }}
             />
            <br /><br />
            <TextField 
            fullWidth = {true}
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            type='password'
            onChange={(data)=>{
                setPassword(data.target.value);
            }}
            />
            <br /><br />
            <Button variant="outlined" size='large'
            onClick={()=>{

                axios.post('http://localhost:3000/admin/login',{
                    username:username,
                    password:password

                }).then((res)=>{localStorage.setItem('token',res.token)});
                window.location = "/";
                }}>Signin</Button>
            </div>
            </Card>
        </div>
    </div>
    
}

export default Signin;