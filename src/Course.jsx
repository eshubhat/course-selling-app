import { Button, Card, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { atom } from "recoil";
import axios from "axios";




function Course(){
    const {courseId} = useParams();
    const [courses,setCourse] = useState([])
    

    useEffect(()=>{
        let response =axios.post('http://localhost:3000/admin/courses',{
            headers:{
                'content-type': 'application/json',
                'Authorization' : 'bearer ' + localStorage.getItem('token'),
            }
        }).then((res) =>{setCourse(res.courses)});
    },[])

    let course = courses.find((course)=> {
        if(course.id == courseId){
            return course;
    }});
    

    return <div>
            {console.log(course)}
            <Courses courses = {course} />
            <UpdateCourse courses={course}/>
            
    </div>
}

function  Courses(props){
    return <div style={{display:"flex",flexWrap: "wrap",justifyContent:"center"}}>
    
    <Card style={{
    width:300,
    minHeight:250,
    margin:10}}
    >
        {console.log(props)}
       <Typography textAlign={"center"} variant="h5">
           {props.courses.title}
           </Typography>
           
           <Typography variant="subtitle1" textAlign={"center"}>
           {props.courses.description}
           
        </Typography>
       
        </Card>
       </div>
}

function UpdateCourse(props){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return <div>

    <Card style={{width: 350, padding: 25, margin:10}}>
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
            }}>
                <br />
                </TextField>

            <Button style={{
                marginTop:10
            }}
            variant="contained" size="medium"
            onClick={async ()=>{
                let response = await axios.post('http://localhost:3000/admin/courses/'+ props.course.id,{
                        title: title,
                        description: description,

                        Headers:{
                            'Content-type':'application/json',
                            'Authorization' : 'bearer '+localStorage.getItem('token')
                        }
                })
                alert('Course updated')
                
              }}>Update Course</Button>
                </Card>
                </div>
}



export default Course;

const courseState = atom({
    key:'courseState',
    default:''
});