import React, {useState} from 'react';


const ImageWithPlaceholder = ({src, alt}) => {                              //Заглушка на случай отсутствия картинки
    const [hasError, setHasError] = useState(false);

    const handleImageError = () => {
        setHasError(true);
    };
    // Проверка на пустую ссылку или не переданный src
    if (!src || typeof src !== 'string') {
        return <img className={"placeholder"} src={"/img/placeholder.png"} alt="Картинка отсутствует"/>;
    }

    return (
        <img className={"placeholder"}
             src={hasError ? "/img/placeholder.png" : src}
             alt={alt}
             onError={handleImageError}
        />
    );
};

export default ImageWithPlaceholder;