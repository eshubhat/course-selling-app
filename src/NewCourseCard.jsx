import React from "react";
import Card from '@mui/material/Card';
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";


function NewCourseCard(props){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");


    return <div style={{display: "flex", justifyContent: "center"}}>
        <Card variant="outlined" style={{width: 350, padding: 25, margin:100}}>
            <div>
                <TextField
                
                id="standard-multiline-static"
                variant="standard"
                
                fullWidth= {true}
                label=""
                placeholder="Title"
                multiline
                maxRows={6}
                onChange={(data)=>{
                setTitle(data.target.value);
            }}>
                <br />
                </TextField>
            
            <TextField 
                id="standard-multiline-static"
                variant="standard"
                
                fullWidth= {true}
                label=""
                placeholder="Description"
                multiline
                maxRows={6}
                onChange={(data)=>{
                setDescription(data.target.value);
          }}/>
          <br />
          <Button style={{
                marginTop:10
            }}
          variant="contained" size="large"
          onClick={async ()=>{

            let response = await axios.post("http://localhost:3000/admin/courses",{

                title:title,
                description:description,

                Headers:{
                    'Content-type':'application/json',
                    'Authorization' : 'bearer '+ localStorage.getItem('token')
                }

            })
            alert('Course Added');
          }}>Add Course</Button>

            </div>
             
        </Card>

    </div>
}

export default NewCourseCard;