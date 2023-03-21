import {
    alpha,
    Box,
    Chip,
    LinearProgress,
    linearProgressClasses,
    Stack,
    styled,
    Typography,
    Unstable_Grid2 as Grid,
    useTheme,
} from "@mui/material";
import * as React from "react";
import Badges, { BadgeLabel, badges } from "./Badges";

export interface Language {
    badge: BadgeLabel;
    score: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const languages: Language[] = [
    {
        badge: "lang_ts",
        score: 9,
    },
    {
        badge: "lang_js",
        score: 9,
    },
    {
        badge: "lang_py",
        score: 9,
    },
    {
        badge: "lang_cpp",
        score: 8,
    },
    {
        badge: "lang_c",
        score: 8,
    },
    {
        badge: "lang_kt",
        score: 7,
    },
    {
        badge: "lang_java",
        score: 7,
    },
    {
        badge: "lang_lua",
        score: 6,
    },
    {
        badge: "lang_rs",
        score: 4,
    },
    {
        badge: "lang_julia",
        score: 3,
    },
];

languages.sort((a, b) => b.score - a.score);

const ProgressBar = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 3,
    [`&.${linearProgressClasses.root}`]: {
        backgroundColor: alpha("#fff", 0.0),
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: theme.palette.secondary.light,
        borderRadius: 3,
    },
}));

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    invert: boolean;
}

const Image = styled("img", {
    shouldForwardProp: (prop) => prop !== "invert",
})<ImageProps>((props) => ({
    filter: props.invert ? "invert(100%)" : "",
}));

type Framework = BadgeLabel | { name: string };

const frameworksFrontEnd: Framework[] = [
    "framework_react",
    "framework_redux",
    "framework_mui",
    "lang_html5",
    "lang_css3",
    "framework_rxNative",
    "framework_nextjs",
    "framework_tailwind",
];

const frameworksBackEnd: Framework[] = [
    "framework_express",
    "framework_fastapi",
    "framework_nodejs",
    "framework_flask",
    "framework_socketIo",
    "framework_postgreSql",
    "framework_mongoDb",
    "framework_django",
];

const frameworksEmbedded: Framework[] = [
    "platform_rpi",
    "platform_arduino",
    { name: "I2C" },
    { name: "Adafruit Sensors" },
];

const frameworksML: Framework[] = [
    "framework_pytorch",
    "framework_tf",
    { name: "OpenAI Gym" },
    "framework_numpy",
    "framework_pandas",
    { name: "Matplotlib" },
    { name: "SciPy" },
    { name: "SciKit Learn" },
];

const frameworksInfra: Framework[] = [
    "infra_bash",
    "infra_linux",
    "infra_ubuntu",
    "infra_aws",
    "infra_nginx",
];

interface FrameworkListProps {
    list: Framework[];
}

const FrameworkList = (props: FrameworkListProps) => {
    const theme = useTheme();
    return (
        <Stack
            flexDirection="row"
            flexWrap="wrap"
            rowGap={theme.spacing(1)}
            columnGap={theme.spacing(1)}
        >
            {props.list.map((framework, index) =>
                typeof framework === "string" ? (
                    <Badges key={framework} variant={framework} />
                ) : (
                    <Chip key={index} label={framework.name} size="small" />
                )
            )}
        </Stack>
    );
};

const Skills = (): React.ReactElement => {
    const theme = useTheme();

    return (
        <Grid container my={2} spacing={2}>
            <Grid xs={12}>
                <Typography variant="h5">Skills</Typography>
            </Grid>
            <Grid xs={12} sm={6}>
                <Typography variant="h6">Programming Languages</Typography>
                <Box
                    display="grid"
                    gridTemplateColumns="auto auto 1fr"
                    rowGap={theme.spacing(1)}
                    columnGap={theme.spacing(2)}
                    mt={1}
                >
                    {languages.map(({ badge, score }, index) => {
                        const { img, label, color } = badges[badge];
                        return (
                            <React.Fragment key={index}>
                                <Box>
                                    <Image
                                        src={img}
                                        height={24}
                                        invert={!color}
                                    />
                                </Box>
                                <Stack
                                    flexDirection="column"
                                    justifyContent="center"
                                    mr={3}
                                >
                                    <Typography variant="body2">
                                        {label}
                                    </Typography>
                                </Stack>
                                <Stack
                                    flexDirection="column"
                                    justifyContent="center"
                                >
                                    <ProgressBar
                                        variant="determinate"
                                        value={score * 10}
                                    />
                                </Stack>
                            </React.Fragment>
                        );
                    })}
                </Box>
            </Grid>
            <Grid xs={12} md={6}>
                <Typography variant="h6">
                    Frameworks and Technologies
                </Typography>
                <Box
                    display="grid"
                    gridTemplateColumns="25% auto"
                    mt={1}
                    rowGap={theme.spacing(3)}
                    columnGap={theme.spacing(2)}
                >
                    <Stack>Front-End</Stack>
                    <FrameworkList list={frameworksFrontEnd} />
                    <Stack>Back-End</Stack>
                    <FrameworkList list={frameworksBackEnd} />
                    <Stack>Embedded/ Microcontrollers</Stack>
                    <FrameworkList list={frameworksEmbedded} />
                    <Stack>Machine Learning</Stack>
                    <FrameworkList list={frameworksML} />
                    <Stack>Infrastructure</Stack>
                    <FrameworkList list={frameworksInfra} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default Skills;
