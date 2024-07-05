import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const res = await axiosSecure.get('/users');
            return res.data;


        }
    })

    const { register, handleSubmit, setValue } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    const handleRoleChange = (e, user) => {
        const selectedRole = e.target.value;
        if (selectedRole !== "default") {
            setValue('role', selectedRole);
            handleSubmit(onSubmit)();  // Immediately submit the form
            if (selectedRole === "admin") {
                handleMakeAdmin(user);  // Call handleMakeAdmin if the selected role is Admin
            }
            if (selectedRole === "creator") {
                handleMakeCreator(user);  // Call handleMakeAdmin if the selected role is Admin
            }
            if (selectedRole === "user") {
                handleMakeUser(user);  // Call handleMakeAdmin if the selected role is Admin
            }
        }
    };

    const handleMakeAdmin = (user) => {
        // console.log(user)
        axiosSecure.patch(`/user/admin/${user._id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${user.name} is an Admin now...`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload();
                }
            })
    }
    const handleMakeCreator = (user) => {
        // console.log(user)
        axiosSecure.patch(`/user/creator/${user._id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${user.name} is a Creator now...`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload();
                }
            })
    }
    const handleMakeUser = (user) => {
        // console.log(user)
        axiosSecure.patch(`/user/user/${user._id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${user.name} is a User now...`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload();
                }
            })
    }


    const handleDeleteUser = (user) => {

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


                    axiosSecure.delete(`/users/${user._id}`)
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




    const handleBlockStatusChange = (e, user) => {
        const action = e.target.value;
        // console.log(action)
        // console.log(user)
        if (action === "block") {
            handleBlock(user)
        }
        if (action === "unblock") {
            handleUnblock(user)
        }

    };

    const handleBlock = (user) => {
        axiosSecure.patch(`/user/block/${user._id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success('User Blocked Successfully')
                    window.location.reload();
                }
            })


    }
    const handleUnblock = (user) => {
        axiosSecure.patch(`/user/unblock/${user._id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success('User Unblocked Successfully')
                    window.location.reload();
                }
            })


    }







    // console.log(users)
    return (
        <div className='my-6'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr className='border border-green-400 rounded-xl'>
                            <th className='text-base'>#</th>
                            <th className='text-base'>Name</th>
                            <th className='text-base'>Email</th>
                            <th className='text-base text-center'>Role</th>
                            <th className='text-base text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='text-center'>
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <select {...register("role")} defaultValue="default" onChange={(e) => handleRoleChange(e, user)} className="select select-bordered w-3/2 max-w-sm select-sm ">
                                            <option disabled value="default">{user.role}</option>
                                            {
                                                user.role !== "user" && <option value="user">User</option>
                                            }
                                            {
                                                user.role !== "creator" && <option value="creator">Creator</option>
                                            }
                                            {
                                                user.role !== "admin" && <option value="admin">Admin</option>
                                            }



                                        </select>



                                    </form>
                                </td>


                                <td className='flex gap-2 justify-center'>
                                    <button onClick={() => handleDeleteUser(user)} className="btn btn-sm">Delete</button>
                                   


                                    <form onSubmit={handleSubmit(onSubmit)}>

                                      

                                        <select defaultValue="default"
                                            {...register("blockStatus")}
                                            onChange={(e) => handleBlockStatusChange(e, user)}
                                            
                                            className="select select-bordered w-3/2 max-w-sm select-sm "
                                        >
                                             <option disabled value="default">{user.blockStatus}</option>
                                             {
                                                user.blockStatus !=="block" && <option value="block">Block</option>
                                             }
                                             {
                                                user.blockStatus !=="unblock" && <option value="unblock">Unblock</option>
                                             }
                                            
                                            
                                        </select>



                                    </form>



                                </td>

                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;