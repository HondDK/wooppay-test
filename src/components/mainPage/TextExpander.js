
import React, { useState } from 'react';

const TextExpander = ({ instruction, content }) => {                    //раскрытие текста
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`text-container ${expanded ? 'expanded' : ''}`}>
            <p className="instruction" onClick={handleToggleExpand}>
                {instruction} <span className="arrow">↓</span>
            </p>
            <p className="text">{content}</p>
        </div>
    );
};

export default TextExpander;
