import { PictureAsPdf } from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Divider,
    Typography,
    useTheme,
} from "@mui/material";
import * as React from "react";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const RESUME_LINK =
    "https://drive.google.com/file/d/1Qpz5mRZke4ojJ3FC51iJiSrlcc1Je6DI/view?usp=sharing";

const Resume = (): React.ReactElement => {
    const theme = useTheme();

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                }}
                pb={2}
            >
                <Typography variant="h4">Experience</Typography>
                <Button
                    variant="outlined"
                    color="primary"
                    href={RESUME_LINK}
                    target="_blank"
                    startIcon={<PictureAsPdf />}
                    sx={{
                        borderColor: theme.palette.getContrastText(
                            theme.palette.background.paper
                        ),
                        color: theme.palette.getContrastText(
                            theme.palette.background.paper
                        ),
                        "&:hover": {
                            borderColor: theme.palette.secondary.light,
                            color: theme.palette.secondary.light,
                        },
                    }}
                >
                    Resume
                </Button>
            </Box>
            <Divider />
            <Education />
            <Divider />
            <WorkExperience />
        </Container>
    );
};

export default Resume;
