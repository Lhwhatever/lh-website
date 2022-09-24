import { createTheme } from "@mui/material";
import { blueGrey, indigo } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#455a64",
            light: "#718792",
            dark: "#000a12",
        },
        secondary: indigo,
    },
});

export default theme;
