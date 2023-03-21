import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";

const Hero = (): React.ReactElement => {
    return (
        <Stack flexDirection="column" alignItems="center" my={8}>
            <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
                Hong Lin
            </Typography>
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
                CS @ CMU
            </Typography>
        </Stack>
    );
};

export default Hero;
