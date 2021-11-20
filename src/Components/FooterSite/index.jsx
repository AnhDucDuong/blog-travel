import { Images } from "../../Constants"

function FooterSite() {
    return (
        <footer className="bg-gray-900">
            <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">

                <div className="w-full mx-auto flex flex-wrap items-center">
                    <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                        <a className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="#">
                            <img src={Images.Logo} alt="" />
                        </a>
                    </div>
                    <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSite