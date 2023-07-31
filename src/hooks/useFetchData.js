import React, {useEffect, useState} from 'react'

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, );
                if (!response.ok) {
                    throw new Error("Ошибка получения данных");
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Произошла неизвестная ошибка");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url,]);

    return {data, isLoading, error};
}

export default useFetchData
