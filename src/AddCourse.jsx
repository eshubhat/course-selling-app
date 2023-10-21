import React from "react";
import NewCourseCard from "./NewCourseCard";
import Avatar from '@mui/material/Avatar';

function AddCourse(){

    return <>
        <div style={{
            background: '#eeeeee',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <NewCourseCard></NewCourseCard>
            
        </div>
    </>
}

export default AddCourse;