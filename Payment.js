import React, { useState, useEffect } from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();
    var i = 0;
    // const stripe = useStripe();
    // const elements =  useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
   // const [clientSecret, setClientSecret] = useState(true);

    // useEffect(() => {
    //     const getClientSecret =  async () => {
    //         const response = await axios({
    //             method: 'post',
    //             url: `/payments/create?total=${getBasketTotal(basket) * 100}`
    //         });
    //         setClientSecret(response.data.clientSecret)
    //     }
    //     getClientSecret();
    // }, [basket])

    // console.log('THE SECRET IS >>>', clientSecret);

    const handleSubmit = async (event) => {
            event.preventDefault();

        
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < 8; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            var amount = 0;
            <CurrencyFormat
                renderText={(value) => (
                    amount = {value}
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            console.log("DSFDSFSFSFSFDFSFF>>>>", amount);
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(result)
                .set({
                    basket: basket,
                    amount: amount,
                    created: "xyx"
                })
            console.log("SDFDSFDSFDSFDSFFSFf",i);
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch ({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        // })
        // console.log("hEEEEEEEEEEEEEEEEEEEEEEEE>>>>>>>>>>>",payload);
    }
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message :"");
    }

    return (
        <div className='payment'>

            <div className='payment__container'>

                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>

                {/* Delivery Address */}
                <div className='payment__section'>

                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">

                        <p>{user?.email}</p>
                        <p>XXXXXX</p>
                        <p>XXXXXX</p>

                    </div>
                    
                </div>

                {/* Review Item */}
                <div className='payment__section'>

                    <div className='payment__title'>

                        <h3>Review items and delivery</h3>

                    </div>

                    <div className='payment__item'>

                        {basket.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}

                    </div>

                </div>

                {/* Payment Method */}
                <div className='payment__section'>
                    <div className='payment__title'>

                        <h3>Payment Method</h3>

                    </div>
                    <div className='payment__details'>

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button >Buy Now</button>
                            </div>
                                {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
