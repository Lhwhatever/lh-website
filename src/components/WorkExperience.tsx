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
import { makeDate, Month } from "../util/date";
import DateBadge from "./DateBadge";
import { LineBreakBox } from "./FlexItems";

interface WorkExp {
    name: string;
    title: string;
    start: Date;
    end?: Date;
}

const workExp: WorkExp[] = [
    {
        name: "Tinkertanker Pte Ltd",
        title: "Work Attachment Intern",
        start: makeDate(2016, Month.SEP),
        end: makeDate(2016, Month.SEP),
    },
    {
        name: "Singapore Armed Forces",
        title: "Armoured Equipment Instructor",
        start: makeDate(2019, Month.JAN),
        end: makeDate(2020, Month.NOV),
    },
    {
        name: "National University of Singapore",
        title: "Research Intern · School of Computing, Ubicomp Lab",
        start: makeDate(2021, Month.JAN),
        end: makeDate(2021, Month.JUL),
    },
    {
        name: "Carnegie Mellon University",
        title: "Undergraduate Research Assistant · Institute for Software Research, ABLE Group",
        start: makeDate(2022, Month.MAY),
        end: makeDate(2022, Month.AUG),
    },
];

workExp.sort((a, b) =>
    a.end
        ? b.end
            ? Number(b.end) - Number(a.end)
            : 1
        : b.end
        ? -1
        : Number(a.start) - Number(b.start)
);

const WorkExperience = (): React.ReactElement => {
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
            <Typography variant="h6">Work Experience</Typography>
            <List>
                {workExp.map((exp, index) => (
                    <ListItem
                        key={index}
                        alignItems="flex-start"
                        sx={{ flexWrap: "wrap" }}
                    >
                        <ListItemText
                            primary={exp.name}
                            secondary={exp.title}
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

export default WorkExperience;
