import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryAPI from "../../../Api/countriesAPI";

function Countries() {
    const [countries, setCountries] = useState(null);


    useEffect(() => {
        const getCountries = async () => {
            try {
                // call API lấy thông tin
                const { data } = await CountryAPI.list();
                //console.log('countries: ', data)
                await setCountries(data)
            } catch (error) {
                console.log(error)
            }
        };
        getCountries();
    }, []);

    //if (!posts || posts?.length === 0) return <p className="text-[15px]">Không có dữ liệu...</p>

    const onHandleRemove = async (id) => {
        try {
            const { data } = await CountryAPI.remove(id);
            //console.log('data: ', data)
            //console.log('posts: ', posts)
            const newCountries = await countries.filter((value) => value._id !== data._id);
            //await console.log('New posts: ', newPosts)
            await setCountries(newCountries);
        } catch (error) {
        }
    };
    //console.log("posts: ", posts)

    return (
        <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">List Countries</h3>

            <div className="mt-8">
                <Link to="add-country" className="bg-indigo-600 px-4 py-2 text-white rounded-md">Add New</Link>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="btn align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th
                                        className="py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    </th>
                                    <th
                                        className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Name</th>
                                    <th
                                        className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Image</th>
                                    <th
                                        className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Area</th>
                                    <th
                                        className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white">
                                {countries?.map((value, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="">
                                                    <div className="text-sm leading-5 text-gray-500">{index + 1}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="">
                                                    <div className="text-sm leading-5 text-gray-500">{value.name}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="text-sm leading-5 font-medium text-gray-900">
                                                    <img className="h-30 w-40" src={value.image} alt="" />
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="">
                                                    <div className="text-sm leading-5 text-gray-500">{value.area}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td
                                            className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <Link to={'/countryDetail/' + value._id} target="_blank" className="text-[#0E9F6E] hover:text-[#00714b]">Detail</Link>
                                            <Link to={'edit-country/' + value._id} className="ml-6 text-indigo-600 hover:text-indigo-900">Edit</Link>
                                            <button onClick={() => onHandleRemove(value._id)} className="btn ml-6 text-red-600 hover:text-red-700 font-semibold focus:outline-none">Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countries