import {
    Box,
    Container,
    Divider,
    Typography,
    Unstable_Grid2 as Grid,
} from "@mui/material";
import * as React from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { fetchData } from "../api";

const ProjectsCategorized = (props: { projects: Project[] }) => {
    const { projects } = props;

    const [featured, others] = projects.reduce(
        ([featured, others], project) => {
            if (project.feature) return [[...featured, project], others];
            else return [featured, [...others, project]];
        },
        [[] as Project[], [] as Project[]]
    );

    return (
        <React.Fragment>
            <Box my={1}>
                <Typography variant="h5">Featured</Typography>
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
                <Typography variant="h5">More Projects</Typography>
                <Grid container my={1} direction="row" spacing={1}>
                    {others.map((project, index) => (
                        <Grid xs={12} md={6} lg={4} key={index}>
                            <ProjectCard project={project} key={index} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </React.Fragment>
    );
};

const Projects = (): React.ReactElement => {
    const [projects, setProjects] = React.useState<Project[] | null>(null);

    React.useEffect(() => {
        fetchData<Project[]>("/api/projects")
            .then(setProjects)
            .catch(() => setProjects(null));
    }, []);

    return (
        <Container>
            <Typography variant="h4" mb={2}>
                Projects
            </Typography>
            <Divider />
            {projects ? (
                <ProjectsCategorized projects={projects} />
            ) : (
                "Loading..."
            )}
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
