import { Email, GitHub, LinkedIn, SvgIconComponent } from "@mui/icons-material";
import {
    Avatar,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import * as React from "react";
import ExternalTextLink from "./ExternalTextLink";

interface EmailList {
    type: "emailList";
    value: string;
}

interface ExternalLink {
    type: "externalLink";
    value: string;
}

interface ContactInfoEntryProps {
    entry: EmailList | ExternalLink;
}

const ContactInfoEntry = (props: ContactInfoEntryProps): React.ReactElement => {
    const { entry } = props;
    return (
        <React.Fragment>
            {entry.type === "externalLink" && (
                <ExternalTextLink href={entry.value} />
            )}
            {entry.type === "emailList" && entry.value}
        </React.Fragment>
    );
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
            value: "llinhong.2301 [at] gmail.com / honglin [at] andrew.cmu.edu",
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

const Contact = (): React.ReactElement => {
    return (
        <Container>
            <Typography variant="h4">Contact Me</Typography>
            <List>
                {contactInfo.map(({ icon: IconComponent, ...info }, index) => (
                    <ListItem key={index} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar>
                                <IconComponent />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={info.type}
                            secondary={<ContactInfoEntry entry={info.value} />}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Contact;
