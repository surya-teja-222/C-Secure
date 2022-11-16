import { CommentType } from "./types";
export default function Comment(props: CommentType) {
    const { username, userComment, hateStatus } = props;

    let color =
        hateStatus === 2
            ? "text-[#ff5252]"
            : hateStatus === 1
            ? "text-[#ff7925]"
            : "text-[#3aaa81]";

    let hateText =
        hateStatus === 2
            ? "Hate Level 2"
            : hateStatus === 1
            ? "Hate Level 1"
            : "Looks Good!";
    return (
        <>
            <div className="w-[80%] p-4 min-h-[4rem] grid gap-2 grid-cols-2 bg-[#ffffff97] rounded-lg ">
                <h1 className="font-semibold ">UserName: </h1>
                <h1 className="font-semibold text-blue-800">{username}</h1>
                <h1 className="font-semibold ">Comment Text:</h1>
                <h1 className={"font-semibold " + color}> {userComment}</h1>
                <h1 className="font-semibold ">Hate Status:</h1>
                <h1 className={"font-semibold " + color}>{hateText}</h1>
            </div>
        </>
    );
}
