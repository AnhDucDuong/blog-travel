import HeaderSite from "../../../Components/HeaderSite"

function AboutUsPage() {
    return (
        <div>
            <HeaderSite />
            <div className="my-[100px] mx-auto flex flex-col items-center text-gray-600">
                <div className="flex gap-[15px]">
                    <img className="w-28 h-28 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                    <img className="w-28 h-28 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                    <img className="w-28 h-28 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                </div>
                <p className="fontMohave text-[13pt] mt-[40px] mb-[15px] text-[#ca5c5c]">WE LOVE WHAT WE DO</p>
                <h1 className="fontTeko text-[60pt] text-center w-[920px] leading-none">About Us</h1>
                <p className="fontMohave text-[20pt] my-[15px] w-[800px] text-center text-gray-400">
                    For us, travel photography is the most inspiring and exciting form of photography.
                    Every capture is unique, every trip a new experience and this is why we love what we do.
                </p>
            </div>
        </div>
    )
}

export default AboutUsPage