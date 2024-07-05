
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

// import useAxiosSecure from "../Hooks/useAxiosSecure";
const AllContestTableRow = ({ contest, idx, handleConfirm, handleDeleteContest,  }) => {


    console.log(contest)
    const handleComment = (e) => {
        e.preventDefault();

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Comment Send Succesfully",
            showConfirmButton: false,
            timer: 1500
        });

        window.location.reload();


    }


    return (
        <tr>
            <td>{idx + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={contest.contestImage} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{contest.ContestName}</td>
            <td className='text-center space-x-2'>
                {
                    contest.status !== "approved" && <button className="btn btn-active btn-ghost btn-sm" onClick={() => handleConfirm(contest)}>Confirm</button>
                }
                {
                    contest.status === "approved" && <button disabled className="btn btn-active  btn-sm "><p className='text-green-400'>Approved</p></button>
                }
                <button onClick={()=>handleDeleteContest(contest)} className="btn btn-active btn-ghost btn-sm">Delete</button>
                {/* <button className="btn btn-active btn-ghost btn-sm">Comment</button> */}
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-sm" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Comment</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Sent Comment</h3>
                        <form onSubmit={handleComment}>
                            {/* <textarea className="textarea textarea-warning" placeholder="Bio"></textarea> */}
                            <textarea name='comment' className="textarea textarea-bordered textarea-warning h-24 w-full my-5" placeholder=""></textarea>



                            {/* if there is a button in form, it will close the modal */}

                            <input type="submit" value="Add Comment" className='btn btn-ghost btn-active' />



                        </form>


                       

                    </div>
                </dialog>

            </td>
        </tr>
    );
};


AllContestTableRow.propTypes = {

    contest: PropTypes.any.isRequired,
    idx: PropTypes.any.isRequired,
    handleConfirm: PropTypes.any.isRequired,
    refetch: PropTypes.any.isRequired,
    handleDeleteContest: PropTypes.any.isRequired,
}

export default AllContestTableRow;