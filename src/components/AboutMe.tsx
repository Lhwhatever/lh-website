import { Container, Divider, Stack, Typography } from "@mui/material";
import * as React from "react";

const AboutMe = (): React.ReactElement => {
    return (
        <Container>
            <Typography variant="h4" mb={2}>
                About Me
            </Typography>
            <Divider />
            <Stack spacing={1} mt={2}>
                <Typography variant="body1">
                    Hello! I am Hong, a rising junior majoring in Computer
                    Science at Carnegie Mellon University. I am from Singapore!
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
