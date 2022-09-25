import { Container, Stack, Typography } from "@mui/material";
import * as React from "react";

const AboutMe = (): React.ReactElement => {
    return (
        <Container>
            <Typography variant="h4">About Me</Typography>
            <Stack spacing={1}>
                <Typography variant="body1">
                    Hello! I am Hong, a sophomore majoring in Computer Science
                    at Carnegie Mellon University. I am from Singapore!
                </Typography>
                <Typography variant="body1">
                    I am an aspiring software engineer, with experience in
                    various fields such as web development, app development, and
                    machine learning. Currently, my fields of interest are
                    computer systems and artificial intelligence. Scroll down to
                    see some of the projects I have been working on recently!
                </Typography>
            </Stack>
        </Container>
    );
};

export default AboutMe;
