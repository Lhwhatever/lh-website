import * as React from "react";
import type { NextPage } from "next";
import Hero from "../src/components/Hero";
import AboutMe from "../src/components/AboutMe";
import { Box, Paper } from "@mui/material";
import Resume from "../src/components/Resume";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <Hero />
            <Paper
                elevation={1}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: "auto",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                }}
            >
                <Box pt={4}>
                    <AboutMe />
                    <Box py={6} />
                    <Resume />
                    <Box py={6} />
                    <Projects />
                    <Box py={6} />
                    <Contact />
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default Home;
