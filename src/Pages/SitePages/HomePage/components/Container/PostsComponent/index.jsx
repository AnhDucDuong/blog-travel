import { Link } from "react-router-dom";

function PostsComponent() {
    return (
        <div className="container w-full mx-auto px-4 py-[100px] border-t border-gray-300">
            <div className="mb-[50px] mx-auto flex flex-col items-center text-gray-600">
                <p className="fontMohave text-[13pt] mb-[15px] text-[#ca5c5c]">TRAVEL WRITING</p>
                <h1 className="fontTeko text-[60pt] text-center w-[920px] leading-none">Article</h1>
                <p className="fontMohave text-[20pt] mt-[15px] w-[800px] text-center text-gray-400">
                    Browse through our first-hand travel articles, supported by beautiful photo material.
                    Through our lens you'll only get to see the reality around us: real life - no staging and no pre-arrangements of any kind.
                </p>
            </div>

            <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                <Link to="postDetail">
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg)' }}>
                            <div className="transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                        <div className="px-[50px] py-[30px] group-hover:bg-gray-200 transition duration-300 ease-in-out">
                            <p className="fontMohave text-[14pt] text-center text-gray-400 mb-[20px]">
                                Indonesia
                            </p>
                            <h1 className="fontTeko text-[25pt] text-center leading-none">A Beach Paradise In The North Of Sumatra: Pulau Weh.</h1>
                        </div>
                    </div>
                </Link>

                <Link to="postDetail">
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg)' }}>
                            <div className="transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                        <div className="px-[50px] py-[30px] group-hover:bg-gray-200 transition duration-300 ease-in-out">
                            <p className="fontMohave text-[14pt] text-center text-gray-400 mb-[20px]">
                                Indonesia
                            </p>
                            <h1 className="fontTeko text-[25pt] text-center leading-none">A Beach Paradise In The North Of Sumatra: Pulau Weh.</h1>
                        </div>
                    </div>
                </Link>

                <Link to="postDetail">
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg)' }}>
                            <div className="transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                        <div className="px-[50px] py-[30px] group-hover:bg-gray-200 transition duration-300 ease-in-out">
                            <p className="fontMohave text-[14pt] text-center text-gray-400 mb-[20px]">
                                Indonesia
                            </p>
                            <h1 className="fontTeko text-[25pt] text-center leading-none">A Beach Paradise In The North Of Sumatra: Pulau Weh.</h1>
                        </div>
                    </div>
                </Link>

                <Link to="postDetail">
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg)' }}>
                            <div className="transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                        <div className="px-[50px] py-[30px] group-hover:bg-gray-200 transition duration-300 ease-in-out">
                            <p className="fontMohave text-[14pt] text-center text-gray-400 mb-[20px]">
                                Indonesia
                            </p>
                            <h1 className="fontTeko text-[25pt] text-center leading-none">A Beach Paradise In The North Of Sumatra: Pulau Weh.</h1>
                        </div>
                    </div>
                </Link>

                <Link to="postDetail">
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg)' }}>
                            <div className="transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                        <div className="px-[50px] py-[30px] group-hover:bg-gray-200 transition duration-300 ease-in-out">
                            <p className="fontMohave text-[14pt] text-center text-gray-400 mb-[20px]">
                                Indonesia
                            </p>
                            <h1 className="fontTeko text-[25pt] text-center leading-none">A Beach Paradise In The North Of Sumatra: Pulau Weh.</h1>
                        </div>
                    </div>
                </Link>

                <Link to="postDetail">
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg)' }}>
                            <div className="transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                        <div className="px-[50px] py-[30px] group-hover:bg-gray-200 transition duration-300 ease-in-out">
                            <p className="fontMohave text-[14pt] text-center text-gray-400 mb-[20px]">
                                Indonesia
                            </p>
                            <h1 className="fontTeko text-[25pt] text-center leading-none">A Beach Paradise In The North Of Sumatra: Pulau Weh.</h1>
                        </div>
                    </div>
                </Link>

                <Link to="postDetail">
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg)' }}>
                            <div className="transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                        <div className="px-[50px] py-[30px] group-hover:bg-gray-200 transition duration-300 ease-in-out">
                            <p className="fontMohave text-[14pt] text-center text-gray-400 mb-[20px]">
                                Indonesia
                            </p>
                            <h1 className="fontTeko text-[25pt] text-center leading-none">A Beach Paradise In The North Of Sumatra: Pulau Weh.</h1>
                        </div>
                    </div>
                </Link>

                <Link to="postDetail">
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg)' }}>
                            <div className="transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                        <div className="px-[50px] py-[30px] group-hover:bg-gray-200 transition duration-300 ease-in-out">
                            <p className="fontMohave text-[14pt] text-center text-gray-400 mb-[20px]">
                                Indonesia
                            </p>
                            <h1 className="fontTeko text-[25pt] text-center leading-none">A Beach Paradise In The North Of Sumatra: Pulau Weh.</h1>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="mx-auto flex flex-col items-center mt-[60px]">
                <Link to="articles" className="fontTeko text-[18pt] border-[3px] border-gray-600 hover:border-[#ca5c5c] hover:text-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                    EXPLORE OUR BLOG
                </Link>
            </div>

        </div>
    )
}

export default PostsComponent