import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)
 
    return (
        <div className="flex justify-center items-center  h-full"> 
            <div className=" w-2/3 h-2/3  flex flex-col items-center justify-center  bg-[#C8CA4B] shadow-xl rounded-lg overflow-hidden">
                <div className="flex items-center justify-center p-6">
                    <img
                        className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                        src={user?.photoURL}
                        alt="Profile"
                    />
                </div>
                <div className="p-6 ">
                    <h2 className="text-xl font-bold text-center mb-5">{user?.displayName}</h2>
                    <p className="text-gray-600 text-center">{user?.email}</p>


                </div>
            </div>
        </div>
    );
};

export default UserProfile;
