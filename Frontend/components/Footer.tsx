export default function Footer() {
    return (
        <footer className="h-[40vh] w-screen bg-white grid grid-cols-3 p-6">
            <div>
                <h5 className="text-4xl font-bold mx-4  text-[#2a6ef2] font-fira">
                    Connect With Us
                </h5>

                <div className="mx-4 flex flex-col gap-4 font-fira mt-8">
                    <a href="https://linkedin.com/in/suryateja222">LinkedIn</a>
                    <a href="https://twitter.com/surya_teja_222">Twitter</a>
                    <a href="https://www.instagram.com/surya_teja_222/">
                        Instagram
                    </a>
                </div>
            </div>
            <div className="blank"></div>
            <div className="">
                <h6 className="text-lg font-bold mx-4 mt-10  text-[#2a6ef2] font-fira">
                    Email Address
                </h6>
                <p className="mx-4 hover:underline">
                    <a href="mailto:suryatejareddy222@gmail.com">
                        suryatejareddy222@gmail.com
                    </a>
                </p>
                <h6 className="text-lg font-bold mx-4 mt-10  text-[#2a6ef2] font-fira">
                    Phone Number
                </h6>
                <p className="mx-4 hover:underline">
                    <a href="tel:+916303471188">+91-6303471188</a>
                </p>
            </div>
        </footer>
    );
}
