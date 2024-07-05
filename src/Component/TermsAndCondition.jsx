
const TermsAndCondition = () => {
    return (
        <div className="mt-10">
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <div>
                <div className="space-y-5 lg:mb-10 mb-6 ">
                    <h1 data-aos="fade-down" data-aos-duration="1000" className="text-center lg:text-6xl text-3xl font-bold font-sans bg-gradient-to-r from-primary via-red-600 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">About Us</h1>
                    <p data-aos="fade-up" data-aos-duration="1000" className="text-center lg:text-3xl text-base font-medium bg-gradient-to-r from-primary via-green-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">WELCOME TO OUR COMPANY WEBSITE</p>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:items-center">

                    <div className="lg:hidden flex items-center">
                        <img className="w-1/2 mx-auto" src="https://i.ibb.co/p33jF2J/logo2.png" alt="" />
                    </div>
                    <div className="lg:col-span-2 space-y-4">

                        <p className=" lg:text-3xl text-2xl font-medium bg-gradient-to-r from-primary via-green-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300% ">About our Company & Terms :</p>

                        {/* acordian start here */}

                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                Introduction
                                </div>
                                <div className="collapse-content">
                                    <p>
                                    Overview of ContestHub and acceptance of T&Cs.                               </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                Eligibility
                                </div>
                                <div className="collapse-content">
                                    <p>
                                    Age requirement and authority to enter into an agreement.

                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                User Accounts
                                </div>
                                <div className="collapse-content">
                                    <p>
                                     Requirements for creating and maintaining user accounts.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                Registration for Contests
                                </div>
                                <div className="collapse-content">
                                    <p>
                                    Process and requirements for registering for contests.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                User Conduct
                                </div>
                                <div className="collapse-content">
                                    <p>
                                    Expected behavior and prohibited activities.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium text-[#6133FF]">
                                Content Ownership

                                </div>
                                <div className="collapse-content">
                                    <p>
                                    Rights to user-submitted content and intellectual property.

                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* acordian start here */}

                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="3000" className=" lg:flex hidden items-center justify-center">
                        <img className="w-4/6" src="https://i.ibb.co/p33jF2J/logo2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndCondition;