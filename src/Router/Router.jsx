import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RankingPage from "../pages/RankingPage";
import Main from "../pages/Main";
import Login from "../pages/Login";
import SelectUser from "../pages/SelectUser";
import FindId from "../pages/FindID";
import FindPassWord from "../pages/FindPassWord";
import ChangePassWord from "../pages/ChangePassWord";
import ChangeEmail from "../pages/ChangeEmail";
import ChangeStudentID from "../pages/ChangeStudentID";
import InformationPersonnel from "../pages/Admin/InformationPersonnel";
import StudentInfoEdit from "../pages/Admin/StudentInfoEdit";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selectUser" element={<SelectUser />} />
        <Route path="/findID" element={<FindId />} />
        <Route path="/findPassWord" element={<FindPassWord />} />
        <Route path="/changePassWord" element={<ChangePassWord />} />
        <Route path="/changeEmail" element={<ChangeEmail />} />
        <Route path="/changeStudentID" element={<ChangeStudentID />} />
        <Route path="/informationPersonnel" element={<InformationPersonnel />}/>
        <Route path="/studentInfoEdit" element={<StudentInfoEdit/>} />
      </Routes>
    </BrowserRouter>
  );
}
