import { useState } from "react";
import { Link } from "react-router-dom";
import CountryAPI from "../../../../../../Api/countriesAPI";

function AreaComponent() {
    const [countries, setCountries] = useState(null);

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

    return (
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
                    <div className="flex items-end justify-end h-[660px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/ca/f6/16/caf61638d8aabcb66805ab0a06b7e582.jpg)' }}>
                        <div className="relative transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                            <div className="absolute top-5 right-5 fontTeko text-[20pt] bg-white text-gray-900 px-[30px] py-[4px] rounded-xl tracking-wide uppercase">
                                Asia
                            </div>
                            <div className="flex flex-col items-center">
                                {
                                    countries?.map((itemCountries, index) => {
                                        if (itemCountries.area === 'Asia') {
                                            return (
                                                <Link to={'/countryDetail/' + itemCountries._id} key={index} className="hidden group-hover:block fontTeko text-[18pt] hover:text-[#ca5c5c] py-[4px] rounded-full tracking-wide uppercase">
                                                    {itemCountries.name}
                                                </Link>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden hover:cursor-pointer group">
                    <div className="flex items-end justify-end h-[660px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/750x/f9/aa/5a/f9aa5a451884dfc0ddefee5690e113d2.jpg)' }}>
                        <div className="relative transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                            <div className="absolute top-5 right-5 fontTeko text-[20pt] bg-white text-gray-900 px-[30px] py-[4px] rounded-xl tracking-wide uppercase">
                                Europe
                            </div>
                            <div className="flex flex-col">
                                {
                                    countries?.map((itemCountries, index) => {
                                        if (itemCountries.area === 'Europe') {
                                            return (
                                                <button key={index} className="hidden group-hover:block fontTeko text-[18pt] hover:text-[#ca5c5c] py-[4px] rounded-full tracking-wide uppercase">
                                                    {itemCountries.name}
                                                </button>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden hover:cursor-pointer group">
                    <div className="flex items-end justify-end h-[660px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg)' }}>
                        <div className="relative transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                            <div className="absolute top-5 right-5 fontTeko text-[20pt] bg-white text-gray-900 px-[30px] py-[4px] rounded-xl tracking-wide uppercase">
                                America
                            </div>
                            {
                                countries?.map((itemCountries, index) => {
                                    if (itemCountries.area === 'America') {
                                        return (
                                            <button key={index} className="hidden group-hover:block fontTeko text-[18pt] hover:text-[#ca5c5c] py-[4px] rounded-full tracking-wide uppercase">
                                                {itemCountries.name}
                                            </button>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden hover:cursor-pointer group">
                    <div className="flex items-end justify-end h-[660px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/77/25/11/77251128a745bd3e91439943a4014fea.jpg)' }}>
                        <div className="relative transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                            <div className="absolute top-5 right-5 fontTeko text-[20pt] bg-white text-gray-900 px-[30px] py-[4px] rounded-xl tracking-wide uppercase">
                                Oceania
                            </div>
                            {
                                countries?.map((itemCountries, index) => {
                                    if (itemCountries.area === 'Oceania') {
                                        return (
                                            <button key={index} className="hidden group-hover:block fontTeko text-[18pt] hover:text-[#ca5c5c] py-[4px] rounded-full tracking-wide uppercase">
                                                {itemCountries.name}
                                            </button>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-sm mx-auto rounded-lg overflow-hidden hover:cursor-pointer group">
                    <div className="flex items-end justify-end h-[660px] w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/9b/cc/10/9bcc10e5b667c4091b65cfeabef7401e.jpg)' }}>
                        <div className="relative transition duration-500 ease-in-out group-hover:bg-gray-900 group-hover:bg-opacity-50 text-white w-full h-full group-hover:flex group-hover:items-center group-hover:justify-center">
                            <div className="absolute top-5 right-5 fontTeko text-[20pt] bg-white text-gray-900 px-[30px] py-[4px] rounded-xl tracking-wide uppercase">
                                Africa
                            </div>
                            {
                                countries?.map((itemCountries, index) => {
                                    if (itemCountries.area === 'Africa') {
                                        return (
                                            <button key={index} className="hidden group-hover:block fontTeko text-[18pt] hover:text-[#ca5c5c] py-[4px] rounded-full tracking-wide uppercase">
                                                {itemCountries.name}
                                            </button>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AreaComponent