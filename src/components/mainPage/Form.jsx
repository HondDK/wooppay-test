import React, {useState} from 'react';
import useFetchData from "../../hooks/useFetchData.js";
import * as yup from 'yup';
import ImageWithPlaceholder from "../ImageWithPlaceholder.jsx";

const Form = ({BASE_URL, serviceName, closeForm}) => {
    const SERVICE_URL = `/v1/service/${serviceName}`;

    const {data, isLoading, error} = useFetchData(BASE_URL + SERVICE_URL);

    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const handleInputChange = (item, value) => {
        setFormData({...formData, [item.name]: value});
    };

    //Схема валидации
    const validationSchema = yup.object().shape(
        data && data.fields.reduce((schema, field) => {
            if (field.title !== null && field.title !== undefined && field.title.trim() !== '') {
                if (field.type === "string") {
                    schema[field.name] = yup
                        .string()
                        .required(`Поле "${field.title}" обязательно для заполнения`);
                } else if (field.type === "amount") {
                    schema[field.name] = yup
                        .number()
                        .typeError(`Введите число в поле "${field.title}"`)
                        .required(`Поле "${field.title}" обязательно для заполнения`);
                }
            }
            return schema;
        }, {})
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        validationSchema.validate(formData, {abortEarly: false})
            .then(() => {
                // если форма валидная
                console.log('Форма:', formData);
            })
            .catch((validationErrors) => {
                //если форма не валидна
                const newFormErrors = {};
                validationErrors.inner.forEach(error => {
                    newFormErrors[error.path] = error.message;
                });
                setFormErrors(newFormErrors);
                console.log(formErrors)
            });
    };

    return (
        <form>
            {isLoading && <div className="custom-loader"></div>}
            {error && <p>Ошибка: {error}</p>}
            <img onClick={closeForm} className={"form_close_btn"} alt={"close_form_button"}
                 src={"./img/close_btn.png"}/>
            <div className={"form_header"}>
                {data &&
                    <>
                        <p>{data.title}</p>
                        <ImageWithPlaceholder alt={"logo_service"} src={data.picture_url}/>
                    </>
                }
            </div>
            {data &&
                data.fields &&
                data.fields.map((item) => {
                    // Проверяем, скрыто ли поле
                    if (!item.hidden) {
                        return (<>
                            <div className={"form_content"} key={item.title}>
                                <label>{item.title}</label>
                                <input
                                    type={item.type === "amount" ? "number" : "text"}
                                    value={formData[item.name] || ''}
                                    onChange={(e) => handleInputChange(item, e.target.value)}
                                />
                            </div>
                        </>);
                    } else {
                        return null; // Если item.title равен null или undefined или пустая строка, пропускаем отображение
                    }
                })}
            {Object.keys(formErrors).length > 0 && (
                <div className="form_errors">
                    {Object.values(formErrors).map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}
            <button onClick={handleSubmit}>Оплатить</button>
        </form>
    );
};

export default Form;
