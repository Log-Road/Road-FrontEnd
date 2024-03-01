import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RankingPage from "../pages/RankingPage"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ranking" element={<RankingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}