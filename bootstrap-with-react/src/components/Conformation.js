import React from 'react'
import { Toast, ToastHeader, ToastBody } from 'react-bootstrap';

function Conformation({ toggle }) {

    return (
        <Toast onClose={() => toggle(false)}>
            <ToastHeader>
                <strong className='mr-auto'>Your order is in the oven.</strong>
                <small>just now</small>
            </ToastHeader>
            <ToastBody>
                Your delicious pizza will be with you in 30 minutes!
            </ToastBody>
        </Toast>
    )
}
export default Conformation