import React from 'react'

const CartButton = ({...props}) => {
    return (<>
            <a className={"header_cart_btn"} href={props.href}><img alt={"cart"} src={props.src}/></a>
        </>)
}

export default CartButton
