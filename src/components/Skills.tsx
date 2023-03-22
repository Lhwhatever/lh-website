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
import Badges, { badges } from "./Badges";
import { Language } from "../../pages/api/skills/languages";
import {
    Framework,
    FrameworkResponse,
} from "../../pages/api/skills/frameworks";
import { fetchData } from "../api";

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

    const [languages, setLanguages] = React.useState<Language[] | null>(null);
    const [frameworks, setFrameworks] = React.useState<
        FrameworkResponse[] | null
    >(null);

    React.useEffect(() => {
        fetchData<Language[]>("/api/skills/languages")
            .then(setLanguages)
            .catch(() => setLanguages(null));

        fetchData<FrameworkResponse[]>("/api/skills/frameworks")
            .then(setFrameworks)
            .catch(() => setFrameworks(null));
    }, []);

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
                    {languages?.map(({ badge, score }, index) => {
                        const { img, label, color } = badges[badge];
                        return (
                            <React.Fragment key={index}>
                                <Box>
                                    <Image
                                        src={img}
                                        height={24}
                                        invert={!color}
                                        alt={label}
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
                    }) ?? "Loading..."}
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
                    {frameworks?.map((framework, index) => (
                        <React.Fragment key={index}>
                            <Stack>{framework.description}</Stack>
                            <FrameworkList list={framework.frameworks} />
                        </React.Fragment>
                    )) ?? "Loading..."}
                </Box>
            </Grid>
        </Grid>
    );
};

export default Skills;
