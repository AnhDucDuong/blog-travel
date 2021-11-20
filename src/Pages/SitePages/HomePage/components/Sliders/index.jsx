import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from '../../../../../Constants/index'

function Sliders() {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            <div className="absolute top-[50px] left-[50%] transform translate-x-[-50%] z-[50]">
                <img src={Images.Logo} alt="" />
            </div>

            <Slider {...settings}>
                <div className="relative">
                    <img className="h-screen w-full" src="http://www.cookiesound.com/wp-content/uploads/2016/01/leh-palace-ladakh-kashmir-india-featured.jpg" alt="" />
                    <div className="absolute top-[200px] left-[50%] transform translate-x-[-50%] z-[50] flex flex-col items-center text-white">
                        <h1 className="fontTeko text-[70pt] text-center w-[920px] leading-none">Welcome To Little Tibet, Welcome To Ladakh, Welcome To Leh.</h1>
                        <p className="fontMohave italic text-[15pt] my-[40px]">New Zealand, Oceania</p>
                        <button className="fontTeko text-[18pt] border-[3px] border-white px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                            Read Story
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <img className="h-screen w-full" src="http://www.cookiesound.com/wp-content/uploads/2012/06/vienna-state-opera-at-night-traffic-austria-1.jpg" alt="" />
                    <div className="absolute top-[200px] left-[50%] transform translate-x-[-50%] z-[50] flex flex-col items-center text-white">
                        <h1 className="fontTeko text-[70pt] text-center w-[920px] leading-none">Welcome To Little Tibet, Welcome To Ladakh, Welcome To Leh.</h1>
                        <p className="fontMohave italic text-[15pt] my-[40px]">New Zealand, Oceania</p>
                        <button className="fontTeko text-[18pt] border-[3px] border-white px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                            Read Story
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <img className="h-screen w-full" src="http://www.cookiesound.com/wp-content/uploads/2018/01/iron-ore-train-mauritania-africa-5-featured.jpg" alt="" />
                    <div className="absolute top-[200px] left-[50%] transform translate-x-[-50%] z-[50] flex flex-col items-center text-white">
                        <h1 className="fontTeko text-[70pt] text-center w-[920px] leading-none">Welcome To Little Tibet, Welcome To Ladakh, Welcome To Leh.</h1>
                        <p className="fontMohave italic text-[15pt] my-[40px]">New Zealand, Oceania</p>
                        <button className="fontTeko text-[18pt] border-[3px] border-white px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                            Read Story
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <img className="h-screen w-full" src="http://www.cookiesound.com/wp-content/uploads/2014/03/tongariro-alpine-crossing-emeral-lakes-new-zealand.jpg" alt="" />
                    <div className="absolute top-[200px] left-[50%] transform translate-x-[-50%] z-[50] flex flex-col items-center text-white">
                        <h1 className="fontTeko text-[70pt] text-center w-[920px] leading-none">Welcome To Little Tibet, Welcome To Ladakh, Welcome To Leh.</h1>
                        <p className="fontMohave italic text-[15pt] my-[40px]">New Zealand, Oceania</p>
                        <button className="fontTeko text-[18pt] border-[3px] border-white px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                            Read Story
                        </button>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            style={{ ...style, display: "flex", position: "absolute", top: "40%", right: "0", width: "55px", cursor: "pointer" }}
            onClick={onClick}
        >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 16.6667L53.3333 40L30 63.3333" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </div>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            style={{ ...style, display: "flex", position: "absolute", top: "40%", left: "0", width: "55px", cursor: "pointer", zIndex: "20" }}
            onClick={onClick}
        >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 63.3334L26.6667 40L50 16.6667" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

export default Sliders