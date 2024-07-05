import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const CheckOutForm = () => {

    const { user } = useContext(AuthContext)

    const navigate=useNavigate();
    const loddedContest = useLoaderData();
    // console.log(loddedContest)
    const totalPrice = parseInt(loddedContest.ContestPrice);
    // console.log(price)


    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');


    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, totalPrice])


    const handleSubmit = async (event) => {



        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('Payment Error', error);
            setError(error.message);
        } else {
            // console.log('Payment Method', paymentMethod);
            setError('');
        }


        // confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if (confirmError) {
            // console.log('confirm error')
        }
        else {
            // console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                // console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
            }
             // now save the payment in the database
             const payment = {
                email: user.email,
                name: user.displayName,
                
                price: totalPrice,
                transactionId: paymentIntent.id,
                contestId: loddedContest._id,
                CreatorEmail: loddedContest.CreatorEmail,
                CreatorName: loddedContest.CreatorName,
                contestImage: loddedContest.contestImage,

                ContestName: loddedContest.ContestName,

                category: loddedContest.category,
                ContestPrice: loddedContest.ContestPrice,
                PrizeMoney: loddedContest.PrizeMoney,
                winStatus:"not win"
                
            }

            const res = await axiosSecure.post('/payments', payment);
            // console.log('payment saved', res.data);
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Payment Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/myparticipatedcontest')

               
            }


        }



    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '24px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',

                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="flex justify-center ">
                <button className="btn btn-sm btn-primary my-6 w-1/3" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
            <p className="text-red-500 text-center text-xl my-2 font-bold">{error}</p>
            {transactionId && <p className="text-green-600 text-center text-xl my-2 font-bold"> Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckOutForm;