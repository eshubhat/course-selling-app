import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card,Typography} from '@mui/material';
import { useState } from "react";
import axios from 'axios';

function Signup(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return <div>
            
                <div style={{
                    paddingTop:200,
                    marginBottom:10,
                    display: 'flex',
                    justifyContent: 'center'}}>
                        <Typography variant = {"h5"}>
                        Welcome to E-course. Sign up below 
                        </Typography>
                       
                </div>
            
        
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
        <Card variant="outlined" style={{width: 400, padding: 25} }>
            <div>
            <TextField 
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            fullWidth = {true}
            label="Email / mobile number" 
            variant="outlined"
             />
            <br /><br />
            <TextField 
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            fullWidth = {true}
            label="Password" 
            variant="outlined"
            type='password'
            />
            <br /><br />
            <Button 
            variant="outlined" 
            size='large'
            onClick={()=>{
                axios.post('http://localhost:3000/admin/signup',{
                    username:email,
                    password:password
                }).then((res)=>{localStorage.setItem("token",res.token)})
                window.location = '/';
            }
            }>Signup</Button>
            </div>
            </Card>
        </div>
    </div>
    
}

export default Signup;