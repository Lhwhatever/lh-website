import { Box, BoxProps, SxProps, Theme, Typography } from "@mui/material";
import * as React from "react";
import { formatYM } from "../util/date";

export interface DateBadgeProps extends BoxProps {
    date1: Date;
    date2?: "present" | Date;
    sx?: SxProps<Theme>;
}

function makeDateString(date1: Date, date2?: "present" | Date): string {
    if (date2 === undefined) return formatYM(date1);
    if (date2 === "present") return `${formatYM(date1)} – Present`;
    return `${formatYM(date1)} – ${formatYM(date2)}`;
}

const DateBadge = (props: DateBadgeProps): React.ReactElement => {
    const { date1, date2, ...other } = props;
    return (
        <Box {...other}>
            <Typography variant="body2">
                {makeDateString(date1, date2)}
            </Typography>
        </Box>
    );
};

export default DateBadge;
