import React from "react";
import { NavLink } from "react-router-dom";

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

                <div className="xl:flex gap-[3px]">
                    <div className="pb-12">
                        <div className="h-full bg-white overflow-hidden relative smooth">
                            <NavLink to="postDetail" className="no-underline hover:no-underline">
                                <div class="bg-cover bg-center h-[372.05px]" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}></div>

                                <div className="p-6 h-auto md:h-48">
                                    <p className="text-gray-600 text-xs md:text-sm">GETTING STARTED</p>
                                    <div className="font-bold text-xl text-gray-900">Lorem ipsum dolor sit amet.</div>
                                    <p className="text-gray-800 font-serif text-base mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="pb-12">
                        <div className="h-full bg-white overflow-hidden relative smooth">
                            <NavLink to="postDetail" className="no-underline hover:no-underline">
                                <div class="bg-cover bg-center h-[372.05px]" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}></div>

                                <div className="p-6 h-auto md:h-48">
                                    <p className="text-gray-600 text-xs md:text-sm">GETTING STARTED</p>
                                    <div className="font-bold text-xl text-gray-900">Lorem ipsum dolor sit amet.</div>
                                    <p className="text-gray-800 font-serif text-base mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                                    </p>
                                </div>
                                <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                                    <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                                    <p className="text-gray-600 text-xs md:text-sm">2 MIN READ</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="pb-12">
                        <div className="h-full bg-white overflow-hidden relative smooth">
                            <NavLink to="/postDetail" className="no-underline hover:no-underline">
                                <div class="bg-cover bg-center h-[372.05px]" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}></div>

                                <div className="p-6 h-auto md:h-48">
                                    <p className="text-gray-600 text-xs md:text-sm">GETTING STARTED</p>
                                    <div className="font-bold text-xl text-gray-900">Lorem ipsum dolor sit amet.</div>
                                    <p className="text-gray-800 font-serif text-base mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                                    </p>
                                </div>
                                <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                                    <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                                    <p className="text-gray-600 text-xs md:text-sm">2 MIN READ</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="pb-12">
                        <div className="h-full bg-white overflow-hidden relative smooth">
                            <NavLink to="/postDetail" className="no-underline hover:no-underline">
                                <div class="bg-cover bg-center h-[372.05px]" style={{ backgroundImage: 'url(http://www.cookiesound.com/wp-content/uploads/2018/07/pulau-weh-iboih-aceh-sumatra-indonesia-featured-640x640.jpg)' }}></div>

                                <div className="p-6 h-auto md:h-48">
                                    <p className="text-gray-600 text-xs md:text-sm">GETTING STARTED</p>
                                    <div className="font-bold text-xl text-gray-900">Lorem ipsum dolor sit amet.</div>
                                    <p className="text-gray-800 font-serif text-base mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                                    </p>
                                </div>
                                <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                                    <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                                    <p className="text-gray-600 text-xs md:text-sm">2 MIN READ</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex flex-col items-center">
                    <button className="fontTeko mt-[20px] text-[18pt] border-[3px] border-gray-600 hover:border-[#ca5c5c] hover:text-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                        EXPLORE OUR BLOG
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Container