import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_gorelki_gazovozdushnye_1.jpg"
import img_2 from "../../../Components/Img/img_gorelki_gazovozdushnye_2.jpg"
import img_3 from "../../../Components/Img/img_gorelki_gazovozdushnye_3.jpg"
import img_4 from "../../../Components/Img/img_gorelki_gazovozdushnye_4.jpg"
import img_5 from "../../../Components/Img/img_gorelki_gazovozdushnye_5.jpg"
import img_6 from "../../../Components/Img/img_gorelki_gazovozdushnye_6.jpg"
import img_7 from "../../../Components/Img/img_gorelki_gazovozdushnye_7.jpg"
import img_8 from "../../../Components/Img/img_gorelki_gazovozdushnye_8.jpg"
import img_9 from "../../../Components/Img/img_gorelki_gazovozdushnye_9.jpg"
import img_10 from "../../../Components/Img/img_gorelki_gazovozdushnye_10.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
const Gorelki_gazovozdushnye = () => {
    const products = [
        {id: 1, href: "/gorelki_gazovozdushnye_1", name: "Горелка кровельная ГВ-815-Р", image: img_1},
        {id: 2, href: "/gorelki_gazovozdushnye_2", name: "ГВ-850 Фстакана=60мм", image: img_2},
        {id: 3, href: "/gorelki_gazovozdushnye_3", name: "ГВ-850 Фстакана=50мм", image: img_3},
        {id: 4, href: "/gorelki_gazovozdushnye_4", name: "ГВ-850-Р Фстакана=50мм", image: img_4},
        {id: 5, href: "/gorelki_gazovozdushnye_5", name: "ГВ-850-Р Фстакана=60мм", image: img_5},
        {id: 6, href: "/gorelki_gazovozdushnye_6", name: "Горелка газовоздушная ГВ-100-Р", image: img_6},
        {id: 7, href: "/gorelki_gazovozdushnye_7", name: "Горелка кабельная ГВ-385", image: img_7},
        {id: 8, href: "/gorelki_gazovozdushnye_8", name: "Горелка газовоздушная ГВ-100", image: img_8},
        {id: 9, href: "/gorelki_gazovozdushnye_9", name: "Горелка пропано-воздушная ГВП AT-TRONIC", image: img_9},
        {id: 10, href: "/gorelki_gazovozdushnye_10", name: "Горелка-паяльник ГВРП-17", image: img_10},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Горелки газовоздушные</h1>
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

export default Gorelki_gazovozdushnye;
