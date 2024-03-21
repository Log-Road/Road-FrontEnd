import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RankingPage from "../pages/RankingPage"
import Main from "../pages/Main";
import Login from "../pages/Login";
import SelectUser from "../pages/SelectUser";
import FindId from "../pages/FindID";
import FindPassWord from "../pages/FindPassWord"
import ChangePassWord from "../pages/ChangePassWord"

import TeacherPage from "../pages/TeacherPage"
import Personnel from "../pages/WritePage/Personnel";
import PersonalProject from "../pages/WritePage/PersonalProject";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/ranking" element={<RankingPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/selectuser" element={<SelectUser />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/write/personnel" element={<Personnel/>} />
        <Route path="/personnel" element={<PersonalProject/>} />
      </Routes>
    </BrowserRouter>
  )
}      