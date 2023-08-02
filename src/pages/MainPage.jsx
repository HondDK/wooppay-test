import React, {useState} from 'react';
import Header from "../components/header/Header.jsx";
import "../components/mainPage/style.scss";
import Categories from "../components/mainPage/Categories.jsx";
import Services from "../components/mainPage/Services.jsx";
import useFetchData from "../hooks/useFetchData";

const MainPage = () => {
    const BASE_URL = "https://api.yii2-stage.test.wooppay.com";

    // Состояние данных, которые нужно передать в компоненты
    const [idCategory, setIdCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Функции для обновления данных, которую можно вызвать в компонентах
    const updateIdCategory = (data) => {
        setIdCategory(data);
    };
    const updateSearchQuery = (data) => {
        setSearchQuery(data);
    }

    const SEARCH_URL = `/v1/service/search?name=${searchQuery}`;
    const {data, isLoading, error} = useFetchData(BASE_URL + SEARCH_URL);


    return (
        <>
            <Header updateSearchQuery={updateSearchQuery}/>
            <main>
                {!idCategory && !searchQuery && (
                    <Categories
                        updateIdCategory={updateIdCategory}
                        BASE_URL={BASE_URL}
                    />
                )}
                {((idCategory && !searchQuery) || (idCategory && searchQuery)) && (
                    <Services
                        searchQuery={searchQuery}
                        idCategory={idCategory}
                        BASE_URL={BASE_URL}
                    />
                )}
                {isLoading}
                {searchQuery && !data === 0 && (
                    <p style={{color: "white"}}>Ничего не найдено..</p>
                )}
                {searchQuery && !isLoading && error && <p style={{color: "white"}}>Ошибка:{error}</p>}
            </main>
        </>);
};

export default MainPage;
