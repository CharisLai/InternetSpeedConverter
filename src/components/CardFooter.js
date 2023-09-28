import React from 'react'

// Step2 透過props取得從父層傳入的資料
const CardFooter = (props) => {
    const { inputValue } = props;
    let criteria = {};

    if (!inputValue) {
        criteria = {
            title: '---',
            backgroundColor: '#d3d8e2',
        }
    } else if (inputValue < 15) {
        criteria = {
            title: 'SLOW',
            backgroundColor: '#ee362d',
        }
    } else if (inputValue < 40) {
        criteria = {
            title: 'GOOD',
            backgroundColor: '#1b82f1',
        }
    } else if (inputValue >= 40) {
        criteria = {
            title: 'FAST',
            backgroundColor: '#13d569',
        }
    }

    return (
        <div className="card-footer"
            style={{
                backgroundColor: criteria.backgroundColor
            }}>
            {criteria.title}
        </div>);
}
export default CardFooter