import type { NextApiRequest, NextApiResponse } from "next";
import { BadgeLabel } from "../../../src/components/Badges";

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
        badge: "lang_java",
        score: 8,
    },
    {
        badge: "lang_kt",
        score: 7,
    },
    {
        badge: "lang_scala",
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

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Language[]>
) {
    res.status(200).json(languages);
}
