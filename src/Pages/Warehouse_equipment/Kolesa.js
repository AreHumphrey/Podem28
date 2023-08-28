import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_kolesa.png"
import img_2 from "../../Components/Img/img_2_kolesa.png"
import img_3 from "../../Components/Img/img_3_kolesa.png"
import img_4 from "../../Components/Img/img_4_kolesa.png"
import img_5 from "../../Components/Img/img_5_kolesa.png"
import img_6 from "../../Components/Img/img_6_kolesa.png"
import img_7 from "../../Components/Img/img_7_kolesa.png"
import img_8 from "../../Components/Img/img_8_kolesa.png"
import img_9 from "../../Components/Img/img_9_kolesa.png"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Kolesa = () => {
    const products = [
        {id: 1, href: "/kolesa_1", name: "Мебельные колеса", image: img_1},
        {id: 2, href: "/kolesa_2", name: "Термостойкие колеса", image: img_2},
        {id: 3, href: "/kolesa_3", name: "Большегрузные колеса (нейлон, полиамид)", image: img_3},
        {id: 4, href: "/kolesa_4", name: " Большегрузные колеса (полиуретан)", image: img_4},
        {id: 5, href: "/kolesa_5", name: "Большегрузные чугунные колеса", image: img_5},
        {id: 6, href: "/kolesa_6", name: "Аппаратные колеса", image: img_6},
        {id: 7, href: "/kolesa_7", name: "Колеса для гидравлических тележек", image: img_7},
        {id: 8, href: "/kolesa_8", name: " Пневматические колеса", image: img_8},
        {id: 9, href: "/kolesa_9", name: "Промышленные колеса", image: img_9},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Колеса</h1>
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

export default Kolesa;
