import React, {useState} from 'react'
import useFetchData from "../../hooks/useFetchData";

const BurgerMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const BASE_URL = "https://api.yii2-stage.test.wooppay.com";
    const SERVICE_URL = "/v1/service-category";

    const {data, isLoading, error} = useFetchData(BASE_URL + SERVICE_URL);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (<div>

        <nav className={isMenuOpen ? 'menu open' : 'menu'}>
            <ul>
                {data && data.map((item) => <>
                    <li><img alt={""} src={item.picture_url}/>{item.title} </li>
                </>)}
            </ul>
        </nav>
    </div>)
}

export default BurgerMenu
