import { useForm } from "react-hook-form";



import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddContest = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        // console.table(data)
        const imageFile = { image: data.ContestImage[0] }
        // image upload to imageBB and then get an url 
        const res = await axiosPublic.post(image_hosting_api, imageFile,
            { headers: { 'content-type': 'multipart/form-data' } }
        )

        if (res.data.success) {
            // now send the menu item data to the server with image
            const contestItem = {

                CreatorEmail: user.email,
                CreatorName: user.displayName,

                contestImage: res.data.data.display_url,
                ContestName: data.ContestName,
                category: data.category,
                ContestPrice: data.ContestPrice,
                PrizeMoney: data.PrizeMoney,
                TaskSubmissiontextinstruction: data.TaskSubmissiontextinstruction,
                ContestDescription: data.ContestDescription,
                status: "panding",
                ContestDeadline:startDate,
                comment:[],
                participant:[],
                winStatus:"not win"


            }

            // console.table(contestItem)

            const contestRes = await axiosSecure.post('/contests', contestItem)
            // console.log(contestRes.data)
            if (contestRes.data.insertedId) {
                reset()
                // show sucuss popup
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${data.ContestName} is added to the contests section.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }




        }



    }

    return (
        <div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>


                    {/* ContestName */}
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Contest Name *</span>

                        </div>
                        <input
                            {...register("ContestName", { required: true })}
                            type="text"
                            placeholder="Contest Name"
                            className="input input-bordered w-full"
                        />

                    </label>

                    <div className="flex gap-5 flex-col md:flex-row items-center">
                        {/* category */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category *</span>

                            </div>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select a category...</option>
                                <option value="DesignContests">Design Contests</option>
                                <option value="ArticleWriting">Article Writing</option>
                                <option value="MarketingStrategy">Marketing Strategy</option>
                                <option value="DigitalAdvertisementContests">Digital Advertisement Contests</option>
                                <option value="GamingReview">Gaming Review</option>
                                <option value="BookReview">Book Review</option>
                                <option value="BusinessIdeaConcerts">Business Idea Concerts</option>
                                <option value="MovieReview">Movie Review</option>
                            </select>

                        </label>

                        {/*Contest Price */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Contest Price *</span>

                            </div>
                            <input
                                {...register("ContestPrice", { required: true })}
                                type="number"
                                placeholder="Contest Price"
                                className="input input-bordered w-full"
                            />

                        </label>


                    </div>

                    <div className="flex gap-5 flex-col md:flex-row ">
                        {/* Prize money */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Prize money *</span>

                            </div>
                            <input
                                {...register("PrizeMoney", { required: true })}
                                type="number"
                                placeholder="Prize money"
                                className="input input-bordered w-full"
                            />

                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Image *</span>

                            </div>
                            <div >
                                {/* <input {...register("image", { required: true })} type="file" className="file-input w-full " /> */}
                                <input {...register("ContestImage", { required: true })} type="file" className="file-input file-input-bordered file-input-info w-full " />
                            </div>

                        </label>





                    </div>

                        {/* Contest Deadline */}

                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Contest Deadline </span>
                            </label>
                            <div >
                                <button className="input input-bordered w-full text-start text-xl">
                                    <DatePicker className="" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </button>
                            </div>
                            {/* <input type="text" name="price" placeholder="Expired_Date" className="input input-bordered" required /> */}
                        </div>






                    {/*Task Submission text instruction  */}

                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Task Submission text instruction *</span>

                        </div>
                        <input
                            {...register("TaskSubmissiontextinstruction", { required: true })}
                            type="text"
                            placeholder="Task Submission text instruction"
                            className="input input-bordered w-full"
                        />

                    </label>


                    {/* recipe details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Contest Description *</span>

                        </div>
                        <textarea {...register("ContestDescription", { required: true })}
                            className="textarea textarea-bordered h-24" placeholder="Contest Description"></textarea>

                    </label>




                    <input type="submit" value="Add Contest" className="btn bg-[#D2B48C] my-5" />
                </form>
            </div>
        </div>
    );
};

export default AddContest;