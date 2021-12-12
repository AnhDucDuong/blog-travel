import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryAPI from "../../../../../../Api/countriesAPI";
import PostsAPI from "../../../../../../Api/postsAPI";

function PostsComponent() {
    const [posts, setPosts] = useState(null);
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        // khai báo hàm getPosts
        const getPosts = async () => {
            try {
                // call API lấy thông tin
                const { data } = await PostsAPI.list();
                await setPosts(data);
            } catch (error) {
                console.log(error)
            }
        };
        getPosts();

        const getCountries = async () => {
            try {
                // call API lấy thông tin
                const { data } = await CountryAPI.list();
                await setCountries(data)
            } catch (error) {
                console.log(error)
            }
        };
        getCountries();
    }, []);
    //console.log('posts: ', posts)
    //console.log('countries: ', countries)

    return posts && (
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
                {
                    posts?.map((itemPost, index) => {
                        return index < 8 && (
                            <Link key={index} to={'postDetail/' + itemPost._id}>
                                <div className="w-full max-w-sm mx-auto rounded-sm overflow-hidden hover:cursor-pointer group">
                                    <div className="flex items-end justify-end h-[360px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${itemPost.image})` }}>
                                        <div className="transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                                            <button className="hidden group-hover:block fontTeko text-[18pt] border-[3px] border-white hover:border-[#ca5c5c] px-[35px] py-[4px] rounded-full tracking-wide uppercase">
                                                Read Story
                                            </button>
                                        </div>
                                    </div>
                                    <div className="px-[50px] py-[30px] group-hover:bg-gray-200 transition duration-300 ease-in-out">
                                        {countries?.map((itemCountry, index) => {
                                            if (itemCountry._id == itemPost.country_id) {
                                                return <p key={index} className="fontMohave text-[14pt] text-center text-gray-400 mb-[20px]">{itemCountry.name}, {itemCountry.area}</p>
                                            }
                                        })}

                                        <h1 className="fontTeko text-[25pt] text-center leading-none">{itemPost.name}</h1>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

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