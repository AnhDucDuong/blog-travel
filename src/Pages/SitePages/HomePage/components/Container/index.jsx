import React from "react";
import { Link } from "react-router-dom";

function Container() {
    return (
        <div>
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
                <button className="fontTeko mt-[20px] text-[18pt] border-[3px] border-gray-600 hover:border-[#ca5c5c] hover:text-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                    Read About Us
                </button>
            </div>

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
                            <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}>
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

                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}>
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
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}>
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
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}>
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
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}>
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
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}>
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
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}>
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
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}>
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
                </div>

                <div className="mx-auto flex flex-col items-center mt-[60px]">
                    <button className="fontTeko text-[18pt] border-[3px] border-gray-600 hover:border-[#ca5c5c] hover:text-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                        EXPLORE OUR BLOG
                    </button>
                </div>

            </div>

            <div className="container w-full mx-auto px-10 py-[100px] border-t border-gray-300">
                <div className="mb-[50px] mx-auto flex flex-col items-center text-gray-600">
                    <p className="fontMohave text-[13pt] mb-[15px] text-[#ca5c5c]">TRAVEL AREA</p>
                    <h1 className="fontTeko text-[60pt] text-center w-[920px] leading-none">Area</h1>
                    <p className="fontMohave text-[20pt] mt-[15px] w-[800px] text-center text-gray-400">
                        The both of us have travelled to over 96 countries.
                        Once in a while we need a break, so sit back and read about our adventures,
                        experiences and impressions from around the world - starting in the late 70s.
                    </p>
                </div>

                <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6">
                    <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[660px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/ca/f6/16/caf61638d8aabcb66805ab0a06b7e582.jpg' }}>
                            <div className="relative transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <div className="absolute top-5 right-5 fontTeko text-[20pt] bg-white text-gray-900 px-[30px] py-[4px] rounded-xl tracking-wide uppercase">
                                    Asia
                                </div>
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[660px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/750x/f9/aa/5a/f9aa5a451884dfc0ddefee5690e113d2.jpg)' }}>
                            <div className="relative transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <div className="absolute top-5 right-5 fontTeko text-[20pt] bg-white text-gray-900 px-[30px] py-[4px] rounded-xl tracking-wide uppercase">
                                    Europe
                                </div>
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[660px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg)' }}>
                            <div className="relative transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <div className="absolute top-5 right-5 fontTeko text-[20pt] bg-white text-gray-900 px-[30px] py-[4px] rounded-xl tracking-wide uppercase">
                                    America
                                </div>
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[660px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/77/25/11/77251128a745bd3e91439943a4014fea.jpg)' }}>
                            <div className="relative transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <div className="absolute top-5 right-5 fontTeko text-[20pt] bg-white text-gray-900 px-[30px] py-[4px] rounded-xl tracking-wide uppercase">
                                    Oceania
                                </div>
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[660px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/9b/cc/10/9bcc10e5b667c4091b65cfeabef7401e.jpg)' }}>
                            <div className="relative transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                <div className="absolute top-5 right-5 fontTeko text-[20pt] bg-white text-gray-900 px-[30px] py-[4px] rounded-xl tracking-wide uppercase">
                                    Africa
                                </div>
                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                    Read Story
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container