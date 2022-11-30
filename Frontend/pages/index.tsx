import React from "react";
import Link from "next/link";
import Head_HTML from "../components/head";

import { useSession, signIn, signOut } from "next-auth/react";

// components
import CompanyStory from "../components/CompanyStory";
import Services from "../components/Services";
import Footer from "../components/Footer";

function App() {
    const { data: session } = useSession();
    // console.log(session);

    function headUserDisplay() {
        if (session && session.user) {
            return (
                <a
                    onClick={() => signOut()}
                    id="login"
                    className="flex group gap-3 bg-white p-3 cursor-pointer rounded-full relative"
                >
                    <div className="opacity-0 group-hover:opacity-100 absolute  flex gap-2 text-black z-10 link_custom !text-blue-700 !text-sm">
                        <img
                            src={session.user.image || "/vercel.svg"}
                            alt="user"
                            className=" w-[20px] h-[20px] rounded-full my-auto"
                        />
                        <p className="link_custom !text-blue-700 !text-sm">
                            Sign out ?
                        </p>
                    </div>
                    <div className="group-hover:opacity-0 flex">
                        <img
                            src={session.user.image || "/vercel.svg"}
                            alt="user"
                            className=" w-[20px] h-[20px] rounded-full my-auto"
                        />
                        <p className="link_custom !text-blue-700 !text-sm">
                            {session.user.name}
                        </p>
                    </div>
                </a>
            );
        } else {
            return (
                <a
                    onClick={() => signIn()}
                    className="link_custom cursor-pointer"
                    id="login"
                >
                    Login
                </a>
            );
        }
    }

    function part2() {
        if (session && session.user) {
            return (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        window.location.href = `/loading?url=${
                            (
                                document.getElementById(
                                    "input_uri"
                                ) as HTMLInputElement
                            ).value
                        }`;
                    }}
                    action="/retrieve"
                    className="flex gap-4"
                    method="post"
                >
                    <input
                        required
                        aria-required="true"
                        type={"url"}
                        id="input_uri"
                        className="outline-none bg-gray-200 font-semibold  py-2 px-4 rounded-md min-w-[60px]"
                        placeholder="Enter a Video Link.."
                    />

                    <button
                        type="submit"
                        className="bg-white px-6 rounded-xl font-bold text-blue-600 py-2"
                    >
                        RUN!
                    </button>
                </form>
            );
        } else {
            return (
                <button
                    type="submit"
                    id="login"
                    onClick={() => signIn()}
                    className="bg-white px-6 rounded-xl font-bold text-blue-600 py-2"
                >
                    Login
                </button>
            );
        }
    }

    return (
        <>
            <Head_HTML />
            <div className="w-screen absolute bg-white h-screen z-[-10] overflow-clip">
                {/* <div className="custom-background w-[150vw] h-[120vh] -translate-y-[33%] -translate-x-[5%]  rotate-[12deg] "></div> */}
                <div className="custom-background w-[150vw] h-[120vh]  home_animate"></div>
            </div>

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
                <div className="right mr-6 align-middle h-fit  my-auto flex gap-8 translate-y-[-50%]">
                    <Link href="/" className="link_custom my-auto">
                        Homepage
                    </Link>
                    {headUserDisplay()}
                </div>
            </header>

            <main className="w-screen overflow-hidden">
                <div className="w-[100%] flex justify-around">
                    <h1 className="mx-auto w-[60%] font-semibold text-7xl cursor-default select-none font-fira text-white text-center">
                        Helping Creators Stay Safe Online
                    </h1>
                </div>
                <div className="w-[100%] flex justify-around mt-4">
                    {part2()}
                </div>

                <CompanyStory />
                <Services />
                <Footer />
            </main>
        </>
    );
}

export default App;
