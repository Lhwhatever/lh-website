import { Container, Typography } from "@mui/material";
import * as React from "react";

const AboutMe = (): React.ReactElement => {
    return (
        <Container>
            <Typography variant="h4">About Me</Typography>
            <Typography variant="body1">
                Hello! I am Hong, a sophomore majoring in Computer Science at
                Carnegie Mellon University.
            </Typography>
            <Typography variant="body1">
                I am interested in computer systems and artificial intelligence,
                and I have experience working on software projects in various
                areas. Scroll down to find out more!
            </Typography>
        </Container>
    );
};

export default AboutMe;
