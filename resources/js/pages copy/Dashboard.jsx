import { React, useState } from "react";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import LOGO from "../components/Assets/Images/LOGO.png";
import PromotedScore from "./PromotedScore";
import Questions from "./Questions";
import QRFeedback from "./QRFeedback";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Question2 from "./Question2";
import Question3 from "./Question3";
import RightNavBar from "../components/ResuableComponent/RightNavbar";
import CreateNps from "./CreateNps";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    channel: Yup.string().required("Channel is required"),
});

const CreateNPS = () => {
    const [page, setPage] = useState("create");
    const initialValues = {
        name: "",
        channel: "",
    };
    const handleSubmit = (values, { setSubmitting }) => {
        // You can perform form submission here
        console.log(values);
        setSubmitting(false);
    };
    return (
        <>
            <Grid
                style={{
                    background: "black",
                    margin: "0px",
                    padding: "0px",
                    overflow: "hidden",
                    boxSizing: "border-box",
                    fontFamily: "Inter",
                    // height: "100vh",
                }}
                container
            >
                <Grid item lg={2} md={2} sm={2} xs={2}>
                    <RightNavBar />
                </Grid>
                <Grid item lg={9.5} md={9.5} sm={12} xs={12}>
                    {/* <Grid item lg={12} md={12} xs={12} xm={12}>
                        <Box ml={5} pt={4} mb={3}>
                            <img src={LOGO} alt="" />
                        </Box>
                    </Grid> */}
                    {page === "create" ? (
                        <CreateNps setPage={setPage} />
                    ) : page === "promoted" ? (
                        <PromotedScore setPage={setPage} />
                    ) : page === "Question" ? (
                        <Questions setPage={setPage} />
                    ) : page === "Question2" ? (
                        <Question2 setPage={setPage} />
                    ) : page === "Question3" ? (
                        <Question3 setPage={setPage} />
                    ) : page === "feedback" ? (
                        <QRFeedback />
                    ) : (
                        ""
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default CreateNPS;
