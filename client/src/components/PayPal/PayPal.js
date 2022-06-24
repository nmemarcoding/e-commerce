import React, {useRef,useEffect} from 'react'
import "./PayPal.css"
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
export default function PayPal() {
    const [{basket},dispatch] = useStateValue();
    const paypal = useRef()
    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: "Cool looking table",
                      amount: {
                        currency_code: "USD",
                        value: getBasketTotal(basket).toFixed(2),
                      },
                    },
                  ],
                });
              },
            onApprove: async (data,actions) =>{
                const order = await actions.order.capture()
                console.log( order)
            },
            onError: async (err) =>{
                console.error(err)
            }
        }).render(paypal.current)
    },[] )
    return (
        <div className="payPal">
            <div ref={paypal}></div>
        </div>
    )
}
