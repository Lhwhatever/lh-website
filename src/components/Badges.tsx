import { Avatar, Chip } from "@mui/material";
import * as React from "react";

export class BadgeData {
    label: string;
    img: string;
    color?: string;

    constructor(label: string, img: string, color?: string) {
        this.label = label;
        this.img = img;
        this.color = color;
    }
}

export const badges = {
    lang_js: new BadgeData(
        "JavaScript",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "#f0db4f"
    ),
    lang_py: new BadgeData(
        "Python",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "#FFD845"
    ),
    lang_ts: new BadgeData(
        "TypeScript",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "#007acc"
    ),
    framework_express: new BadgeData(
        "ExpressJS",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    ),
    framework_flask: new BadgeData(
        "Flask",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
        "#010101"
    ),
    framework_mui: new BadgeData(
        "Material UI",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        "#1FA6CA"
    ),
    framework_nextjs: new BadgeData(
        "NextJS",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    ),
    framework_pytorch: new BadgeData(
        "PyTorch",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        "#EE4C2C"
    ),
    framework_react: new BadgeData(
        "React",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "#61dafb"
    ),
    framework_redux: new BadgeData(
        "ReduxJS",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "#764abc"
    ),
    framework_rxNative: new BadgeData(
        "React Native",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "#61dafb"
    ),
    framework_socketIo: new BadgeData(
        "Socket.IO",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        "#010101"
    ),
    platform_rpi: new BadgeData(
        "Raspberry Pi",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
        "#c51850"
    ),
};

export type BadgeLabel = keyof typeof badges;

export interface BadgesProps {
    variant: BadgeLabel;
}

const Badges = (props: BadgesProps): React.ReactElement => {
    const badge = badges[props.variant];
    return (
        <Chip
            label={badge.label}
            avatar={<Avatar src={badge.img} />}
            size="small"
        />
    );
};

export default Badges;
