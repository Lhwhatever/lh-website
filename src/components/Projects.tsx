import {
    Box,
    Container,
    Divider,
    Typography,
    Unstable_Grid2 as Grid,
} from "@mui/material";
import * as React from "react";
import { formatYM, makeDate, Month } from "../util/date";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
    {
        name: "Take2Wake",
        img: "/take2wake.jpg",
        feature: true,
        description: [
            "A mobile alarm app that helps you actually wake up by taking photos. Placed overall 2nd in HackCMU 2022.",
        ],
        tags: ["Computer Vision", "Mobile Dev", "Full Stack", "Hackathon"],
        links: [
            {
                type: "GitHub",
                text: "Front-End",
                url: "https://github.com/hackcmu22-slow/productive_alarm_frontend",
            },
            {
                type: "GitHub",
                text: "Back-End",
                url: "https://github.com/hackcmu22-slow/productive_alarm_backend",
            },
        ],
        meta: [
            {
                label: "Position",
                value: "Technical Lead",
            },
            {
                label: "Date",
                value: formatYM(makeDate(2022, Month.SEP)),
            },
            {
                label: "Front-End",
                value: ["lang_ts", "framework_rxNative"],
            },
            {
                label: "Back-End",
                value: ["lang_py", "framework_flask", "framework_pytorch"],
            },
        ],
    },
    {
        name: "Wanderlust",
        img: "/wanderlust.png",
        feature: true,
        description: [
            "A multiplayer roleplaying game designed for an online leadership camp. Participants will work together over Zoom to perform actions, complete quests and defeat a monster, while learning about how to make critical decisions and manage resources wisely.",
        ],
        tags: ["Full Stack", "Web Dev", "Multiplayer Game"],
        links: [
            {
                type: "GitHub",
                text: "Source",
                url: "https://github.com/rcywop21/wanderlust",
            },
        ],
        meta: [
            {
                label: "Position",
                value: "Project Lead & Back-End Developer",
            },
            {
                label: "Date",
                value: formatYM(makeDate(2021, Month.MAY)),
            },
            {
                label: "Front-End",
                value: ["lang_ts", "framework_react"],
            },
            {
                label: "Back-End",
                value: ["lang_ts", "framework_express", "framework_socketIo"],
            },
        ],
    },
    {
        name: "Andrew's Gambit Microcontroller",
        img: "/cmrc.png",
        feature: false,
        description: [
            "Microcontroller controlling the code for Andrew's Gambit, a rocket constructed by Carnegie Mellon Rocket Command in 2021-22. Reads flight data from various Adafruit sensors and executes the corresponding actions using I2C.",
        ],
        tags: ["Microcontroller"],
        links: [
            {
                type: "GitHub",
                text: "Source",
                url: "https://github.com/Lhwhatever/cmrc-microcontroller-2021",
            },
        ],
        meta: [
            {
                label: "Position",
                value: "Avionics/Microcontroller Engineer",
            },
            {
                label: "Date",
                value: formatYM(makeDate(2022, Month.APR)),
            },
            {
                label: "Platform",
                value: ["lang_py", "platform_rpi"],
            },
        ],
    },
    {
        name: "Splyse",
        img: "/splyse.png",
        feature: false,
        description: [
            "A web app that retrieves a Spotify playlist, analyzes the music choices and outputs pretty visualizations using Plotly.",
        ],
        tags: ["Web Dev", "REST API"],
        links: [
            {
                type: "GitHub",
                text: "Source",
                url: "https://github.com/Lhwhatever/splyse",
            },
        ],
        meta: [
            {
                label: "Position",
                value: "Solo Project",
            },
            {
                label: "Date",
                value: formatYM(makeDate(2020, Month.NOV)),
            },
            {
                label: "Front-End",
                value: [
                    "lang_ts",
                    "framework_react",
                    "framework_mui",
                    "framework_nextjs",
                    "framework_redux",
                ],
            },
        ],
    },
    {
        name: "Shengji Calculator",
        img: "/sjhelper.png",
        feature: false,
        description: [
            "An assistant for the complex Chinese card game Shengji. Helps players keep track of game state and translate round outcomes into changes in game state.",
        ],
        tags: ["Web Dev"],
        links: [
            {
                type: "GitHub",
                text: "Source",
                url: "https://github.com/Lhwhatever/sjhelper",
            },
            {
                type: "Link",
                text: "Live",
                url: "https://sjhelper.vercel.app/",
            },
        ],
        meta: [
            {
                label: "Position",
                value: "Solo Project",
            },
            {
                label: "Date",
                value: formatYM(makeDate(2020, Month.NOV)),
            },
            {
                label: "Front-End",
                value: [
                    "lang_js",
                    "framework_react",
                    "framework_mui",
                    "framework_nextjs",
                ],
            },
        ],
    },
];

const Projects = (): React.ReactElement => {
    const [featured, others] = projects.reduce(
        ([featured, others], project) => {
            if (project.feature) return [[...featured, project], others];
            else return [featured, [...others, project]];
        },
        [[] as Project[], [] as Project[]]
    );

    return (
        <Container>
            <Typography variant="h4" mb={2}>
                Projects
            </Typography>
            <Divider />
            <Box my={1}>
                <Typography variant="h6">Featured</Typography>
                <Grid container my={1} direction="row" spacing={1}>
                    {featured.map((project, index) => (
                        <Grid xs={12} md={6} lg={4} key={index}>
                            <ProjectCard project={project} key={index} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Divider />
            <Box my={1}>
                <Typography variant="h6">More Projects</Typography>
                <Grid container my={1} direction="row" spacing={1}>
                    {others.map((project, index) => (
                        <Grid xs={12} md={6} lg={4} key={index}>
                            <ProjectCard project={project} key={index} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box my={1}>
                <Typography variant="body1">
                    Under construction... More projects will be added to the
                    above list in due time!
                </Typography>
            </Box>
        </Container>
    );
};

export default Projects;
