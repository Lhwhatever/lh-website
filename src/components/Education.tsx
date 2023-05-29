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
import Grid from "@mui/material/Unstable_Grid2";

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

interface Course {
    code: string;
    name: string;
}

const courses: Course[] = [
    {
        code: "15-440",
        name: "Distributed Systems",
    },
    {
        code: "15-213",
        name: "Introduction to Computer Systems",
    },
    {
        code: "15-259",
        name: "Probability and Computing",
    },
    {
        code: "15-210",
        name: "Parallel and Sequential Data Structures and Algorithms",
    },
    {
        code: "15-251",
        name: "Great Theoretical Ideas in Computer Science",
    },
    {
        code: "15-150",
        name: "Principles of Functional Programming",
    },
    {
        code: "21-259",
        name: "Calculus in N Dimensions",
    },
    {
        code: "21-241",
        name: "Matrices and Linear Transformations",
    },
];

const Course = (props: Course): React.ReactElement => {
    const { code, name } = props;
    return (
        <Box>
            <Typography variant="body2">{code}</Typography>
            <Typography variant="body1">{name}</Typography>
        </Box>
    );
};

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
            <Typography variant="h5">Education</Typography>
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
            <Typography variant="h5">Courses</Typography>
            <Grid container spacing={2} p={2}>
                {courses.map((course) => (
                    <Grid xs={12} sm={4} key={course.code}>
                        <Course {...course} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Education;
