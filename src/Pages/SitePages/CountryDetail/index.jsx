import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderSite from "../../../Components/HeaderSite";
import AreaComponent from "../HomePage/components/Container/AreaComponent";
import PostsApi from '../../../Api/postsAPI'
import CountryAPI from "../../../Api/countriesAPI";


function CountryDetail() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        // khai báo hàm getProduct
        const getProduct = async () => {
            try {
                const { data } = await PostsApi.list();
                if (data) {
                    setPost(data);
                }
            } catch (error) {
                console.log(error)
            }
        };
        getProduct();

        const getCountries = async () => {
            try {
                // call API lấy thông tin
                const { data } = await CountryAPI.read(id);
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

    return countries && (
        <div className="bg-white font-sans leading-normal tracking-normal">
            <HeaderSite />

            <div className="bannerFondo bg-green-800 bg-no-repeat w-full bg-cover bg-center h-[500px]" style={{ backgroundImage: `url(${countries.image})` }}>
                <div className="relative left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <div className="w-full text-center">
                        <p className="text-xl tracking-widest text-white">{countries.area}</p>
                        <h1 className="font-bold text-5xl text-white">
                            {countries.name}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-20 px-4">
                {
                    post?.map((itemPost, index) => {
                        if (itemPost.country_id === countries._id) {
                            return (
                                <Link key={index} to={'/postDetail/' + itemPost._id}>
                                    <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                                        <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${itemPost.image})` }}>
                                            <div className="transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                                <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                                    Read Story
                                                </button>
                                            </div>
                                        </div>
                                        <div className="px-[50px] py-[30px] group-hover:bg-gray-200 transition duration-300 ease-in-out">
                                            <p className="fontMohave text-[14pt] text-center text-gray-400 mb-[20px]">{countries.name}, {countries.area}</p>
                                            <h1 className="fontTeko text-[25pt] text-center leading-none">{itemPost.name}</h1>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })
                }
            </div>

            {/*Area Component*/}
            <AreaComponent />
        </div>
    );
}



export default CountryDetail