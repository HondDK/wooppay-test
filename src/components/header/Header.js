import React from 'react'
import CartButton from "./CartButton";
import "./style.scss"
import BurgerMenu from "./BurgerMenu";

const Header = ({updateSearchQuery}) => {

    const changeSearchQuery = (id) => {
        updateSearchQuery(id)
    }

    return (
        <header>
            <div className={"header_contact"}>
                <p>{"@@gmail"}</p>
                <p>{"RU"}</p>
            </div>
            <nav>
                <a className={""} href={"123"}><img className={"logo"} alt={"logo"} src={"/img/logo.svg"}/></a>
                <button className={"header_catalog"}><img src={"img/menu.svg"} alt="burger menu"/>
                    Категории
                </button>
                <div className={"header_input"}>
                <input onChange={(e) => changeSearchQuery(e.target.value)} placeholder={"Поиск"}/>
                <BurgerMenu></BurgerMenu>
                <button className={"header_nav_search_btn"}>
                    <img alt={"search"} src={"/img/search.svg"}/>
                </button>
            </div>
            <CartButton src={"/img/favorite_border.svg"}></CartButton>
            <CartButton src={"/img/shopping_cart.svg"}></CartButton>
            <a className={"header_login_btn"} href={"123"}>Логин</a>
        </nav>
    </header>
    )}

export default Header
