import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Component/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


// TODO : Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);



const Payment = () => {
    const contest=useLoaderData();
    // console.log(contest)


    return (
        <div className="flex flex-col justify-center gap-20">
            <SectionTitle

                subHeading={"Pay Your Choice Contest"}
                heading={"Payment Here"}

            ></SectionTitle>

            <div className="w-2/3 mx-auto">

                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>

            </div>


        </div>
    );
};

export default Payment;