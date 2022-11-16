export default function CompanyStory() {
    return (
        <>
            <div className="w-screen h-screen mt-[50vh] overflow-hidden">
                <div className="grid w-screen h-screen grid-cols-2 justify-center items-center">
                    <div className="left ml-36 my-auto float-right">
                        <h2 className="text-4xl font-bold  text-[#2a6ef2] font-fira">
                            Our Company Story
                        </h2>
                        <p className="text-xl text-black font-semibold mt-6 max-w-[50%]">
                            C-Secure was formed by college friends tasked to
                            help and empower YouTube community and Creators stay
                            safe online.
                        </p>
                    </div>
                    <div className="right flex gap-4 text-center">
                        <img
                            src={"/resources/random_person.png"}
                            alt="Surya"
                            className="h-[28rem] rounded-3xl -translate-y-8 w-fit"
                        />
                        <img
                            src={"/resources/random_person.png"}
                            alt="Surya"
                            className="h-[28rem] rounded-3xl translate-y-8 w-fit"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
