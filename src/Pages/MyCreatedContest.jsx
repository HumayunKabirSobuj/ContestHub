import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCreatedContest = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: contests = [], refetch } = useQuery({
        queryKey: ['contests'],
        queryFn: async () => {

            const res = await axiosSecure.get('/contests');
            return res.data;



        }
    })


    const handleDeleteContest = (contest) => {

        // console.log(contest)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {


                    axiosSecure.delete(`/contests/${contest._id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                refetch();
                            }
                        })




                }
            });
    }





    // console.log(contests)

    const myContest = contests.filter(contest => contest.CreatorEmail === user?.email);
    // console.log(myContest)

    return (
        <div>
            <table className="table">
                {/* head */}
                <thead >
                    <tr className='border border-green-400 rounded-xl'>
                        <th className='text-base'>#</th>
                        <th className='text-base'>Image</th>
                        <th className='text-base'>Contest Name</th>
                        <th className='text-base '>Status</th>
                        <th className='text-base '>Action</th>
                        <th className='text-base '>Submission</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myContest.map((contest, index) => <tr key={contest._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src={contest.contestImage} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                            </td>
                            <td>{contest.ContestName}</td>
                            <td>

                                <div className=' space-x-2'>

                                    {
                                        contest.status !== "approved" && <button disabled className="btn btn-active btn-ghost btn-sm" >Panding</button>
                                    }
                                    {
                                        contest.status === "approved" && <button disabled className="btn btn-active  btn-sm "><p className='text-green-400'>accepted</p></button>
                                    }
                                </div>
                            </td>
                            <td>

                                {
                                    contest.status === "approved" ? <div className="flex items-center gap-2">
                                        <button disabled className="btn btn-active btn-ghost btn-sm"><Link to={`/editcontest/${contest._id}`}>Edit</Link></button>
                                        <button disabled onClick={() => handleDeleteContest(contest)} className="btn btn-active btn-ghost btn-sm" >Delete</button>
                                    </div>
                                        :
                                        <div className="flex items-center gap-2">
                                            <button className="btn btn-active btn-ghost btn-sm"><Link to={`/dashboard/editcontest/${contest._id}`}>Edit</Link></button>
                                            <button onClick={() => handleDeleteContest(contest)} className="btn btn-active btn-ghost btn-sm" >Delete</button>
                                        </div>
                                }









                            </td>

                            <td>
                                <Link state={{ id: contest._id }} to="/dashboard/contestsubmittedpage" className="btn btn-active btn-ghost btn-sm">See Submission</Link>
                            </td>





                        </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyCreatedContest;