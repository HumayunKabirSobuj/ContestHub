import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

import { Link } from "react-router-dom";

const PopularContestSection = () => {



    const axiosPublic = UseAxiosPublic();

    const { data: contests = [] } = useQuery({
        queryKey: ['contests'],
        queryFn: async () => {

            const res = await axiosPublic.get('/contests');
            return res.data;


        }
    })



    return (
        <div>
            <h1 className="text-3xl text-center my-5 font-bold">Popular section</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    contests.slice(0, 6).map(contest => <div key={contest._id} className="card bg-base-100 shadow-xl h-[600px] mt-5 md:px-0 lg:px-0 px-5">
                        <figure><img className="h-[300px] w-full" src={contest.contestImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{contest.ContestName}</h2>

                            <p className='text-left' title={contest.ContestDescription}>{contest.ContestDescription.slice(0, 100)}</p>
                            <p className='text-left'><span className='font-bold'>Attempted count</span> : </p>
                            <div className="card-actions ">
                                <Link to={`/contest/details/${contest._id}`} className="btn btn-primary w-full">Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <div className="text-center my-10">
                <Link to='/allcontests' className="btn  bg-[#21D27A] lg:w-1/3 w-full">Show All</Link>
            </div>

        </div>
    );
};

export default PopularContestSection;