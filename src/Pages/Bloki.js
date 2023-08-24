import React from "react";
import "./Pages.css"
import img_1 from "../Components/Img/img_1_bloki.png"
import img_2 from "../Components/Img/img_2_bloki.png"
import Gap from "../Components/Gap/Gap";
import Basement from "../Components/Basement/Basement";
import ButtonAppBar from "../Components/Header/Header";
const Bloki = () => {
    const products = [
        {id: 1, name: "Блок трехролый (для каната и веревки)", image: img_1},
        {id: 2, name: " Блоки (монтажные, траловые)", image: img_2},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1>Блоки</h1>
            <div className="catalog">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt="Product Image"/>
                        <a className="product-name">{product.name}</a>
                    </div>
                ))}
            </div>
            <Gap/>
            <Basement/>

        </div>

    );
};

export default Bloki;
