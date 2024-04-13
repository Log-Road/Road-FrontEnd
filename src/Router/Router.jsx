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
import ClubManagement from "../pages/Admin/ClubManagement";
import ClubAdd from "../pages/Admin/ClubAdd";
import ClubUpdate from "../pages/Admin/ClubUpdate";
import AwardAdd from "../pages/Admin/AwardAdd";
import ContestManagement from "../pages/Admin/ContestManagement";
import ContestAdd from "../pages/Admin/ContestAdd";
import AwardRegister from "../pages/Admin/AwardRegister";

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
        <Route path="/clubManagement" element={<ClubManagement/>} />
        <Route path="/clubAdd" element={<ClubAdd/>} />
        <Route path="/clubUpdate" element={<ClubUpdate/>} />
        <Route path="/awardAdd" element={<AwardAdd/>} />
        <Route path="/contestManagement" element={<ContestManagement/>} />
        <Route path="/contestAdd" element={<ContestAdd/>} />
        <Route path="/awardRegister" element={<AwardRegister/>} />
      </Routes>
    </BrowserRouter>
  );
}
