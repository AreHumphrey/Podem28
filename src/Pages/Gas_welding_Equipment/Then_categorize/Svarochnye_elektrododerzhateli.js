import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_varochnye_elektrododerzhateli_1.jpg"
import img_2 from "../../../Components/Img/img_varochnye_elektrododerzhateli_2.jpg"
import img_3 from "../../../Components/Img/img_varochnye_elektrododerzhateli_3.jpg"
import img_4 from "../../../Components/Img/img_varochnye_elektrododerzhateli_4.jpg"
import img_5 from "../../../Components/Img/img_varochnye_elektrododerzhateli_5.jpg"
import img_6 from "../../../Components/Img/img_varochnye_elektrododerzhateli_6.jpg"
import img_7 from "../../../Components/Img/img_varochnye_elektrododerzhateli_7.jpg"
import img_8 from "../../../Components/Img/img_varochnye_elektrododerzhateli_8.jpg"
import img_9 from "../../../Components/Img/img_varochnye_elektrododerzhateli_9.jpg"
import img_10 from "../../../Components/Img/img_varochnye_elektrododerzhateli_10.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Svarochnye_elektrododerzhateli = () => {
    const products = [
        {id: 1, href: "/svarochnye_elektrododerzhateli_1", name: "Электрододержатель ДОКА LXEA 002K 500A", image: img_1},
        {id: 2, href: "/svarochnye_elektrododerzhateli_2", name: "Электрододержатель ДОКА LXEA 1045 500A тип CONFORT", image: img_2},
        {id: 3, href: "/svarochnye_elektrododerzhateli_3", name: "Электрододержатель ЭД-31 \"Универсал\" (КОРД)", image: img_3},
        {id: 4, href: "/svarochnye_elektrododerzhateli_4", name: "Электрододержатель ЭД-40 \"Универсал\" (Корд) (400А)", image: img_4},
        {id: 5, href: "/svarochnye_elektrododerzhateli_5", name: "Электрододержатель ЭД-20 \"Сатурн\" (200А)\n", image: img_5},
        {id: 6, href: "/svarochnye_elektrododerzhateli_6", name: "Электрододержатель ЭД-31 \"Сатурн\" (300А)", image: img_6},
        {id: 7, href: "/svarochnye_elektrododerzhateli_7", name: "Электрододержатель ЭД-50 \"Сатурн\" (500А)", image: img_7},
        {id: 8, href: "/svarochnye_elektrododerzhateli_8", name: "Электрододержатель ДОКА LXE 300A тип HANDY", image: img_8},
        {id: 9, href: "/svarochnye_elektrododerzhateli_9", name: "Электрододержатель ESAB HANDY 200", image: img_9},
        {id: 10, href: "/svarochnye_elektrododerzhateli_10", name: "Электрододержатель ESAB HANDY 300", image: img_10},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1"> Сварочные электрододержатели</h1>
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

export default Svarochnye_elektrododerzhateli;
