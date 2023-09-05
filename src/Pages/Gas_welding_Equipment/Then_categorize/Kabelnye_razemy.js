import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_kabelnye_razemy_1.jpg"
import img_2 from "../../../Components/Img/img_kabelnye_razemy_2.jpg"
import img_3 from "../../../Components/Img/img_kabelnye_razemy_3.jpg"
import img_4 from "../../../Components/Img/img_kabelnye_razemy_4.jpg"
import img_5 from "../../../Components/Img/img_kabelnye_razemy_5.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Kabelnye_razemy = () => {
    const products = [
        {id: 1, href: "/kabelnye_razemy_1", name: "СКР-вставка KDP16a (200А)", image: img_1},
        {id: 2, href: "/kabelnye_razemy_2", name: "СКРП-гнездо KDZ50a (315А)", image: img_2},
        {id: 3, href: "/kabelnye_razemy_3", name: "СКРП-гнездо KDZ16a (200А)", image: img_3},
        {id: 4, href: "/kabelnye_razemy_4", name: "СКР-вставка KDP50a (315А)", image: img_4},
        {id: 5, href: "/kabelnye_razemy_5", name: "СКР-гнездо KDM16a (200А)", image: img_5},
        
    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Кабельные разьемы</h1>
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

export default Kabelnye_razemy;
