import React, { useState } from 'react';

export default ({handler, isReverse}) => {
    const [isRotated, setRotated] = useState(isReverse);
    const imgHandler = () => {
        setRotated(!isRotated);
        handler()
    };
    return (
        <img
            src="https://image.flaticon.com/icons/png/512/25/25623.png" alt="changeSort"
            onClick={imgHandler}
            style={{
                width: '10px',
                height: '10px',
                marginLeft: '8px',
                transform: `rotate(${isRotated ? '180deg' : '0'})`,
            }}
        />
    )
}
