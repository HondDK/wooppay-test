import React from 'react'
import useFetchData from "../../hooks/useFetchData";

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
            const titleMatch = item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase());
            return titleMatch;
        }).sort((a, b) => a.position - b.position)
        : [];

    return (
        <article>
            {isLoading && <div className="custom-loader"></div>}
            {error && <p>Ошибка: {error}</p>}
            {filteredAndSortedItems && filteredAndSortedItems.map((item) => (
                <div onClick={() => changeIdCategory(item.id)} key={item.id} className={"card_service"}>
                    <div className={"card_service_title"}>
                        <p>{item.title}</p>
                        <img src={item.picture_url} alt={item.name}/>
                    </div>
                    <p className={"card_service_description_p"}>{item.description}</p>
                    {/*{showForm && serviceName === item.name && (
                            <div className={"form_overlay"}>
                                <Form serviceName={item.name}></Form>
                            </div>
                        )}*/}
                </div>))}
        </article>
    )
}

export default Categories
