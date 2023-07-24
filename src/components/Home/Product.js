import React from 'react';

const Product = ({p}) => {
    const {img,_id, name,des,price }=p;
    console.log(img);
    return (
        <div className=' border-2 border-green-200 flex flex-col justify-center items-center p-6'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price : {price}</p>
        </div>
    );
};

export default Product;
