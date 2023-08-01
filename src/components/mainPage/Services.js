import React, {useState} from 'react'
import useFetchData from "../../hooks/useFetchData";
import ReactHtmlParser from 'html-react-parser';
import Form from "./Form";

const Services = ({BASE_URL, idCategory}) => {

    const SERVICE_URL = `/v1/service?category_id=${idCategory}`

    const [showForm, setShowForm] = useState(false);
    const [serviceName, setServiceName] = useState("");

    const openForm = (name) => {
        setShowForm(true);
        setServiceName(name);
    }
    const closeForm = () => {
        setShowForm(false);
    }



    const {
        data,
        isLoading,
        error
    } = useFetchData(BASE_URL + SERVICE_URL);

    console.log(data)
    return (
        <article>
            {isLoading && <div className="custom-loader"></div>}
            {error && <p>Ошибка: {error}</p>}
            {!data || data.length === 0 &&
                <p>По данной категории ещё нет сервисов, попробуйте оплатить позже.</p>
            }

            {
                data && data.map((item) => (
                    <div key={item.id} className={"card_service"}>
                        <div className={"card_service_title"}>
                            <p>{item.title}</p>
                            <img src={item.picture_url} alt={item.name}/>
                        </div>
                        {ReactHtmlParser(item.commission_info)}
                        <p>{item.site}</p>
                        {ReactHtmlParser(item.instruction)}
                        <p className={"card_service_description_p"}>{ReactHtmlParser(item.description)}</p>
                        <p className={"card_service_description_p"}>{ReactHtmlParser(item.description_company)}</p>
                        <button className={"article_payment_btn"} onClick={() => openForm(item.name)}>Оплатить</button>
                        {showForm && serviceName === item.name && (
                            <div className={"form_overlay"}>
                                <Form closeForm={closeForm} serviceName={item.name}></Form>
                            </div>
                        )}
                    </div>
                ))}
        </article>)
}

export default Services
