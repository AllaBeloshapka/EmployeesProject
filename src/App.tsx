

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles";
import Employees from "./components/Loyaut/Employees/Employees";
import Create_Employee from "./components/Loyaut/Create_Employee/Create_Employee";
import Layout from "./components/Loyaut/Layout";

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
