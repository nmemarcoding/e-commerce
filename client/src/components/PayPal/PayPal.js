import React, {useRef,useEffect} from 'react'
import "./PayPal.css"
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
export default function PayPal() {
    const [{basket},dispatch] = useStateValue();
    const paypal = useRef()
    
    return (
        <div className="payPal">
            <div ref={paypal}></div>
        </div>
    )
}
