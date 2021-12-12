import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderSite from "../../../Components/HeaderSite";
import AreaComponent from "../HomePage/components/Container/AreaComponent";
import PostsApi from '../../../Api/postsAPI'
import CountryAPI from "../../../Api/countriesAPI";
import * as moment from "moment";

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        // khai báo hàm getProduct
        const getProduct = async () => {
            try {
                // call API lấy thông tin sản phẩm thông qua ID gửi lên
                const { data } = await PostsApi.read(id);
                setPost(data);
            } catch (error) {
                console.log(error)
            }
        };
        getProduct();

        const getCountries = async () => {
            try {
                // call API lấy thông tin
                const { data } = await CountryAPI.list();
                if (data) {
                    await setCountries(data)
                }
            } catch (error) {
                console.log(error)
            }
        };
        getCountries();
    }, [id]);

    //console.log('post by id: ', post)
    console.log('countries by id: ', countries)

    return post && (
        <div className="bg-white font-sans leading-normal tracking-normal">
            <HeaderSite />

            <div className="text-center pt-10 md:pt-20">
                {countries?.map((item, index) => {
                    if (post.country_id === item._id) {
                        return (<p key={index} className="text-base md:text-lg text-green-500 font-bold">{moment(post.created_at).format("DD-MMMM-YYYY")} <span className="text-gray-900">/</span> {item.name} - {item.area}</p>)
                    }
                })}
                <h1 className="font-bold break-normal text-3xl md:text-5xl w-1/2 mx-auto py-4">{post.name}</h1>
            </div>

            <div className="container h-[700px] w-full max-w-7xl mx-auto bg-white bg-center bg-cover mt-8 rounded" style={{ backgroundImage: `url(${post.image})` }}></div>
            <div className="container max-w-5xl mx-auto -mt-32">

                <div className="mx-0 sm:mx-6">

                    <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
                        <p className="py-6">
                            {post.content}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 px-4">
                <Link to="">
                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
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