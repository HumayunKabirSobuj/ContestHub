import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const MyWinContest = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    console.log(user?.email)

    const { data: MyWinContest = [] } = useQuery({
        queryKey: ['MyWinContest'],
        queryFn: async () => {

            const res = await axiosSecure.get(`/payments/myEmail/${user?.email}`);
            return res.data;


        }
    })

    console.log(MyWinContest)


    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-5">My win contest </h1>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Contest Name</th>
                            <th>Prize Money</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            MyWinContest.map((contest, idx )=> <tr key={contest._id}>
                                <th>{idx+1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img
                                                src={contest?.contestImage}
                                                alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{contest?.ContestName}</td>
                                <td>{contest?.PrizeMoney} $</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWinContest;