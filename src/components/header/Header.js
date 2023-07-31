import React from 'react'
import CartButton from "./CartButton";
import "./style.scss"

const Header = () => {
    return (<header>
        <div className={"header_contact"}>
            <p>{"@@gmail"}</p>
            <p>{"RU"}</p>
        </div>

        <nav>
            <a className={""} href={"123"}><img className={"logo"} alt={"logo"} src={"/img/logo.svg"}/></a>
            <button className={"header_catalog"}><img src={"img/menu.svg"} alt="burger menu"/>Каталог</button>
            <div className={"header_input"}>
                <input placeholder={"Поиск"}/>
                <button className={"header_nav_search_btn"}>
                    <img alt={"search"} src={"/img/search.svg"}/>
                </button>
            </div>
            <CartButton src={"/img/favorite_border.svg"}></CartButton>
            <CartButton src={"/img/shopping_cart.svg"}></CartButton>
            <a className={"header_login_btn"} href={"123"}>Логин</a>
        </nav>
    </header>)
}

export default Header
