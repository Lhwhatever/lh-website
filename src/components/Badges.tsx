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
    lang_c: new BadgeData(
        "C",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        "#03599C"
    ),
    lang_cpp: new BadgeData(
        "C++",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "#9C033A"
    ),
    lang_kt: new BadgeData(
        "Kotlin",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        "#7F6CB1"
    ),
    lang_java: new BadgeData(
        "Java",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "#EA2D2E"
    ),
    lang_lua: new BadgeData(
        "Lua",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
        "#000080"
    ),
    lang_html5: new BadgeData(
        "HTML5",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "#E44D26"
    ),
    lang_css3: new BadgeData(
        "CSS3",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "#1572B6"
    ),
    lang_rs: new BadgeData(
        "Rust",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"
    ),
    lang_julia: new BadgeData(
        "Julia",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg"
    ),
    framework_django: new BadgeData(
        "Django",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
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
    framework_mongoDb: new BadgeData(
        "MongoDB",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "#439934"
    ),
    framework_mui: new BadgeData(
        "Material UI",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        "#1FA6CA"
    ),
    framework_nodejs: new BadgeData(
        "NodeJS",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "#83CD29"
    ),
    framework_nextjs: new BadgeData(
        "NextJS",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    ),
    framework_numpy: new BadgeData(
        "Numpy",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        "#4cabcf"
    ),
    framework_openCv: new BadgeData(
        "OpenCV",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
    ),
    framework_pandas: new BadgeData(
        "Pandas",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
    ),
    framework_postgreSql: new BadgeData(
        "PostgreSQL",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "#336791"
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
    framework_tf: new BadgeData(
        "TensorFlow",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        "#ff6f00"
    ),
    platform_arduino: new BadgeData(
        "Arduino",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
        "#00979c"
    ),
    platform_rpi: new BadgeData(
        "Raspberry Pi",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
        "#c51850"
    ),
    infra_bash: new BadgeData(
        "Bash",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
    ),
    infra_linux: new BadgeData(
        "Linux",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    ),
    infra_ubuntu: new BadgeData(
        "Ubuntu",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
        "#DD4814"
    ),
    infra_aws: new BadgeData(
        "AWS",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        "#F7A80D"
    ),
    infra_nginx: new BadgeData(
        "Nginx",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        "#009900"
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
