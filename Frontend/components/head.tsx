import Head from "next/head";
import { headPropType } from "./types";

export default function Head_HTML(props: headPropType) {
    return (
        <Head>
            <title>
                {props.title ||
                    "C-Secure - Detect and flag Hate Speech in YouTube Comments"}
            </title>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="manifest" href="/manifest.json" />
            {/* <title>C - Secure | Helping Creators WorldWide</title> */}

            {/* <!-- external script tags --> */}
            <script src="https://www.googletagmanager.com/gtag/js?id=G-GJGWTVBKP4"></script>
            <script>
                {`window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-GJGWTVBKP4');`}
            </script>

            {/* <!-- META TAGS --> */}
            {/* <!-- Primary Meta Tags --> */}
            <meta
                name="title"
                content="C-Secure - Detect and flag Hate Speech in YouTube Comments"
            />
            <meta
                name="description"
                content={
                    props.description ||
                    "C-Secure - We make Youtube comments reporting Easier so that You can focus more on Content, Just paste your Youtube Link, and see all the magic Happening."
                }
            />
            <meta name="image" content="/logo512.png" />
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="" />
            <meta
                property="og:title"
                content="C-Secure - Detect and flag Hate Speech in YouTube Comments"
            />
            <meta
                property="og:description"
                content={
                    props.description ||
                    "C-Secure - We make Youtube comments reporting Easier so that You can focus more on Content, Just paste your Youtube Link, and see all the magic Happening."
                }
            />
            <meta property="og:image" content="/logo512.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="" />
            <meta
                property="twitter:title"
                content="C-Secure - Detect and flag Hate Speech in YouTube Comments"
            />
            <meta
                property="twitter:description"
                content="C-Secure - We make Youtube comments reporting Easier so that You can focus more on Content, Just paste your Youtube Link, and see all the magic Happening."
            />
            <meta property="twitter:image" content="/logo512.png" />

            {/* <!-- external styles/fonts --> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inconsolata:wght@500&display=swap"
                rel="preload"
                as="style"
                /* @ts-ignore */
                onLoad={"this.onload=null; this.rel='stylesheet';"}
            ></link>
        </Head>
    );
}
