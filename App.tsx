
import Homework_17 from "./Homeworks/hw_17/Homework_17"; 
import Lesson_17 from "./Lessons/Lesson_17/Lesson_17"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import Layout from "./Lessons/Lesson_18/Project_15/Layout"
import Create_Employee from "./Lessons/Lesson_18/Project_15/Create_Employee/Create_Employee";
import Employees from "./Lessons/Lesson_18/Project_15/Employees/Employees";
import GlobalStyles from "styles/GlobalStyles";

function App() {
  return(
  <BrowserRouter>
    {/* <Lesson_17 /> */}
    <GlobalStyles />
    {/* <Homework_17 />  */}
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/create" />} />
        <Route path="/create" element={<Create_Employee />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </Layout>
  </BrowserRouter>
  )
}
export default App
