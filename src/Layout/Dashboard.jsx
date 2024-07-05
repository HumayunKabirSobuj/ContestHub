

import { useContext, } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const Dashboard = () => {


    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const res = await axiosSecure.get('/users');
            return res.data;


        }
    })

    const UserInfo = users?.find(author => author.email === user?.email);
    // console.log(UserInfo)




    return (
        <div>
           

            <div className="lg:flex gap-10">
                <div className="drawer lg:drawer-open lg:w-72">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
                    <div className="drawer-content flex flex-col items-start ">
                        {/* Page content here */}
                        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label> */}
                        <label htmlFor="my-drawer-2" className="btn bg-none drawer-button lg:hidden ">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                        </label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
                        <ul className="menu p-4 w-72 min-h-full  text-base-content bg-[#6EEDDD] rounded-2xl text-center">
                            {/* Sidebar content here */}



                            {
                                UserInfo?.role === "admin" &&
                                <div>
                                    <h1 className="text-2xl font-bold my-3">Admin Dashboard</h1>
                                    <div className="divider"></div>
                                    <div className="space-y-2">
                                        <li className="text-base font-semibold"><NavLink to="/dashboard/manageuser">Manage User</NavLink></li>
                                        <li className="text-base font-semibold"><NavLink to="/dashboard/managecontests">Manage Contests</NavLink></li>
                                    </div>
                                </div>
                            }

                            {/* Admin Dashboard */}





                            {/* Creator Dashboard */}

                            {
                                UserInfo?.role === "creator" && <div>
                                    <h1 className="text-2xl font-bold my-3">Creator Dashboard</h1>
                                    <div className="divider"></div>
                                    <div className="space-y-2">
                                        <li className="text-base font-semibold"><NavLink to="/dashboard/addcontest">Add Contest</NavLink></li>
                                        <li className="text-base font-semibold"><NavLink to="/dashboard/mycreatedcontest">My Created Contest</NavLink></li>
                                        
                                    </div>
                                </div>
                            }

                            {/* User Dashboard */}

                            {
                                UserInfo?.role === "user" &&
                                <div>
                                    <h1 className="text-2xl font-bold my-3">User Dashboard</h1>
                                    <div className="divider"></div>
                                    <div className="space-y-2">
                                        <li className="text-base font-semibold"><NavLink to="/dashboard/myparticipatedcontest">My Participated Contest</NavLink></li>
                                        <li className="text-base font-semibold"><NavLink to="/dashboard/mywinningcontestpage">My Winning Contest Page</NavLink></li>
                                        <li className="text-base font-semibold"><NavLink to="/dashboard/myprofile">My Profile</NavLink></li>
                                    </div>
                                </div>

                            }






                        </ul>

                    </div>
                </div>


                <div className="flex-1 px-5 md:px-0 lg:px-0">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;