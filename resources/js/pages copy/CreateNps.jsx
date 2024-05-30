import React from "react";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SearchBar from "../components/ResuableComponent/SearchBar";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    channel: Yup.string().required("Channel is required"),
});
const CreateNps = ({ setPage }) => {
    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down("md"));
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
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: "500",
                            fontSize: "28px",
                        }}
                    >
                        Create New NPS{" "}
                    </Box>
                    <Grid container>
                        {/* <Grid item lg={4} md={4}></Grid> */}
                        <Grid
                            style={{ color: "white" }}
                            item
                            lg={4}
                            md={6}
                            sm={7}
                            xs={7}
                            mx="auto"
                        >
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting, values }) => (
                                    <Form autoComplete="off">
                                        <Box mt={5}>Name</Box>
                                        <Box mt={1}>
                                            <Field
                                                style={{
                                                    background: "#161616",
                                                    borderColor: "#626262",
                                                    color: "white",
                                                    padding: "15px",
                                                    lineHeight: "16px",
                                                    borderRadius: "8px",
                                                }}
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                placeholder="Enter Name Here"
                                            />
                                        </Box>
                                        <Box mt={1}>
                                            <ErrorMessage
                                                name="name"
                                                component="div"
                                                className="error"
                                                style={{
                                                    color: "red",
                                                }}
                                            />
                                        </Box>

                                        <Box mb={1} mt={5}>
                                            Channel
                                        </Box>
                                        <Field
                                            name="channel"
                                            as="select" // Specify that this is a <select> element
                                            style={{
                                                background: "#161616",
                                                borderColor: "#626262",
                                                color: "white",
                                                padding: "15px",
                                                borderRadius: "8px",
                                                lineHeight: "16px",
                                            }}
                                            className="form-control"
                                        >
                                            <option value="option1">
                                                Select Channel
                                            </option>
                                            <option value="option2">
                                                Option 2
                                            </option>
                                            <option value="option3">
                                                Option 3
                                            </option>
                                        </Field>
                                        <Box mt={1}>
                                            <ErrorMessage
                                                name="channel"
                                                component="div"
                                                className="error"
                                                style={{
                                                    color: "red",
                                                }}
                                            />
                                        </Box>

                                        <Box mt={5}>
                                            <button
                                                type="submit"
                                                onClick={
                                                    values.name &&
                                                    values.channel
                                                        ? () =>
                                                              setPage(
                                                                  "promoted"
                                                              )
                                                        : undefined
                                                }
                                                style={{
                                                    fontWeight: "bold",
                                                    background: "#E2FF65",
                                                    color: "#152642",
                                                    borderStyle: "none",
                                                    padding: "10px",
                                                    fontSize: "20px",
                                                    borderRadius: "8px",
                                                }}
                                                className="form-control"
                                            >
                                                Create
                                            </button>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        </Grid>{" "}
                        {/* <Grid item lg={4}></Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default CreateNps;
