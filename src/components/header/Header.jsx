import React, {useState} from 'react'
import "./style.scss"

const Header = ({updateSearchQuery}) => {

    const [searchData, setSearchData] = useState("");
    const changeSearchQuery = (query) => {
        setSearchData(query)
    }
    const handleSubmit = () => {
        updateSearchQuery(searchData)
    }

    return (
        <header>
            <div className={"header_contact"}>
                <p>{"help@gmail"}</p>
                <p>{"RU"}</p>
            </div>
            <nav>
                <a href={"/"}>
                    <img className={"logo"} alt={"logo"}
                         src={"/img/logo.svg"}/>
                </a>
                <div className={"header_input"}>
                    <input onChange={(e) => changeSearchQuery(e.target.value)} placeholder={"Поиск"}/>
                    <button onClick={handleSubmit} className={"header_nav_search_btn"}>
                        <img alt={"search"} src={"/img/search.svg"}/>
                    </button>
                </div>
                <a className={"header_login_btn"} href={"123"}>Логин</a>
            </nav>
    </header>
    )}

export default Header
