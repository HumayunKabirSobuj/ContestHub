import PropTypes from 'prop-types';
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 text-center mx-auto my-4">
            <p className="text-sm font-normal text-[#37CB23] mb-2 ">---{subHeading}---</p>
            <h3 className="text-2xl font-normal text-[#151515] uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};
SectionTitle.propTypes = {

    heading: PropTypes.any.isRequired,
    subHeading: PropTypes.any.isRequired,
    
}

export default SectionTitle;