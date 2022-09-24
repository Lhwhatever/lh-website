import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import * as React from "react";

const Navbar = (): React.ReactElement => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Hong Lin</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
