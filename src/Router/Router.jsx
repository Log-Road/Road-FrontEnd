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
import ContestManagement from "../pages/Admin/ContestManagement/ContestManagement";
import ContestDetailsManagement from "../pages/Admin/ContestDetailsManagement";
import AwardRegister from "../pages/Admin/AwardRegister";
import TeacherPage from "../pages/TeacherPage"
import Personnel from "../pages/WritePage/Personnel";
import PersonalProject from "../pages/WritePage/PersonalProject";
import MarkDown from "../pages/WritePage/MarkDown";
import SelectEvent from "../pages/WritePage/SelectEvent";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selectuser" element={<SelectUser />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/find" element={<FindId/>}/>
        <Route path="/write/personnel" element={<Personnel/>} />
        <Route path="/personnel" element={<PersonalProject/>} />
        <Route path="/markdown" element={<MarkDown/>} />
        <Route path="/selectEvent" element={<SelectEvent/>} />
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
        <Route path="/contestManagement" element={<ContestManagement/>} />
        <Route path="/contestDetailsManagement" element={<ContestDetailsManagement/>} />
        <Route path="/awardRegister" element={<AwardRegister/>} />
      </Routes>
    </BrowserRouter>
  );
}
