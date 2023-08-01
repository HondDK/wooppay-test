import React from 'react';
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


    return (<>
        <Header></Header>
        <main>
            {/*<ImageSlider images={images}></ImageSlider>*/}
            {/*<Categories BASE_URL={BASE_URL}/>*/}
            <Services BASE_URL={BASE_URL}/>
        </main>
    </>);
};

export default MainPage;
