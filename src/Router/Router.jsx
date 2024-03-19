import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RankingPage from "../pages/RankingPage"
import Main from "../pages/Main";
import Login from "../pages/Login";
import SelectUser from "../pages/SelectUser";
import FindId from "../pages/FindID";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/ranking" element={<RankingPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/selectuser" element={<SelectUser />} />
        <Route path="/findID" element={<FindId />} />
      </Routes>
    </BrowserRouter>
  )
}      