import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_1_svarochnye_invertory.jpg"
import img_2 from "../../../Components/Img/img_2_svarochnye_invertory.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Svarochnye_invertory = () => {
    const products = [
        {id: 1, href: "/svarochnye_invertory_1", name: "Сварочный инвертор ММА-200 RUBIK", image: img_1},
        {id: 2, href: "/svarochnye_invertory_2", name: "Сварочный аппарат RIVCEN ARC-250S", image: img_2},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Сварочные инверторы</h1>
            <div className="catalog">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt="Product Image"/>
                        <a href={product.href} className="product-name">{product.name}</a>
                    </div>
                ))}
            </div>
            <Gap/>
            <Basement/>

        </div>

    );
};

export default Svarochnye_invertory;
