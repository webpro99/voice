import React from "react";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SearchBar from "../components/ResuableComponent/SearchBar";

const validationSchema = Yup.object().shape({
    comment: Yup.string().required("comment is required"),
});
const handleSubmit = (values, { setSubmitting }) => {
    // You can perform form submission here
    console.log(values);
    setSubmitting(false);
};

const Question3 = ({ setPage }) => {
    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    const initialValues = {
        comment: "",
    };
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
                        <Grid container>{/* <Grid item lg={3}></Grid> */}</Grid>
                        <Grid item lg={5} md={6} sm={8} xs={8} mx="auto">
                            <Box
                                ml={1}
                                style={{
                                    textAlign: "center",
                                    color: "#E2FF66",
                                    fontWeight: "600",
                                    fontSize: "20px",
                                }}
                            >
                                Question # 03
                            </Box>
                            <Box
                                mt={2}
                                style={{
                                    color: "#DDDDDD",
                                    textAlign: "center",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                }}
                            >
                                Could you elaborate on how the factor you chose
                                influenced your evaluation?
                            </Box>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting, values }) => (
                                    <Form>
                                        <Box mt={2}>
                                            <div className="form-floating">
                                                <Field
                                                    as="textarea"
                                                    style={{
                                                        height: "400px",
                                                        background: "#161616",
                                                        color: "white",
                                                        borderColor: "#626262",
                                                    }}
                                                    className="form-control"
                                                    placeholder="Write Here"
                                                    id="floatingTextarea2"
                                                    name="comment"
                                                ></Field>
                                                <label
                                                    for="floatingTextarea2"
                                                    style={{
                                                        color: "#747474",
                                                        fontSize: "15px",
                                                    }}
                                                >
                                                    Write Here
                                                </label>
                                            </div>
                                        </Box>
                                        <Box mt={1}>
                                            <ErrorMessage
                                                name="comment"
                                                component="div"
                                                className="error"
                                                style={{ color: "red" }}
                                            />
                                        </Box>

                                        <Box mt={5}>
                                            {/* <button
                                                onClick={() =>
                                                    setPage("feedback")
                                                }
                                                style={{
                                                    fontWeight: "bold",
                                                    background: "#E2FF65",
                                                    color: "#152642",
                                                    padding: "15px",
                                                    borderStyle: "none",
                                                    fontSize: "20px",
                                                    borderRadius: "8px",
                                                    lineHeight: "28px",
                                                }}
                                                className="form-control"
                                            >
                                                Next
                                            </button> */}
                                            <button
                                                onClick={() => {
                                                    if (
                                                        values.comment.trim() !==
                                                        ""
                                                    ) {
                                                        setPage("feedback");
                                                    }
                                                }}
                                                style={{
                                                    fontWeight: "bold",
                                                    background: "#E2FF65",
                                                    color: "#152642",
                                                    padding: "15px",
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
                                    </Form>
                                )}
                            </Formik>
                            <Box
                                onClick={() => setPage("feedback")}
                                mt={4}
                                style={{
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

export default Question3;
