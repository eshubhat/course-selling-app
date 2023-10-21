import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

 
function Appbar(){
    const navigate = useNavigate();
    const [userEmail,setuserEmail] = useState(null);
    

    useEffect(()=>{
        axios.get('http://localhost:3000/admin/me',{
            Headers:{
                "Content-type":'application/json',
            "Authorization":'Bearer ' + localStorage.getItem('token')
            }
        }).then((res)=>{setuserEmail(res.username)})

       
        
    },[])

    if(userEmail){
        return <div>
        <div style={{

            display:'flex',
            justifyContent:'space-between',
            padding: 5
        }}>
            <div>
            <Typography variant = {"h6"}>
                E-Course
                </Typography>
                
            </div>
            <div style={{display:'flex'}}>
                <Button variant="outlined" size='small' onClick={()=>{
                    navigate('/courses');
                }}>Courses</Button>

                <Button variant="outlined" size='small' onClick={()=>{
                    navigate('/addcourse');
                }}>AddCourse</Button>

            
                <Button 
                variant={'outlined'}
                onClick={()=>{
                    localStorage.setItem('token',null);
                    window.location = '/';
                    navigate('/signin');
                    
                }}
                >Logout</Button>            
            </div>

        </div>
        
    </div>
    }

    return <div>
        <div style={{

            display:'flex',
            justifyContent:'space-between',
            padding: 5
        }}>
            <div>
            <Typography variant = {"h6"}>
                E-Course
                </Typography>
                
            </div>
            <div>
                <Button style={{
                    marginRight: 5
                }} 
                variant={'outlined'}
                onClick={()=>{
                    navigate('/signup')
                    
                }}
                >Signup</Button>
                <Button 
                variant={'outlined'}
                onClick={()=>{
                    navigate('/signin');
                    
                }}
                >Signin</Button>            
            </div>

        </div>
        
    </div>
}

export default Appbar;