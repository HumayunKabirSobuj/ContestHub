import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

import Swal from 'sweetalert2';
import AllContestTableRow from './AllContestTableRow';


const ManageContest = () => {


    const axiosSecure = useAxiosSecure();

    const { data: contests = [], refetch , } = useQuery({
        queryKey: ['contests'],
        queryFn: async () => {

            const res = await axiosSecure.get('/contests');
            return res.data;


        }
    })












    const handleConfirm = (contest) => {
        // console.log(contest)

        axiosSecure.patch(`/contests/${contest._id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Successfully Approved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload();
                }
            })
    }

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

















    // console.log(users)
    return (
   
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className='border border-green-400 rounded-xl'>
                            <th className='text-base'>#</th>
                            <th className='text-base'>Image</th>
                            <th className='text-base'>Contest Name</th>

                            <th className='text-base text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            contests.map((contest, idx) => <AllContestTableRow  contest={contest} key={contest._id} idx={idx} handleConfirm={handleConfirm} handleDeleteContest={handleDeleteContest} refetch={refetch}></AllContestTableRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageContest;







