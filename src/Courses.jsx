import { Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";


function Courses(){
    const [course,setCourse] = useState([]);

    useEffect(()=>{
        let response = axios.post("http://localhost:3000/admin/courses",{
            Headers:{
            'content-type': 'application/json',
            'Authorization' : 'bearer ' + localStorage.getItem('token')
            }

        }).then((res)=>{setCourse(res.data.courses)});
        
    },[])

    
    return <div style={{display:"flex",flexWrap: "wrap",justifyContent:"center"}}>
        Course
    
        {course.map(course => {return <Course course = {course}></Course>})}
    </div>
}

function  Course(props){
     return <Card style={{
     width:200,
     minHeight:300,
     margin:10}}
     >
        <Typography textAlign={"center"} variant="h5">
            {props.course.title}
            </Typography>
            
            <Typography variant="subtitle1" textAlign={"center"}>
            {props.course.description}
            
         </Typography>
        
         </Card>
        
}

export default Courses;