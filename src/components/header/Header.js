import React from 'react'
import "./style.scss"

const Header = ({updateSearchQuery}) => {

    const changeSearchQuery = (id) => {
        updateSearchQuery(id)
    }

    return (
        <header>
            <div className={"header_contact"}>
                <p>{"help@gmail"}</p>
                <p>{"RU"}</p>
            </div>
            <nav>
                <a className={""} href={"123"}>
                    <img className={"logo"} alt={"logo"}
                         src={"https://www.wooppay.com/themes/wooppay_5/gfx/svg/woppayLogoGradient.svg"}/>
                </a>
                {/*<BurgerMenu></BurgerMenu>*/}
                <div className={"header_input"}>
                    <input onChange={(e) => changeSearchQuery(e.target.value)} placeholder={"Поиск"}/>
                    <button className={"header_nav_search_btn"}>
                        <img alt={"search"} src={"/img/search.svg"}/>
                    </button>
                </div>
                <a className={"header_login_btn"} href={"123"}>Логин</a>
            </nav>
    </header>
    )}

export default Header
