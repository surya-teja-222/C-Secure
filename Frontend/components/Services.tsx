import ServiceBlock from "./ServiceBlock";
export default function Services() {
    return (
        <>
            <div className="h-[70vh] max-h-screen w-screen bg-[#366ff4]">
                <h3 className="text-3xl text-center py-8 text-white font-bold">
                    Our Services
                </h3>

                <div className="flex gap-10 mx-auto w-[80%] justify-around mb-10">
                    <ServiceBlock
                        img={"/resources/p1.png"}
                        head={"Detect hate in comments"}
                        body={
                            "Run through a YouTube video and find all unsafe comments."
                        }
                    />
                    <ServiceBlock
                        img={"/resources/p2.png"}
                        head={"Flag unsafe Comments"}
                        body={
                            "With user's interest help with flagging all unsafe comments."
                        }
                    />
                    <ServiceBlock
                        img={"/resources/p3.png"}
                        head={"Get Advanced Statistics"}
                        body={
                            "Get advanced statistics of all hate speech in comments."
                        }
                    />
                </div>
            </div>
        </>
    );
}
