// import { React } from 'react';
// import { createRoot } from 'react-dom/client';
// import  Login from '../components/Login';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Dashboard from '../pages/Dashboard';

// function App(){
// 	const [isLoggedIn, setIsLoggedIn] = useState(false);
// 	return(
// 		<BrowserRouter>
// 			<Routes>
// 			   <Route exact path="/" element={<Login/>} />
// 				<Route exact path="/dashboard" element={<Dashboard/>} />
// 			</Routes>
// 		</BrowserRouter>
// 		);
// }

// if(document.getElementById('app')){
// 	createRoot(document.getElementById('app')).render(<App />)
// }

import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Login from "../components/Login";
import Dashboard from "../pages/Dashboard";
import CreateNPS from "../pages/Dashboard";
import SurveyEditor from "../pages/SurveyEditor";
import SurveyDisplay from "../pages/SurveyDisplay";
import SurveyTaker from "../pages/SurveyTaker";
import SurveyDashboardComponent from "../pages/SurveyDashboardComponent";
import TestPages from "../pages/TestPages";
import SurveyList from "../pages/SurveyList";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Login setIsLoggedIn={setIsLoggedIn} />}
                />
                {/* <Route path="/" element={<CreateNPS />} /> */}
                <Route
                    path="/dashboard"
                    element={<Dashboard setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route path="/SurveyEditor" element={<SurveyEditor />} />
                <Route path="/TestPages" element={<TestPages />} />
                <Route path="/SurveyDisplay/:id" element={<SurveyDisplay />} />
                <Route path="/SurveyTaker/:id" element={<SurveyTaker />} />
                <Route path="/SurveyDashboardComponent/:surveyId" element={<SurveyDashboardComponent />} />
                <Route path="/SurveyList" element={<SurveyList />} />


            </Routes>
        </BrowserRouter>
    );
}

if (document.getElementById("app")) {
    createRoot(document.getElementById("app")).render(<App />);
}
