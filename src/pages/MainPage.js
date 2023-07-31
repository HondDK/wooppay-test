import React from 'react'
import Header from "../components/header/Header";

import useFetchData from "../hooks/useFetchData";
import "./style.scss"

const MainPage = () => {

   // const images = ['https://sun2-20.userapi.com/impg/Y4bNQTUctKHsBZIM-CPgO-rByfYmPpcvaYpZqw/P2WjrTEjLG8.jpg?size=1080x1349&quality=96&sign=60e7036601637dc1235d0b1317495af9&type=album', 'https://sun2-19.userapi.com/impg/H5PnWf3VjFHEfyPgHz7p7dmi7dg3FmCjDFZs-Q/Iqd6jj65qvY.jpg?size=1080x1350&quality=96&sign=b19d6729af76bf5e9840dcb89d9df034&type=album', 'https://sun9-78.userapi.com/impg/tQMTxQkm59zaCKb7dkxF5_yF9en9MzYUHWM53g/2owTKg5JOHI.jpg?size=564x940&quality=96&sign=d479a0c286f7cf53e8e18dd59e530df6&type=album',];
    const BASE_URL = "https://api.yii2-stage.test.wooppay.com"
    const SERVISE_URL = "/v1/service-category"


    const {data, isLoading, error} = useFetchData(BASE_URL + SERVISE_URL);
    const sortedData = data ? data.sort((a, b) => a.position - b.position) : null;

    console.log(data)




    return (<>
        <Header></Header>
        <main>
            {/*<ImageSlider images={images}></ImageSlider>*/}
            <article>
                {sortedData && sortedData.map((item) => (
                    <div key={item.id} className={"card_service"}>
                        <div className={"card_service_title"}>
                            <p>{item.title}</p>
                            <img src={item.picture_url} alt={item.name}/>
                        </div>
                        <p>{item.description}</p>
                    </div>
                ))}


            </article>
        </main>
    </>)
}

export default MainPage
