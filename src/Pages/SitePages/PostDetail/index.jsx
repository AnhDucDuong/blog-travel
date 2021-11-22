import { Link } from "react-router-dom";
import HeaderSite from "../../../Components/HeaderSite";
import AreaComponent from "../HomePage/components/Container/AreaComponent";

function PostDetail() {
    return (
        <div className="bg-white font-sans leading-normal tracking-normal">
            <HeaderSite />

            <div id="header" className="bg-white fixed w-full z-10 top-0 hidden animated">
                <div className="bg-white">
                    <div className="flex flex-wrap items-center content-center">
                        <div className="flex w-1/2 justify-start text-white font-extrabold">
                            <a className="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2" href="#">
                                👻 <span className="hidden w-0 md:w-auto md:block pl-1">Ghostwind CSS</span>
                            </a>
                        </div>
                        <div className="flex w-1/2 justify-end content-center">
                            <p className="hidden sm:block mr-3 text-center h-14 p-4 text-xs"><span className="pr-2">Share this</span> 👉</p>
                            <a className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4" href="https://twitter.com/intent/tweet?url=#">
                                <svg className="fill-current text-white h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
                            </a>
                            <a className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4" href="https://www.facebook.com/sharer/sharer.php?u=#" >
                                <svg className="fill-current text-white h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
                            </a>
                        </div>
                    </div>

                </div>
                <div id="progress" className="h-1 bg-white shadow"></div>
            </div>


            <div className="text-center pt-16 md:pt-32">
                <p className="text-sm md:text-base text-green-500 font-bold">08 APRIL 2019 <span className="text-gray-900">/</span> GETTING STARTED</p>
                <h1 className="font-bold break-normal text-3xl md:text-5xl">Welcome to Ghostwind CSS</h1>
            </div>

            <div className="container h-[1000px] w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded bg-postDetail"></div>

            <div className="container max-w-5xl mx-auto -mt-32">

                <div className="mx-0 sm:mx-6">

                    <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
                        <p className="text-2xl md:text-3xl mb-5">
                            👋 Welcome fellow <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.tailwindcss.com">Tailwind CSS</a> and <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.ghost.org">Ghost</a> fan.  This starter template is an attempt to replicate the default Ghost theme <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://demo.ghost.io/welcome">"Casper"</a> using Tailwind CSS and vanilla Javascript.
                        </p>

                        <p className="py-6">The basic blog page layout is available and all using the default Tailwind CSS classNamees (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classNamees into components.</p>

                        <p className="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>

                        <ol>
                            <li className="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
                            <li className="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
                            <li className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 px-4">
                <Link to="">
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

                <Link to="">
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

                <Link to="">
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

                <Link to="">
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

            {/*Area Component*/}
            <AreaComponent />
        </div>
    );
}



export default PostDetail