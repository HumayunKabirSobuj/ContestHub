import { useLocation } from "react-router-dom";
import Error from "./Error";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ContestSubmittedPage = () => {
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const { data: submission = [] } = useQuery({
        queryKey: ['submission'],
        queryFn: async () => {

            const res = await axiosSecure.get(`/payment/${location?.state?.id}`);
            return res.data;



        }
    })
    const { data: winStatus = [] } = useQuery({
        queryKey: ['winStatus'],
        queryFn: async () => {

            const res = await axiosSecure.get(`/contest/${location?.state?.id}`);
            return res.data;



        }
    })


   




    if (location.state === null) {
        return <Error></Error>
    }

    const handleSetWin = (id, contestId) => {
        console.log(id)
        axiosSecure.patch(`/payment/${id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {

                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Participate Win Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload();
                }
            })
        axiosSecure.patch(`/contestStatus/${contestId}`)
            .then(() => {
                // console.log(res.data)
            })

    }








    return (
        <div>
            <p>Contest Submitted Page</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Eamil</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            submission.map(contest => <tr key={contest?._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div >

                                        <div>
                                            <div className="font-bold">{contest?.name}</div>

                                        </div>
                                    </div>
                                </td>

                                <td>{contest?.email}</td>

                                {
                                   winStatus[0]?.winStatus === "win" ?
                                        <th>
                                            <button className="btn btn-xs " disabled>Set Win</button>
                                        </th>
                                        :

                                        <th>
                                            <button onClick={() => handleSetWin(contest._id, contest?.contestId)} className="btn btn-xs  ">Set Win</button>
                                        </th>
                                }
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ContestSubmittedPage;