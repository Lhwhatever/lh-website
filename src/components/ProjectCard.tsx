import {
    ExpandLess,
    ExpandMore,
    GitHub,
    Link as LinkIcon,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Collapse,
    Stack,
    Typography,
    Unstable_Grid2 as Grid,
} from "@mui/material";
import * as React from "react";
import Badges, { BadgeLabel } from "./Badges";

export const linkIconMapping = {
    GitHub: GitHub,
    Link: LinkIcon,
};

export interface ProjectLink {
    type: keyof typeof linkIconMapping;
    text: string;
    url: string;
}

export interface ProjectMetadata {
    label: string;
    value: string | BadgeLabel[];
}

export interface Project {
    name: string;
    img?: string;
    feature?: boolean;
    description: string[];
    tags?: string[];
    links?: ProjectLink[];
    meta?: ProjectMetadata[];
}

export interface ProjectCardProps {
    project: Project;
}

const ProjectCard = (props: ProjectCardProps): React.ReactElement => {
    const { project } = props;

    const [expanded, setExpanded] = React.useState(false);

    const handleCollapseToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <Card elevation={2}>
            <CardActionArea onClick={handleCollapseToggle}>
                {project.img && (
                    <CardMedia component="img" image={project.img} />
                )}
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                    <Stack
                        flexDirection="row"
                        flexWrap="wrap"
                        columnGap={1}
                        mb={1}
                    >
                        <Typography variant="h6">{project.name}</Typography>
                        {project.tags &&
                            project.tags.map((tag, index) => (
                                <Chip key={index} label={tag} size="small" />
                            ))}
                    </Stack>
                    <Typography variant="body2">
                        {project.description[0]}
                    </Typography>
                    <Stack flexDirection="row" justifyContent="flex-end">
                        {expanded ? <ExpandLess /> : <ExpandMore />}
                    </Stack>
                </CardContent>
            </CardActionArea>
            <Collapse in={expanded}>
                <CardContent>
                    <Grid container spacing={1} sx={{ fontSize: 14 }}>
                        {project.meta?.map((meta, index) => (
                            <React.Fragment key={index}>
                                <Grid
                                    xs={3}
                                    sx={{ fontWeight: "bold" }}
                                    display="flex"
                                    alignItems="center"
                                >
                                    {meta.label}
                                </Grid>
                                <Grid
                                    xs={9}
                                    display="flex"
                                    gap={1}
                                    flexWrap="wrap"
                                >
                                    {typeof meta.value === "string"
                                        ? meta.value
                                        : meta.value.map((id) => (
                                              <Badges key={id} variant={id} />
                                          ))}
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </CardContent>
            </Collapse>
            {project.links && (
                <CardActions>
                    {project.links.map((link, index) => {
                        const StartIconComponent = linkIconMapping[link.type];
                        return (
                            <Button
                                key={index}
                                href={link.url}
                                target="_blank"
                                startIcon={<StartIconComponent />}
                            >
                                {link.text}
                            </Button>
                        );
                    })}
                </CardActions>
            )}
        </Card>
    );
};

export default ProjectCard;
