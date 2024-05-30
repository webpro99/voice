import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import LOGO from "../Assets/Images/LOGO.png";
import UserLogo from "../Assets/Images/UserLogo.png";
import Program from "../Assets/Images/Program.png";
import Survey from "../Assets/Images/Survey.png";
import create from "../Assets/Images/create.png";

const RightNavBar = () => {
    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    const [data, setData] = useState("");

    const section = [
        {
            Image: UserLogo,
            title: "Dashboard",
            link: "/dashboard",
        },
        {
            Image: UserLogo,
            title: "Users",
            link: "/#",
        },
        {
            Image: Program,
            title: "Program",
            link: "/#",
        },
        {
            Image: Survey,
            title: "Surveys",
            link: "/SurveyList",
        },
         {
            Image: create,
            title: "Create Survey",
            link: "/SurveyEditor",
        },
    ];

    return (
        <>
            <Box
                style={{
                    background: "black",
                    display: medium ? "none" : "",
                }}
            >
                <Box ml={3} mt={5} mb={4}>
                    <Link to="/">
                        <img
                            style={{
                                width: "100px",
                                height: "23px",
                                cursor: "pointer",
                            }}
                            src={LOGO}
                            alt="Logo"
                        />
                    </Link>
                </Box>
                {section.map((item, i) => (
                    <Box
                        key={i}
                        onClick={() => setData(item.title)}
                        mt={2}
                        style={{
                            background: data === item.title ? "#E2FF6614" : "",
                            color: data === item.title ? "#D6F551" : "white",
                            padding: "10px 20px",
                            fontWeight: "500",
                            fontSize: "20px",
                            cursor: "pointer",
                            fontFamily: "Public Sans",
                        }}
                    >
                        <Link to={item.link} style={{ textDecoration: "none", color: "inherit" }}>
                            <span>
                                <img src={item.Image} alt={item.title} />
                            </span>
                            &nbsp; &nbsp;{item.title}
                        </Link>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default RightNavBar;
