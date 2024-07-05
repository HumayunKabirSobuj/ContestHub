import ContestCard from "./ContestCard";
import PropTypes from 'prop-types';

const ContestTab = ({contest}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    contest.map(contest => <ContestCard contest={contest} key={contest._id}></ContestCard>)
                }
            </div>
        </div>
    );
};
ContestTab.propTypes = {

    contest: PropTypes.any.isRequired,
    
}
export default ContestTab;