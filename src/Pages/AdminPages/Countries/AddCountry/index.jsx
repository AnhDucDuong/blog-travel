import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import storage from "../../../../firebase"
import CountryAPI from "../../../../Api/countriesAPI";

function AddCountry() {
    const [image, setImage] = useState('');
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        if (image == null)
            return;
        //storage.ref(`/images/${image.name}`).put(image)
        let storageRef = storage.ref(`images/${image.name}`);
        storageRef.put(image).then(function () {
            //console.log('Upload thành công!');
            storageRef.getDownloadURL().then(async (url) => {
                //console.log(url)
                const dataNew = {
                    name: data.name,
                    area: data.area,
                    image: url,
                }

                const createCountry = async () => {
                    try {
                        // call API lấy thông tin
                        await CountryAPI.create(dataNew);
                        navigate('/admin/countries')
                    } catch (error) {
                        console.log(error)
                    }
                };
                createCountry();
            })
        })
    };

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
                <h3 className="text-gray-700 text-3xl font-medium">Add Country</h3>

                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="mt-10 ml-6 mr-10">
                    <div className="grid grid-cols-3 gap-[20px]">
                        <div className="">
                            <h5 className="mb-2 text-xl font-semibold">Name</h5>
                            <input {...register("name", { required: true })} className="w-full h-8 focus:outline-none border border-gray-400 rounded-sm pl-2" type="text" placeholder="Name Post" />
                            {errors.name && <span className="text-red-600">Field is required</span>}
                        </div>

                        <div>
                            <h5 className="mb-2 text-xl font-semibold">Area</h5>
                            <select {...register("area", { required: true })} className="w-full h-8 focus:outline-none border border-gray-400 rounded-sm pl-2">
                                <option selected value="">Area</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="America">America</option>
                                <option value="Oceania">Oceania</option>
                                <option value="Africa">Africa</option>
                            </select>
                            {errors.area && <span className="text-red-600">Field is required</span>}
                        </div>

                        <div className="">
                            <h5 className="mb-2 text-xl font-semibold">Image</h5>
                            <input {...register("image", { required: true })} onChange={(e) => { setImage(e.target.files[0]) }} className="w-full h-8 focus:outline-none border border-gray-400 rounded-sm pl-2 bg-white" type="file" />
                            {errors.image && <span className="text-red-600">Field is required</span>}
                        </div>
                    </div>

                    <div className="mt-4">
                        <button className="bg-indigo-600 px-4 py-2 text-white rounded-md">Add New</button>
                        <input type="reset" value="Reset" className="bg-indigo-600 px-4 py-2 text-white rounded-md ml-2" />
                        <Link to="/admin/countries" className="bg-indigo-600 px-4 py-2 text-white rounded-md ml-2">List Countries</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default AddCountry