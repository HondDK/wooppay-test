import React, {useState} from 'react';
import Header from "../components/header/Header";
import "../components/mainPage/style.scss";
import Categories from "../components/mainPage/Categories";
import Services from "../components/mainPage/Services";

const MainPage = () => {
    const BASE_URL = "https://api.yii2-stage.test.wooppay.com";

    // const handleOpenForm = (item) => {
    //     setServiceName(item.name);
    //     setShowForm(true);
    // };

    // Состояние данных, которые нужно передать в компонент Services
    const [idCategory, setIdCategory] = useState(null);

    // Функция для обновления данных, которую можно вызвать в компоненте Category
    const updateIdCategory = (data) => {
        setIdCategory(data);
    };

    return (<>
        <Header></Header>
        <main>
            {/*<ImageSlider images={images}></ImageSlider>*/}
            {!idCategory &&
                <Categories updateIdCategory={updateIdCategory} BASE_URL={BASE_URL}/>
            }
            {idCategory &&
                <Services idCategory={idCategory} BASE_URL={BASE_URL}/>
            }
        </main>
    </>);
};

export default MainPage;
