import React, {useState} from 'react'
import useFetchData from "../../hooks/useFetchData.js";
import ReactHtmlParser from 'html-react-parser';
import Form from "./Form.jsx";
import ImageWithPlaceholder from "../ImageWithPlaceholder.jsx";
import TextExpander from "./TextExpander.jsx";

const Services = ({BASE_URL, idCategory, serviceData}) => {
    let SERVICE_URL = `/v1/service?category_id=${idCategory}`;

    const {
        data,
        isLoading,
        error
    } = useFetchData(BASE_URL + SERVICE_URL);

    const currentData = serviceData ? serviceData : data; // Если есть данные в data, используем их

    const [showForm, setShowForm] = useState(false);
    const [serviceName, setServiceName] = useState("");

    const openForm = (name) => {
        setShowForm(true);
        setServiceName(name);
    }
    const closeForm = () => {
        setShowForm(false);
    }
    const goBack = () => {

    }

    return (
        <article>
            {isLoading && <div className="custom-loader"></div>}
            {error && <p style={{color: "white"}}>Ошибка: {error}</p>}
            {!currentData || currentData.length === 0 && (
                <>
                    <p style={{color: "white"}}>По данной категории ещё нет сервисов, попробуйте оплатить позже.</p>
                    <a href={"/"} style={{color: "white"}} onClick={goBack}>Назад</a>
                </>
            )}
            {currentData && currentData.map((item) => (
                <section key={item.id} className={"card_service"}>
                    <section className={"card_service_title"}>
                        <p>{item.title}</p>
                        <ImageWithPlaceholder src={item.picture_url} alt={item.name}/>
                    </section>
                    <section>
                        <p>
                            {item.site}
                        </p>
                        <div>
                            {ReactHtmlParser(item.commission_info)}
                        </div>
                        <div className={"card_service_description"}>
                            {ReactHtmlParser(item.description)}
                        </div>
                        <div className={"card_service_description"}>
                            {ReactHtmlParser(item.description_company)}
                        </div>
                    </section>
                    {item.instruction &&
                        <TextExpander instruction={"Как оплатить"} content={ReactHtmlParser(item.instruction)}/>
                    }
                    <button className={"article_payment_btn"} onClick={() => openForm(item.name)}>Оплатить</button>
                    {showForm && serviceName === item.name && (
                        <div className={"form_overlay"}>
                            <Form BASE_URL={BASE_URL} closeForm={closeForm} serviceName={item.name}></Form>
                        </div>
                    )}
                </section>
            ))}
        </article>)
}

export default Services
