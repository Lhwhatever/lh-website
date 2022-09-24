import { Box } from "@mui/material";
import * as React from "react";
import Navbar from "../components/Navbar";

export interface LayoutProps {
    children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps): React.ReactElement {
    return (
        <React.Fragment>
            <Navbar />
            <Box
                component="main"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                }}
            >
                {children}
            </Box>
        </React.Fragment>
    );
}
