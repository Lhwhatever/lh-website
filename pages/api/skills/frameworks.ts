import { NextApiRequest, NextApiResponse } from "next";
import { BadgeLabel } from "../../../src/components/Badges";

export type Framework = BadgeLabel | { name: string };

export interface FrameworkResponse {
    description: string;
    frameworks: Framework[];
}

const frameworks: FrameworkResponse[] = [
    {
        description: "Front-End",
        frameworks: [
            "framework_react",
            "framework_redux",
            "framework_mui",
            "lang_html5",
            "lang_css3",
            "framework_rxNative",
            "framework_nextjs",
            "framework_tailwind",
        ],
    },
    {
        description: "Back-End",
        frameworks: [
            "framework_express",
            "framework_fastapi",
            "framework_nodejs",
            "framework_flask",
            "framework_socketIo",
            "framework_postgreSql",
            "framework_mongoDb",
            "framework_django",
        ],
    },
    {
        description: "Embedded/ Microcontrollers",
        frameworks: [
            "platform_rpi",
            "platform_arduino",
            { name: "I2C" },
            { name: "Adafruit Sensors" },
        ],
    },
    {
        description: "Statistics/ Machine Learning",
        frameworks: [
            "framework_pytorch",
            "framework_tf",
            { name: "OpenAI Gym" },
            "framework_numpy",
            "framework_pandas",
            { name: "Matplotlib" },
            { name: "SciPy" },
            { name: "SciKit Learn" },
        ],
    },
    {
        description: "Infrastructure",
        frameworks: [
            "infra_bash",
            "infra_linux",
            "infra_ubuntu",
            "infra_aws",
            "infra_nginx",
        ],
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<FrameworkResponse[]>
) {
    res.status(200).json(frameworks);
}
