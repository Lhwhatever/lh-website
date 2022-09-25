import {
    alpha,
    Box,
    List,
    ListItem,
    ListItemText,
    styled,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import * as React from "react";
import { compareDateIntervals, makeDate, Month } from "../util/date";
import DateBadge from "./DateBadge";
import { LineBreakBox } from "./FlexItems";

interface EducationalExperience {
    name: string;
    qualification: string;
    start: Date;
    end?: Date;
}

const education: EducationalExperience[] = [
    {
        name: "Carnegie Mellon University",
        qualification: "B.S. in Computer Science",
        start: makeDate(2021, Month.AUG),
        end: makeDate(2025, Month.MAY),
    },
    {
        name: "Raffles Institution",
        qualification: "Singapore-Cambridge GCE A Levels",
        start: makeDate(2013, Month.JAN),
        end: makeDate(2018, Month.DEC),
    },
];

education.sort(compareDateIntervals);

const Education = (): React.ReactElement => {
    const theme = useTheme();
    const compact = useMediaQuery(theme.breakpoints.down("sm"));

    const RightAlignDateBox = styled(DateBadge)({
        flexGrow: 1,
        textAlign: "right",
        marginTop: compact ? 0 : theme.spacing(1),
        color: alpha(
            theme.palette.getContrastText(theme.palette.background.paper),
            compact ? 0.7 : 1
        ),
    });

    return (
        <Box my={1}>
            <Typography variant="h6">Education</Typography>
            <List>
                {education.map((exp, index) => (
                    <ListItem
                        key={index}
                        alignItems="flex-start"
                        sx={{ flexWrap: "wrap" }}
                    >
                        <ListItemText
                            primary={exp.name}
                            secondary={exp.qualification}
                        />
                        {compact && <LineBreakBox />}
                        <RightAlignDateBox
                            date1={exp.start}
                            date2={exp.end ?? "present"}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Education;
