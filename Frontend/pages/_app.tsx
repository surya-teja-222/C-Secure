import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {

    // if (pageProps && pageProps.session) {
        return (
            <SessionProvider session={pageProps.session}>
                <Component {...pageProps} />
            </SessionProvider>
        );
    // } else {
        // return <Component {...pageProps} />;
    // }
}
