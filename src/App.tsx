

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import Layout from "./Lessons/Lesson_18/Project_15/Layout"

import Employees from "./components/Loyaut/Emploeyees/Employees";
import GlobalStyles from "./styles/GlobalStyles";

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
