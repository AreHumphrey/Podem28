import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_ustroystva_predokhranitelnye_dlya_gazosvarki_1.png"
import img_2 from "../../../Components/Img/img_ustroystva_predokhranitelnye_dlya_gazosvarki_2.png"
import img_3 from "../../../Components/Img/img_ustroystva_predokhranitelnye_dlya_gazosvarki_3.png"
import img_4 from "../../../Components/Img/img_ustroystva_predokhranitelnye_dlya_gazosvarki_4.png"
import img_5 from "../../../Components/Img/img_ustroystva_predokhranitelnye_dlya_gazosvarki_5.png"
import img_6 from "../../../Components/Img/img_ustroystva_predokhranitelnye_dlya_gazosvarki_6.png"
import img_7 from "../../../Components/Img/img_ustroystva_predokhranitelnye_dlya_gazosvarki_7.png"
import img_8 from "../../../Components/Img/img_ustroystva_predokhranitelnye_dlya_gazosvarki_8.png"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
const Ustroystva_predokhranitelnye_dlya_gazosvarki = () => {
    const products = [
        {id: 1, href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_1", name: "Затвор предохранительный ЗП-3К-121 (на резак/горелку)", image: img_1},
        {id: 2, href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_2", name: "Затвор предохранительный ЗП-3К-333", image: img_2},
        {id: 3, href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_3", name: "Затвор предохранительный ЗП-3К-111", image: img_3},
        {id: 4, href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_4", name: "Клапан обратный КО-3-К31", image: img_4},
        {id: 5, href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_5", name: "Клапан обратный КО-3-Г31", image: img_5},
        {id: 6, href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_6", name: "Затвор предохранительный ЗП-3Г-121 (на резак/горелку)", image: img_6},
        {id: 7, href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_7", name: "Затвор предохранительный ЗП-3Г-111", image: img_7},
        {id: 8, href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_8", name: "Затвор предохранительный ЗП-3Г-333", image: img_8},
    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Устройства предохранительные для газосварки</h1>
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

export default Ustroystva_predokhranitelnye_dlya_gazosvarki;
