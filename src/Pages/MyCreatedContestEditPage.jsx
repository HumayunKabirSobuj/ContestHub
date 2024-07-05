
import { useForm } from "react-hook-form";




import useAxiosSecure from "../Hooks/useAxiosSecure";

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const MyCreatedContestEditPage = () => {

    const loddedContest = useLoaderData();
    const {_id}=loddedContest;
    // console.log(_id)
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.table(data)

        const contestItem = {



            ContestName: data.ContestName,
            ContestPrice: data.ContestPrice,
            PrizeMoney: data.PrizeMoney,
            TaskSubmissiontextinstruction: data.TaskSubmissiontextinstruction,
            ContestDescription: data.ContestDescription,



        }

        console.table(contestItem)
        axiosSecure.patch(`/contests/edit/${_id}`, contestItem)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    // refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Updated Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    window.location.reload();
                }
            })



    }

    return (
        <div>

            <div>
                <h1 className="text-3xl text-center font-bold my-6">Edit Contest</h1>
                <form onSubmit={handleSubmit(onSubmit)}>


                    {/* ContestName */}
                    <label className="form-control w-full mb-6">
                        <div className="label">
                            <span className="label-text">Contest Name *</span>

                        </div>
                        <input
                            {...register("ContestName", { required: true })}
                            defaultValue={loddedContest.ContestName}
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
                            {/* <select defaultValue={loddedContest.category} {...register('category', { required: true })}
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
                            </select> */}

                            <div disabled className="input input-bordered w-full flex items-center">
                                {/* <button className="input input-bordered w-full text-start text-xl">
                                <DatePicker className="" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </button> */}
                                <p> {loddedContest.category}</p>
                            </div>

                        </label>

                        {/*Contest Price */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Contest Price *</span>

                            </div>
                            <input
                                defaultValue={loddedContest.ContestPrice}
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
                                defaultValue={loddedContest.PrizeMoney}
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
                                <input disabled type="file" className="file-input file-input-bordered file-input-info w-full " />
                            </div>

                        </label>





                    </div>

                    {/* Contest Deadline */}

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Contest Deadline </span>
                        </label>
                        <div disabled className="input input-bordered w-full flex items-center">
                            {/* <button className="input input-bordered w-full text-start text-xl">
                                <DatePicker className="" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </button> */}
                            <p> {new Date(loddedContest.ContestDeadline).toLocaleDateString()}</p>
                        </div>
                        {/* <input type="text" name="price" placeholder="Expired_Date" className="input input-bordered" required /> */}
                    </div>






                    {/*Task Submission text instruction  */}

                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Task Submission text instruction *</span>

                        </div>
                        <input
                            defaultValue={loddedContest.TaskSubmissiontextinstruction}
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
                        <textarea
                            defaultValue={loddedContest.ContestDescription}
                            {...register("ContestDescription", { required: true })}
                            className="textarea textarea-bordered h-24" placeholder="Contest Description"></textarea>

                    </label>




                    <input type="submit" value="Update" className="btn bg-[#D2B48C] my-5" />
                </form>
            </div>
        </div>
    );
};

export default MyCreatedContestEditPage;