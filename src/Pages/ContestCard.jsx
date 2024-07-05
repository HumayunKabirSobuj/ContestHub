
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContestCard = ({contest}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[600px] mt-5 md:px-0 lg:px-0 px-5">
                <figure><img className="h-[300px] w-full" src={contest.contestImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{contest.ContestName}</h2>
                   
                    <p className='text-left' title={contest.ContestDescription}>{contest.ContestDescription.slice(0,100)}</p>
                    <p className='text-left'><span className='font-bold'>Attempted count</span> : </p>
                    <div className="card-actions ">
                        <Link to={`/contest/details/${contest._id}`} className="btn btn-primary w-full">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
ContestCard.propTypes = {

    contest: PropTypes.any.isRequired,
    
}

export default ContestCard;