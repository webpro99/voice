import { React, useState } from "react";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import SearchBar from "../components/ResuableComponent/SearchBar";
// import LOGO from "../Assets/Images/LOGO.svg";
// import Correct from "../Assets/Images/Correct.svg";

const Questions = ({ setPage }) => {
    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    const [isHovered, setIsHovered] = useState("");
    const [data, setData] = useState(false);
    const [number, setNumber] = useState("");
    const [select, setSelect] = useState("");
    const [message, setMessage] = useState("");
    let boxNumber = [
        {
            number: "01",
        },
        {
            number: "02",
        },
        {
            number: "03",
        },
        {
            number: "04",
        },
        {
            number: "05",
        },
        {
            number: "06",
        },
        {
            number: "07",
        },
        {
            number: "08",
        },
    ];
    return (
        <>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Grid container>
                    <Grid item lg={11} md={11} sm={11} xs={11} mx="auto">
                        <SearchBar />
                    </Grid>
                    <Grid
                        style={{
                            background: medium ? "black" : "#161616",
                            paddingTop: medium ? "0px" : "60px",
                            paddingBottom: "160px",
                            borderRadius: "20px",
                            fontFamily: "Inter",
                            marginBottom: "50px",
                        }}
                        item
                        lg={11}
                        md={11}
                        sm={11}
                        xs={11}
                        mx="auto"
                    >
                        <Box
                            ml={1}
                            style={{
                                textAlign: "center",
                                color: "#E2FF66",
                                fontWeight: "600",
                                fontSize: "20px",
                            }}
                        >
                            Question # 01
                        </Box>
                        {message === "enter" ? (
                            <Box
                                style={{
                                    color: "red",
                                    textAlign: "center",
                                    // position: "absolute",
                                    // zIndex: "10",
                                }}
                            >
                                Please Select a number
                            </Box>
                        ) : (
                            ""
                        )}
                        <Grid container>
                            {/* <Grid item lg={3} ></Grid> */}
                            <Grid
                                style={{ color: "white" }}
                                item
                                lg={6}
                                md={8}
                                sm={8}
                                xs={8}
                                mx="auto"
                            >
                                <Box
                                    style={{
                                        textAlign: "center",
                                        lineHeight: "22.85px",
                                    }}
                                    mt={3}
                                >
                                    Based on your last activity at [Rest_name] ,
                                    How likely you are to recommend [Rest_name]
                                    to your friends and families?
                                </Box>

                                <Box
                                    mt={2}
                                    style={{
                                        textDecoration: "underline",
                                        textAlign: "center",
                                        color: "#979797",
                                        fontSize: "14px",
                                        lineHeight: "18.45px",
                                    }}
                                >
                                    How we calculate the NPS?
                                </Box>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item
                                    lg={10}
                                    md={11}
                                    sm={11}
                                    xs={11}
                                    mx="auto"
                                >
                                    <Grid container>
                                        <Grid
                                            item
                                            lg={0.6}
                                            md={0.6}
                                            sm={0.6}
                                            xs={0}
                                        ></Grid>
                                        <Grid
                                            item
                                            lg={1}
                                            md={1}
                                            sm={1}
                                            xs={1.2}
                                        >
                                            <Box
                                                // mr={0.4}
                                                // onMouseEnter={() => setIsHovered("01")}
                                                // onMouseLeave={() => setIsHovered("")}
                                                onClick={() => {
                                                    setNumber("01");
                                                    setData(true);
                                                    setMessage("");
                                                }}
                                                mt={2}
                                                className="form-control"
                                                style={{
                                                    padding: medium
                                                        ? "-5px -5px"
                                                        : "10px",

                                                    borderColor:
                                                        number === "01"
                                                            ? "#E2FF66"
                                                            : "#626262",

                                                    background: "#161616",
                                                    textAlign: "center",
                                                    color: "#DDDDDD",
                                                    borderRadius: "10px",
                                                    cursor: "pointer",
                                                    height: medium
                                                        ? "32px"
                                                        : "",
                                                    fontSize: medium
                                                        ? "10px"
                                                        : "",
                                                    marginRight: "2px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                01
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={0.2}
                                            md={0.2}
                                            sm={0.2}
                                            xs={0.1}
                                        ></Grid>
                                        <Grid
                                            item
                                            lg={1}
                                            md={1}
                                            sm={1}
                                            xs={1.2}
                                        >
                                            <Box
                                                // onMouseEnter={() => setIsHovered('02')}
                                                // onMouseLeave={() => setIsHovered('')}
                                                onClick={() => {
                                                    setNumber("02");
                                                    setData(true);
                                                    setMessage("");
                                                }}
                                                mt={2}
                                                mr={0.4}
                                                className="form-control"
                                                style={{
                                                    padding: medium
                                                        ? "-5px -5px"
                                                        : "10px",

                                                    borderColor:
                                                        number === "02"
                                                            ? "#E2FF66"
                                                            : "#626262",

                                                    background: "#161616",
                                                    // textAlign: "center",
                                                    color: "#DDDDDD",
                                                    borderRadius: "10px",
                                                    cursor: "pointer",
                                                    height: medium
                                                        ? "32px"
                                                        : "",
                                                    fontSize: medium
                                                        ? "10px"
                                                        : "",
                                                    marginRight: "2px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                02
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={0.2}
                                            md={0.2}
                                            sm={0.2}
                                            xs={0.1}
                                        ></Grid>
                                        <Grid
                                            item
                                            lg={1}
                                            md={1}
                                            sm={1}
                                            xs={1.2}
                                        >
                                            <Box
                                                // onMouseEnter={() => setIsHovered("03")}
                                                // onMouseLeave={() => setIsHovered("")}
                                                onClick={() => {
                                                    setData(true);
                                                    setNumber("03");
                                                    setMessage("");
                                                }}
                                                mt={2}
                                                mr={1}
                                                className="form-control"
                                                style={{
                                                    padding: medium
                                                        ? "-5px -5px"
                                                        : "10px",

                                                    borderColor:
                                                        number === "03"
                                                            ? "#E2FF66"
                                                            : "#626262",

                                                    background: "#161616",
                                                    textAlign: "center",
                                                    color: "#DDDDDD",
                                                    borderRadius: "10px",
                                                    cursor: "pointer",
                                                    height: medium
                                                        ? "32px"
                                                        : "",
                                                    fontSize: medium
                                                        ? "10px"
                                                        : "",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                03
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={0.2}
                                            md={0.2}
                                            sm={0.2}
                                            xs={0.1}
                                        ></Grid>
                                        <Grid
                                            item
                                            lg={1}
                                            md={1}
                                            sm={1}
                                            xs={1.2}
                                        >
                                            <Box
                                                // onMouseEnter={() => setIsHovered("04")}
                                                // onMouseLeave={() => setIsHovered("")}
                                                onClick={() => {
                                                    setData(true);
                                                    setNumber("04");
                                                }}
                                                mt={2}
                                                mr={1}
                                                className="form-control"
                                                style={{
                                                    padding: medium
                                                        ? "-5px -5px"
                                                        : "10px",

                                                    borderColor:
                                                        number === "04"
                                                            ? "#E2FF66"
                                                            : "#626262",

                                                    background: "#161616",
                                                    textAlign: "center",
                                                    color: "#DDDDDD",
                                                    borderRadius: "10px",
                                                    cursor: "pointer",
                                                    height: medium
                                                        ? "32px"
                                                        : "",
                                                    fontSize: medium
                                                        ? "10px"
                                                        : "",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                04
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={0.2}
                                            md={0.2}
                                            sm={0.2}
                                            xs={0.1}
                                        ></Grid>
                                        <Grid
                                            item
                                            lg={1}
                                            md={1}
                                            sm={1}
                                            xs={1.2}
                                        >
                                            {" "}
                                            <Box
                                                // onMouseEnter={() => setIsHovered("05")}
                                                // onMouseLeave={() => setIsHovered("")}
                                                onClick={() => {
                                                    setData(true);
                                                    setNumber("05");
                                                    setMessage("");
                                                }}
                                                mt={2}
                                                mr={1}
                                                className="form-control"
                                                style={{
                                                    padding: medium
                                                        ? "-5px -5px"
                                                        : "10px",

                                                    borderColor:
                                                        number === "05"
                                                            ? "#E2FF66"
                                                            : "#626262",

                                                    background: "#161616",
                                                    textAlign: "center",
                                                    color: "#DDDDDD",
                                                    borderRadius: "10px",
                                                    cursor: "pointer",
                                                    height: medium
                                                        ? "32px"
                                                        : "",
                                                    fontSize: medium
                                                        ? "10px"
                                                        : "",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                05
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={0.2}
                                            md={0.2}
                                            sm={0.2}
                                            xs={0.1}
                                        ></Grid>
                                        <Grid
                                            item
                                            lg={1}
                                            md={1}
                                            sm={1}
                                            xs={1.2}
                                        >
                                            <Box
                                                // onMouseEnter={() => setIsHovered("05")}
                                                // onMouseLeave={() => setIsHovered("")}
                                                onClick={() => {
                                                    setData(true);
                                                    setNumber("06");
                                                    setMessage("");
                                                }}
                                                mt={2}
                                                mr={1}
                                                className="form-control"
                                                style={{
                                                    padding: medium
                                                        ? "-5px -5px"
                                                        : "10px",

                                                    borderColor:
                                                        number === "06"
                                                            ? "#E2FF66"
                                                            : "#626262",

                                                    background: "#161616",
                                                    textAlign: "center",
                                                    color: "#DDDDDD",
                                                    borderRadius: "10px",
                                                    cursor: "pointer",
                                                    height: medium
                                                        ? "32px"
                                                        : "",
                                                    fontSize: medium
                                                        ? "10px"
                                                        : "",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                06
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={0.2}
                                            md={0.2}
                                            sm={0.2}
                                            xs={0.1}
                                        ></Grid>
                                        <Grid
                                            item
                                            lg={1}
                                            md={1}
                                            sm={1}
                                            xs={1.2}
                                        >
                                            <Box
                                                // onMouseEnter={() => setIsHovered("08")}
                                                // onMouseLeave={() => setIsHovered(false)}
                                                onClick={() => {
                                                    setData(true);
                                                    setNumber("07");
                                                }}
                                                mt={2}
                                                mr={1}
                                                className="form-control"
                                                style={{
                                                    padding: medium
                                                        ? "-5px -5px"
                                                        : "10px",

                                                    borderColor:
                                                        number === "07"
                                                            ? "#E2FF66"
                                                            : "#626262",

                                                    background: "#161616",
                                                    textAlign: "center",
                                                    color: "#DDDDDD",
                                                    borderRadius: "10px",
                                                    cursor: "pointer",
                                                    height: medium
                                                        ? "32px"
                                                        : "",
                                                    fontSize: medium
                                                        ? "10px"
                                                        : "",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                07
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={0.2}
                                            md={0.2}
                                            sm={0.2}
                                            xs={0.1}
                                        ></Grid>
                                        <Grid
                                            item
                                            lg={1}
                                            md={1}
                                            sm={1}
                                            xs={1.2}
                                        >
                                            {" "}
                                            <Box
                                                onClick={() => {
                                                    setData(true);
                                                    setNumber("09");
                                                    setMessage("");
                                                }}
                                                mt={2}
                                                mr={1}
                                                className="form-control"
                                                style={{
                                                    padding: medium
                                                        ? "-5px -5px"
                                                        : "10px",

                                                    borderColor:
                                                        number === "09"
                                                            ? "#E2FF66"
                                                            : "#626262",

                                                    background: "#161616",
                                                    textAlign: "center",
                                                    color: "#DDDDDD",
                                                    borderRadius: "10px",
                                                    cursor: "pointer",
                                                    height: medium
                                                        ? "32px"
                                                        : "",
                                                    fontSize: medium
                                                        ? "10px"
                                                        : "",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                09
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={0.2}
                                            md={0.2}
                                            sm={0.2}
                                            xs={0.1}
                                        ></Grid>
                                        <Grid
                                            item
                                            lg={1}
                                            md={1}
                                            sm={1}
                                            xs={1.2}
                                        >
                                            <Box
                                                // onMouseEnter={() => setIsHovered("08")}
                                                // onMouseLeave={() => setIsHovered(false)}
                                                onClick={() => {
                                                    setData(true);
                                                    setNumber("10");
                                                    setMessage("");
                                                }}
                                                mt={2}
                                                mr={1}
                                                className="form-control"
                                                style={{
                                                    padding: medium
                                                        ? "-5px -5px"
                                                        : "10px",

                                                    borderColor:
                                                        number === "10"
                                                            ? "#E2FF66"
                                                            : "#626262",

                                                    background: "#161616",
                                                    textAlign: "center",
                                                    color: "#DDDDDD",
                                                    borderRadius: "10px",
                                                    cursor: "pointer",
                                                    height: medium
                                                        ? "32px"
                                                        : "",
                                                    fontSize: medium
                                                        ? "10px"
                                                        : "",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                10
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            lg={0.2}
                                            md={0.2}
                                            sm={0.2}
                                            xs={0}
                                        ></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid
                                    item
                                    lg={5}
                                    md={5}
                                    sm={8}
                                    xs={8}
                                    mx="auto"
                                >
                                    <Grid container>
                                        <Grid
                                            item
                                            lg={0}
                                            md={0}
                                            sm={6}
                                            xs={6}
                                        ></Grid>
                                        <Grid
                                            item
                                            lg={12}
                                            md={12}
                                            sm={6}
                                            xs={6}
                                        >
                                            <Box mt={5}>
                                                <button
                                                    onClick={() => {
                                                        if (data === true) {
                                                            setPage(
                                                                "Question2"
                                                            );
                                                        } else {
                                                            setMessage("enter");
                                                        }
                                                    }}
                                                    style={{
                                                        fontWeight: small
                                                            ? "600"
                                                            : "bold",
                                                        background: "#E2FF65",
                                                        color: "#152642",
                                                        fontSize: "20px",
                                                        // padding: "15px",
                                                        borderStyle: "none",
                                                        borderRadius: "6px",
                                                    }}
                                                    className="form-control"
                                                >
                                                    Next
                                                </button>
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <Box
                                        onClick={() => setPage("Question2")}
                                        // onClick={() => {
                                        //     if (data === true) {
                                        //         setPage("Question2");
                                        //     } else {
                                        //         setMessage("enter");
                                        //     }
                                        // }}
                                        mt={4}
                                        style={{
                                            display: medium ? "none" : "",
                                            borderColor: "#E2FF66",
                                            background: "#161616",
                                            color: "#E2FF66",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                            fontSize: "20px",
                                        }}
                                        className="form-control"
                                    >
                                        Skip
                                    </Box>
                                </Grid>
                                {/* <Grid item lg={2}></Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Questions;
