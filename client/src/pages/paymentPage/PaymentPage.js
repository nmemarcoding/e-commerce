import React, {useRef,useEffect,useState} from 'react'
import "./PaymentPage.css"
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import Axios from '../../hook/axios';
import PayPal from '../../components/PayPal/PayPal';


export default function PaymentPage() {
    const [{basket},dispatch] = useStateValue();
    const paypal = useRef()
    const [credentials,setCredentials] = useState({
        Costomer_id: localStorage.getItem("userId"),
        Items: basket,
        Total: getBasketTotal(basket),
        Status: "processing",
        Address: undefined

    })
    const [paid,setPaid] = useState(false);
    const handleChange = (e)=>{
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
    }
    
    const handleClick  = (e)=>{
        e.preventDefault();
       

            Axios.post("order", credentials)
            .then((res) =>{
                console.log(res)
            } ).catch((e)=>{
                
                console.log(e.message);
            })  
    }
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
                setPaid(true)
            },
            onError: async (err) =>{
                console.error(err)
            }
        }).render(paypal.current)
    },[] )
    
    return (
        <div className="PaymentPage">
            
            <div className="paymnet__container">
                <strong> TOTAL : {getBasketTotal(basket).toFixed(2)} $</strong>
                <br></br>
                {paid === false ? <div ref={paypal}></div> : 
                <>
                <label>Address</label>
                <input
                    type="Address"
                    className="form-control"
                    placeholder="Enter Your Address"
                    id="Address"
                    onChange={handleChange}
                />
                <div className="placeOrderBtn__container">
                    <button className="placeOrderBtn" onClick={handleClick}>Place Order</button>
                </div></>}
            </div>
        </div>
    )
}
