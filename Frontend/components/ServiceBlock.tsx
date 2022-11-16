import { ServiceBlockType } from "./types";
export default function block(props: ServiceBlockType) {
    const { img, head, body } = props;
    return (
        <div className="flex flex-col  shadow-xl gap-5 bg-white rounded-xl w-[20rem] p-6 h-[20rem] mb-8">
            <img src={img} alt={head} className="w-[4rem] h-[4rem]" />
            <h4 className="text-blue-700 font-bold text-lg">{head}</h4>
            <p className="text-blue-700 mt-4">{body}</p>
        </div>
    );
}
