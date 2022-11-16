import React from "react";
import Link from "next/link";
import Head_HTML from "../components/head";

function Loading() {
    return (
        <div className="custom-background w-screen h-screen">
            <Head_HTML title="Analyzing Your Video" />
            <header className="flex justify-between p-4 ">
                <div className="left ">
                    <Link href={"/"}>
                        <img
                            src={"/resources/logo_black.png"}
                            alt="C-Secure"
                            className="w-fit h-[96px]"
                        />
                    </Link>
                </div>
            </header>

            <main className="text-center">
                <h1 className="uppercase text-2xl font-semibold mt-5">
                    Analyzing
                </h1>
                <a
                    href="/http://127.0.0.1/xyz"
                    className="underline text-lg italic text-blue-700"
                >
                    https://www.youtube.com/watch?v=175GAmhgzSk
                </a>
                <p className="uppercase text-2xl font-semibold mt-5">
                    For Phishing and Hate Comments.
                </p>

                <img
                    src={"/resources/loading.gif"}
                    alt="loading"
                    className="mx-auto select-none"
                />
                <p className="font-incon">
                    This might take 5 Seconds to 2 Minutes based on number of
                    comments for your video.
                </p>
                <p className="font-incon">
                    Please wait while we work our Magic or Come back Later.
                </p>
            </main>
        </div>
    );
}

export default Loading;
