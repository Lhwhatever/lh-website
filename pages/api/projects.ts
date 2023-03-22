import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../src/components/ProjectCard";
import { formatYM, makeDate, makeInterval, Month } from "../../src/util/date";

const projects: Project[] = [
    {
        name: "cmucourses.com",
        img: "/cmucourses.png",
        feature: true,
        description: [
            "A student-run online catalog of courses at Carnegie Mellon University. Used by over 2400 students.",
        ],
        tags: ["Full Stack", "Web Dev"],
        meta: [
            {
                label: "Position",
                value: "Co-Team Lead",
            },
            {
                label: "Date",
                value: makeInterval(makeDate(2022, Month.AUG)),
            },
            {
                label: "Front-End",
                value: [
                    "lang_ts",
                    "framework_react",
                    "framework_tailwind",
                    "framework_redux",
                ],
            },
            {
                label: "Back-End",
                value: [
                    "lang_js",
                    "lang_ts",
                    "framework_express",
                    "framework_nodejs",
                    "framework_mongoDb",
                ],
            },
        ],
        links: [
            {
                type: "GitHub",
                text: "Source",
                url: "https://github.com/ScottyLabs/course-tool",
            },
            {
                type: "Link",
                text: "Live",
                url: "https://cmucourses.com/",
            },
        ],
    },
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
                value: [
                    "lang_py",
                    "framework_flask",
                    "framework_pytorch",
                    "framework_openCv",
                ],
            },
        ],
    },
    {
        name: "Wanderlust",
        img: "/wanderlust.png",
        feature: true,
        description: [
            "A multiplayer roleplaying game designed for an online leadership camp for Red Cross Youth Singapore. Participants will work together over Zoom to perform actions, complete quests and defeat a monster, while learning about how to make critical decisions and manage resources wisely.",
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
                value: [
                    "lang_ts",
                    "framework_react",
                    "lang_html5",
                    "lang_css3",
                ],
            },
            {
                label: "Back-End",
                value: [
                    "lang_ts",
                    "framework_express",
                    "framework_nodejs",
                    "framework_socketIo",
                ],
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
                value: makeInterval(
                    makeDate(2021, Month.SEP),
                    makeDate(2022, Month.MAY)
                ),
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
        name: "Values-in-Adventure",
        img: "/viadventure.png",
        description: [
            "A choose-your-own-adventure game created for my volunteering efforts at Red Cross Youth Singapore. It aims to be an amusing and interactive way of teaching student leaders of each school chapter how to organize a service learning project that is meaningful to both the beneficiaries and the students participating in the project.",
        ],
        tags: ["Web Dev", "Visual Novel"],
        links: [
            {
                type: "GitHub",
                text: "Source",
                url: "https://github.com/WangZijun97/RCY-SL-VN",
            },
            {
                type: "Link",
                text: "Live",
                url: "https://wangzijun97.github.io/RCY-SL-VN/",
            },
        ],
        meta: [
            {
                label: "Position",
                value: "Writer/Developer",
            },
            {
                label: "Date",
                value: formatYM(makeDate(2021, Month.JAN)),
            },
            {
                label: "Front-End",
                value: [
                    "lang_js",
                    "framework_react",
                    "lang_html5",
                    "lang_css3",
                ],
            },
            {
                label: "Deployment",
                value: "GitHub pages using GitHub Actions",
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

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Project[]>
) {
    res.status(200).json(projects);
}
