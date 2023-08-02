import React from 'react'
import useFetchData from "../../hooks/useFetchData.js";
import ImageWithPlaceholder from "../ImageWithPlaceholder.jsx";

const Categories = ({BASE_URL, updateIdCategory, searchQuery}) => {
    const CATEGORIES_URL = "/v1/service-category";

    const {data, isLoading, error} = useFetchData(BASE_URL + CATEGORIES_URL);

    console.log(data);
    const changeIdCategory = (id) => {
        updateIdCategory(id)
    }
    //сортировка по позиции
    //const sortedData = data ? data.sort((a, b) => a.position - b.position) : null

    // Поиск и сортировка результатов
    const filteredAndSortedItems = data
        ? data.filter((item) => {
            return item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase());
        }).sort((a, b) => a.position - b.position)
        : [];

    return (
        <article className={"category"}>
            {isLoading && <div className="custom-loader"></div>}
            {error && <p style={{color: "white"}}>Ошибка: {error}</p>}
            {!isLoading && filteredAndSortedItems && filteredAndSortedItems.length === 0 &&
                <p style={{color: "white"}}>Ничего не найдено...</p>
            }
            {filteredAndSortedItems && filteredAndSortedItems.map((item) => (
                <section onClick={() => changeIdCategory(item.id)} key={item.id} className={"card_category"}>
                    <section className={"card_category_title"}>
                        <p>{item.title}</p>
                        <ImageWithPlaceholder src={item.picture_url} alt={item.name}/>
                    </section>
                    <p className={"card_service_description_p"}>{item.description}</p>
                </section>
            ))}
        </article>
    )
}

export default Categories
