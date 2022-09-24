import { Box, Typography } from "@mui/material";
import * as React from "react";

const Hero = (): React.ReactElement => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            py={8}
        >
            <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
                Hong Lin
            </Typography>
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
                CS @ CMU
            </Typography>
        </Box>
    );
};

export default Hero;
