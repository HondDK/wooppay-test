import React, {useState} from 'react';
import useFetchData from "../../hooks/useFetchData";

const Form = ({serviceName, closeForm}) => {
    const BASE_URL = "https://api.yii2-stage.test.wooppay.com";
    const SERVICE_URL = `/v1/service/${serviceName}`;

    const {data, isLoading, error} = useFetchData(BASE_URL + SERVICE_URL);
    console.log(data);

    const [formData, setFormData] = useState({});

    const handleInputChange = (fieldName, value) => {
        setFormData({...formData, [fieldName]: value});
    };

    return (

        <form>
            {isLoading && <div className="custom-loader"></div>}
            {error && <p>Ошибка: {error}</p>}
            <img onClick={closeForm} className={"form_close_btn"} alt={"123"}
                 src={"https://cdn4.iconfinder.com/data/icons/geomicons/32/672366-x-512.png"}/>
            {data &&
                data.fields &&
                data.fields.map((item) => {
                    // Проверяем, что item.title существует и не равен null или undefined и не является пустой строкой
                    if (item.title !== null && item.title !== undefined && item.title.trim() !== "") {
                        return (
                            <div className={"form_content"} key={item.title}>
                                <label>{item.title}</label>
                                <input
                                    type="text"
                                    value={formData[item.title] || ''}
                                    onChange={(e) => handleInputChange(item.title, e.target.value)}
                                />
                            </div>
                        );
                    } else {
                        return null; // Если item.title равен null или undefined или пустая строка, пропускаем отображение
                    }
                })}
            <button>Оплатить</button>
        </form>


    );

};

export default Form;
