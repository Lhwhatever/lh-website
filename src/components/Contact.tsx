import {
    AlternateEmail,
    Email,
    GitHub,
    LinkedIn,
    SvgIconComponent,
} from "@mui/icons-material";
import {
    alpha,
    Avatar,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    styled,
    Typography,
    useTheme,
} from "@mui/material";
import * as React from "react";
import ExternalTextLink from "./ExternalTextLink";

const AtSymbol = styled(AlternateEmail)({
    fontSize: 16,
});

interface EmailList {
    type: "emailList";
    value: [string, string][];
}

interface ExternalLink {
    type: "externalLink";
    value: string;
}

const ContactInfoEntry = (
    props: EmailList | ExternalLink
): React.ReactElement => {
    const theme = useTheme();
    switch (props.type) {
        case "emailList":
            return (
                <React.Fragment>
                    {props.value.map(([left, right], index) => (
                        <Typography
                            variant="body1"
                            key={index}
                            sx={{
                                color: alpha(
                                    theme.palette.getContrastText(
                                        theme.palette.background.paper
                                    ),
                                    0.5
                                ),
                            }}
                        >
                            {left}
                            <AtSymbol />
                            {right}
                        </Typography>
                    ))}
                </React.Fragment>
            );
        case "externalLink":
            return <ExternalTextLink href={props.value} />;
    }
};

interface ContactInfo {
    type: string;
    value: EmailList | ExternalLink;
    icon: SvgIconComponent;
}

const contactInfo: ContactInfo[] = [
    {
        type: "Email",
        value: {
            type: "emailList",
            value: [
                ["lllinhong.2301", "gmail.com"],
                ["honglin", "andrew.cmu.edu"],
            ],
        },
        icon: Email,
    },
    {
        type: "LinkedIn",
        value: {
            type: "externalLink",
            value: "linkedin.com/in/linhong2000",
        },
        icon: LinkedIn,
    },
    {
        type: "GitHub",
        value: {
            type: "externalLink",
            value: "github.com/Lhwhatever",
        },
        icon: GitHub,
    },
];

const ContactEntryTitle = styled(ListItemText)({
    marginBottom: 0,
});

const Contact = (): React.ReactElement => {
    return (
        <Container>
            <Typography variant="h4">Contact Me</Typography>
            <List>
                {contactInfo.map(({ icon: IconComponent, ...info }, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar>
                                <IconComponent />
                            </Avatar>
                        </ListItemAvatar>
                        <Stack direction="column" spacing={0}>
                            <ContactEntryTitle primary={info.type} />
                            <ContactInfoEntry {...info.value} />
                        </Stack>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Contact;
