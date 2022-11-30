import React, { useEffect } from "react";
import Link from "next/link";
import Head_HTML from "../components/head";
import { useRouter } from "next/router";

type dtype = {
    comment: string;
    sentiment: 0 | 1 | 2;
    author: string;
};

export type commentDType = {
    url: string;
    comments: dtype[];
};

function Loading() {
    // const [data, setData] = React.useState<dtype>({ data: "" });
    const router = useRouter();
    const URL = router.query.url;
    useEffect(() => {
        if (URL) {
            fetch(`/api/getData?url=${URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    var resp: commentDType = {
                        url: URL as string,
                        comments: data,
                    };
                    localStorage.setItem(`data-${URL}`, JSON.stringify(resp));
                    router.push(`/result?url=${URL}`);
                });
        }
    }, [URL]);
    if (URL && URL.toLocaleString().trim().length > 0) {
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
                        // @ts-ignore
                        href={URL}
                        className="underline text-lg italic text-blue-700"
                    >
                        {URL}
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
                        This might take 5 Seconds to 2 Minutes based on number
                        of comments for your video.
                    </p>
                    <p className="font-incon">
                        Please wait while we work our Magic or Come back Later.
                    </p>
                </main>
            </div>
        );
    } else {
        return <></>;
    }
}

export default Loading;
