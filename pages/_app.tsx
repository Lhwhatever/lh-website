import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import Head from "next/head";
import { ThemeProvider } from "@mui/system";
import theme from "../src/theme";
import { CssBaseline } from "@mui/material";
import Layout from "../src/layouts/Layout";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head key="viewport">
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <Head key="title">
                <title>Hong Lin</title>
            </Head>
            <Head key="favicon">
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    );
}
