import Link from "next/link";
import Head_HTML from "../components/head";
import Comment from "../components/Comment";

function changeCommentsSize() {
    (document.getElementById("drop") as HTMLDivElement).classList.toggle(
        "rotate-180"
    );
    const elem = document.getElementById("comments-dropdown") as HTMLDivElement;
    if (elem.classList.contains("max-h-[75px]")) {
        elem.classList.remove("max-h-[75px]");
        elem.classList.add("max-h-[1000px]");
    } else {
        elem.classList.add("max-h-[75px]");
        elem.classList.remove("max-h-[1000px]");
    }
}

export default function Results() {
    return (
        <>
            <div className="w-screen h-screen overflow-x-hidden custom-background">
                <Head_HTML title="Results for Your Video" />{" "}
                {/* ADD YT LINK HERE */}
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
                        <Link href="/" className="link_custom">
                            Account
                        </Link>
                        <Link href="/" className="link_custom">
                            Home
                        </Link>
                    </div>
                </header>
                <main className="p-6">
                    <div className="mr-6 bg-white w-[40%] rounded-r-full flex gap-4 h-[48px]">
                        <img
                            src={"/resources/youtube.svg"}
                            alt=""
                            className="mx-4"
                        />
                        <a
                            className="align-middle my-auto"
                            href="https://c-secure-web.vercel.app/"
                        >
                            <h1 className="text-lg font-semibold italic underline  text-blue-600">
                                https://c-secure-web.vercel.app/
                            </h1>
                        </a>
                    </div>

                    <div className="overview-panel mt-10 w-1/2 rounded-2xl min-h-[12rem] py-4 px-6 bg-[#3e4e5d59]">
                        <h2 className="uppercase text-white font-bold text-lg">
                            Overview
                        </h2>

                        <div className="grid grid-cols-2 text-white font-[500] gap-3 mt-4 font-fira">
                            <div className="">Total Number of Comments:</div>
                            <div className="">1024</div>
                            <div className="">Hate Detected:</div>
                            <div className="">927</div>
                            <div className="">Percentage of Hate Comments</div>
                            <div className="text-red-500 font-bold">90.52%</div>
                        </div>
                    </div>
                    <div
                        id="comments-dropdown"
                        onFocus={changeCommentsSize}
                        className="comments-dropdown transition-all duration-500 ease-in-out mt-10 rounded-2xl bg-[#3e4e5d59]  max-h-[75px]  overflow-hidden py-4 px-6 "
                    >
                        <div
                            className="flex justify-between"
                            onClick={changeCommentsSize}
                        >
                            <h2 className="uppercase text-white my-auto font-bold text-lg">
                                Comments
                            </h2>
                            <div className="cursor-pointer transition-all ease-in-out duration-150">
                                <svg
                                    id="drop"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 95 95"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M66.6704 40.4185C67.0979 39.8604 67.2918 39.231 67.2918 38.6135C67.2918 37.0737 66.0806 35.625 64.327 35.625H30.6772C28.9158 35.625 27.7085 37.0777 27.7085 38.6135C27.7085 39.235 27.9064 39.8644 28.3379 40.4225C33.0997 46.5737 41.2104 57.0435 45.1925 62.1854C45.7545 62.9137 46.6175 63.3333 47.5358 63.3333C48.4462 63.3333 49.3131 62.9098 49.8752 62.1814C53.8414 57.0396 61.9243 46.5658 66.6704 40.4185Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="content flex flex-col gap-4 mt-6 ml-4">
                            <Comment
                                hateStatus={0}
                                userComment={
                                    "Your videos are always too fun to watch."
                                }
                                username={"Surya"}
                                key={1}
                            />
                            <Comment
                                hateStatus={1}
                                userComment={
                                    "I can die instead of watching his videos"
                                }
                                username={"Jhon Doe."}
                                key={2}
                            />
                            <Comment
                                hateStatus={2}
                                userComment={
                                    "First stop shit posting on youtube bit*h."
                                }
                                username={"Jhon Doe."}
                                key={3}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
