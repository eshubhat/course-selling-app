import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from "./Appbar.jsx";
import Signup from "./Signup.jsx";
import Signin from './Signin.jsx';
import AddCourse from './AddCourse.jsx';
import Courses from './Courses.jsx';
import Course from './Course.jsx'
import { RecoilRoot,atom,selector,useRecoilState,useRecoilValue } from 'recoil';

function App() {


  return (
    // <>
      <div style={{
        width: '100vw',
        height: '100vh',
        background:'#eeeeee',
      }}>

        <RecoilRoot>
        <Router>
        <Appbar />
            <Routes>
                <Route path = '/addcourse' element = {<AddCourse />} />
                <Route path = '/signin' element={<Signin />} />
                <Route path = '/signup' element={<Signup />} />
                <Route path = '/courses' element={<Courses />} />
                <Route path = '/course/:courseId' element={<Course />} />
                            
            </Routes>
        </Router>
        </RecoilRoot>
      </div>
    /* </> */
  )
}

export default App;
