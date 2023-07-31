import React, {useState} from 'react';
import Header from "../components/header/Header";
import Form from "../components/mainPage/Form";
import useFetchData from "../hooks/useFetchData";
import "../components/mainPage/style.scss";

const MainPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [serviceName, setServiceName] = useState("");

    const handleOpenForm = (item) => {
        setServiceName(item.name);
        setShowForm(true);
    };


    const BASE_URL = "https://api.yii2-stage.test.wooppay.com";
    const SERVICE_URL = "/v1/service-category";

    const {data, isLoading, error} = useFetchData(BASE_URL + SERVICE_URL);
    const sortedData = data ? data.sort((a, b) => a.position - b.position) : null;

    console.log(data);

    return (<>
        <Header></Header>
        <main>
            {/*<ImageSlider images={images}></ImageSlider>*/}
            <article>
                {isLoading && <div className="custom-loader"></div>}
                {error && <p>Ошибка: {error}</p>}
                {sortedData && sortedData.map((item) => (
                    <div onClick={() => handleOpenForm(item)} key={item.id} className={"card_service"}>
                        <div className={"card_service_title"}>
                            <p>{item.title}</p>
                            <img src={item.picture_url} alt={item.name}/>
                        </div>
                        <p>{item.description}</p>
                        {showForm && serviceName === item.name && (
                            <div className={"form_overlay"}>
                                <Form serviceName={item.name}></Form>
                            </div>
                        )}
                    </div>))}
            </article>
        </main>
    </>);
};

export default MainPage;
