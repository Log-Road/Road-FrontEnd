import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RankingPage from "../pages/RankingPage"
import Main from "../pages/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/ranking" element={<RankingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}