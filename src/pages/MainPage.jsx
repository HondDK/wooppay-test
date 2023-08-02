import React, {useState} from 'react';
import Header from "../components/header/Header.jsx";
import "../components/mainPage/style.scss";
import Categories from "../components/mainPage/Categories.jsx";
import Services from "../components/mainPage/Services.jsx";

const MainPage = () => {
    const BASE_URL = "https://api.yii2-stage.test.wooppay.com";


    // Состояние данных, которые нужно передать в компонент Services
    const [idCategory, setIdCategory] = useState(null);

    // Функция для обновления данных, которую можно вызвать в компоненте Category
    const updateIdCategory = (data) => {
        setIdCategory(data);
    };
    const [searchQuery, setSearchQuery] = useState('');
    const updateSearchQuery = (data) => {
        setSearchQuery(data);
    }

    return (
        <>
            <Header updateSearchQuery={updateSearchQuery}></Header>
            <main>
                {!idCategory &&
                    <Categories searchQuery={searchQuery} updateIdCategory={updateIdCategory} BASE_URL={BASE_URL}/>
                }
                {idCategory &&
                    <Services idCategory={idCategory} BASE_URL={BASE_URL}/>
                }
            </main>
        </>);
};

export default MainPage;
