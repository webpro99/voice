import React, { useState } from "react";
import {
    Grid,
    Box,
    Radio,
    FormControlLabel,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import "../../css/app.css";
import SearchBar from "../components/ResuableComponent/SearchBar";

const Question2 = ({ setPage }) => {
    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    const [data, setData] = useState(false);
    const [select, setSelect] = useState("");
    const [message, setMessage] = useState("");
    const handleBoxClick = (item) => {
        if (select === item) {
            setSelect(null);
            setData(false);
            setMessage("");
        } else {
            setSelect(item);
            setData(true);
            setMessage("");
        }
    };
    return (
        <>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Grid container>
                    <Grid item lg={11} md={11} sm={11} mx="auto">
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
                        <Grid container>{/* <Grid item lg={3}></Grid> */}</Grid>
                        <Grid item lg={7} md={8} sm={8} xs={8} mx="auto">
                            <Box
                                ml={1}
                                style={{
                                    textAlign: "center",
                                    color: "#E2FF66",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                }}
                            >
                                Question # 02
                            </Box>
                            {message === "enter" ? (
                                <Box
                                    style={{
                                        color: "red",
                                        textAlign: "center",
                                    }}
                                >
                                    Please Select one option
                                </Box>
                            ) : (
                                ""
                            )}
                            <Box
                                style={{
                                    textAlign: "center",
                                    lineHeight: "22.85px",
                                    color: "#DDDDDD",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                }}
                                mt={2}
                            >
                                Which of the following Factors Influenced your
                                answer the most?
                            </Box>
                            <Box
                                // onClick={() => {
                                //     setData(true);
                                //     setSelect("location");
                                //     setMessage("");
                                // }}
                                onClick={() => handleBoxClick("location")}
                                onDoubleClick={() => handleBoxClick("location")}
                                mt={2}
                                className="form-control"
                                style={{
                                    display: "flex",
                                    borderColor:
                                        select === "location"
                                            ? "#E2FF66"
                                            : " #626262",
                                    background: medium ? "black" : "#161616",
                                    color: "white",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                            >
                                <Box>
                                    <Box
                                        className="promoter-image q2-radio"
                                        ml={1}
                                    >
                                        {" "}
                                        <input
                                            style={{
                                                background:
                                                    select === "location"
                                                        ? "#E2FF66"
                                                        : "",
                                                borderColor:
                                                    select === "location"
                                                        ? "#E2FF66"
                                                        : "",
                                            }}
                                            className="form-check-input q2-radio"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                            checked={
                                                select === "location"
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </Box>
                                </Box>

                                <Box ml={2}>
                                    {" "}
                                    <Box
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "16px",
                                        }}
                                    >
                                        {" "}
                                        Restaurant Location
                                    </Box>{" "}
                                    <Box
                                        style={{
                                            fontWeight: "400",
                                            color: "#DDDDDD",
                                            fontSize: medium ? "10px" : "16px",
                                        }}
                                    >
                                        Includes (Parking Lost, Accessibility)
                                    </Box>{" "}
                                </Box>
                            </Box>
                            <Box
                                onClick={() => handleBoxClick("menu")}
                                onDoubleClick={() => handleBoxClick("menu")}
                                mt={2}
                                className="form-control"
                                style={{
                                    display: "flex",
                                    borderColor:
                                        select === "menu"
                                            ? "#E2FF66"
                                            : " #626262",
                                    // borderColor: "#626262",
                                    background: medium ? "black" : "#161616",
                                    color: "white",
                                    padding: medium ? "6px" : "12px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                            >
                                <Box className="promoter-image q2-radio" ml={1}>
                                    {" "}
                                    <input
                                        style={{
                                            background:
                                                select === "menu"
                                                    ? "#E2FF66"
                                                    : "",
                                            borderColor:
                                                select === "menu"
                                                    ? "#E2FF66"
                                                    : "",
                                        }}
                                        className="form-check-input q2-radio"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        checked={
                                            select === "menu" ? true : false
                                        }
                                    />
                                </Box>

                                <Box ml={2}>
                                    <Box
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "16px",
                                        }}
                                    >
                                        Restaurant Menu
                                    </Box>{" "}
                                    <Box
                                        style={{
                                            fontWeight: "400",
                                            color: "#DDDDDD",
                                            fontSize: medium ? "10px" : "16px",
                                        }}
                                    >
                                        Includes (Diversity Options)
                                    </Box>{" "}
                                </Box>
                            </Box>
                            <Box
                                onClick={() => handleBoxClick("quality")}
                                onDoubleClick={() => handleBoxClick("quality")}
                                mt={2}
                                className="form-control"
                                style={{
                                    display: "flex",
                                    borderColor:
                                        select === "quality"
                                            ? "#E2FF66"
                                            : " #626262",
                                    background: medium ? "black" : "#161616",
                                    color: "white",
                                    padding: medium ? "6px" : "12px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                            >
                                <Box ml={1}>
                                    {" "}
                                    <input
                                        style={{
                                            background:
                                                select === "quality"
                                                    ? "#E2FF66"
                                                    : "",
                                            borderColor:
                                                select === "quality"
                                                    ? "#E2FF66"
                                                    : "",
                                        }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        checked={
                                            select === "quality" ? true : false
                                        }
                                    />
                                </Box>

                                <Box ml={2}>
                                    {" "}
                                    <Box
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "16px",
                                        }}
                                    >
                                        {" "}
                                        Food Quality
                                    </Box>{" "}
                                    <Box
                                        style={{
                                            fontWeight: "400",
                                            color: "#DDDDDD",
                                            fontSize: medium ? "10px" : "16px",
                                        }}
                                    >
                                        Includes (Food Quality, Presentation and
                                        Packaging)
                                    </Box>{" "}
                                </Box>
                            </Box>
                            <Box
                                // onClick={() => {
                                //     setData(true);
                                //     setSelect("atmosphere");
                                //     setMessage("");
                                // }}
                                onClick={() => handleBoxClick("atmosphere")}
                                onDoubleClick={() =>
                                    handleBoxClick("atmosphere")
                                }
                                mt={2}
                                className="form-control"
                                style={{
                                    display: "flex",
                                    borderColor:
                                        select === "atmosphere"
                                            ? "#E2FF66"
                                            : " #626262",
                                    background: medium ? "black" : "#161616",
                                    color: "white",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                            >
                                <Box ml={1}>
                                    {" "}
                                    <input
                                        style={{
                                            background:
                                                select === "atmosphere"
                                                    ? "#E2FF66"
                                                    : "",
                                            borderColor:
                                                select === "atmosphere"
                                                    ? "#E2FF66"
                                                    : "",
                                        }}
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        checked={
                                            select === "atmosphere"
                                                ? true
                                                : false
                                        }
                                    />
                                </Box>
                                <Box ml={2}>
                                    {" "}
                                    <Box
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "16px",
                                        }}
                                    >
                                        {" "}
                                        Restaurant Atmosphere
                                    </Box>{" "}
                                    <Box
                                        style={{
                                            fontWeight: "400",
                                            color: "#DDDDDD",
                                            fontSize: medium ? "10px" : "16px",
                                        }}
                                    >
                                        Includes (Vibes, Comfortability &
                                        Quietness, Cleaness)
                                    </Box>{" "}
                                </Box>
                            </Box>
                            <Grid container>
                                <Grid item lg={0} md={0} sm={6} xs={6}></Grid>
                                <Grid item lg={12} md={12} sm={6} xs={6}>
                                    <Box mt={5}>
                                        <button
                                            onClick={() => {
                                                if (data === true) {
                                                    setPage("Question3");
                                                } else {
                                                    setMessage("enter");
                                                }
                                            }}
                                            style={{
                                                fontWeight: "bold",
                                                background: "#E2FF65",
                                                color: "#152642",
                                                // padding: small ? "" : "15px",
                                                borderStyle: "none",
                                                fontSize: "20px",
                                                borderRadius: "8px",
                                                lineHeight: "28px",
                                            }}
                                            className="form-control"
                                        >
                                            Next
                                        </button>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Box
                                onClick={() => setPage("Question3")}
                                mt={4}
                                style={{
                                    display: medium ? "none" : "",
                                    borderColor: "#E2FF66",
                                    background: "#161616",
                                    color: "#E2FF66",
                                    textAlign: "center",
                                    fontWeight: "700",
                                    lineHeight: "40px",
                                    letterSpacing: "1.5px",
                                    cursor: "pointer",
                                    borderRadius: "8px",
                                    fontSize: "20px",
                                }}
                                className="form-control"
                            >
                                Skip
                            </Box>
                        </Grid>
                        {/* <Grid item lg={3}></Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Question2;
