import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_1.jpg"
import img_2 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_2.jpg"
import img_3 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_3.jpg"
import img_4 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_4.jpg"
import img_5 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_5.png"
import img_6 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_6.png"
import img_7 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_7.png"
import img_8 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_8.png"
import img_9 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_9.png"
import img_10 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_10.png"
import img_11 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_11.jpg"
import img_12 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_12.jpg"
import img_13 from "../../../Components/Img/img_stekla_dlya_masok_i_ochkov_13.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Stekla_dlya_masok_i_ochkov = () => {
    const products = [
        {id: 1, href: "/stekla_dlya_masok_i_ochkov_1", name: "Пластина защитная поликарбонат 102х52х1", image: img_1},
        {id: 2, href: "/stekla_dlya_masok_i_ochkov_2", name: "Пластина защитная поликарбонат 121х69х1", image: img_2},
        {id: 3, href: "/stekla_dlya_masok_i_ochkov_3", name: "Пластина защитная поликарбонат 110х90х1", image: img_3},
        {id: 4, href: "/stekla_dlya_masok_i_ochkov_4", name: " Пластина защитная поликарбонат 133х114х1", image: img_4},
        {id: 5, href: "/stekla_dlya_masok_i_ochkov_5", name: "Светофильтр 121х69 ТС-3 DIN 9", image: img_5},
        {id: 6, href: "/stekla_dlya_masok_i_ochkov_6", name: "Светофильтр 121Х69 ТС-3 DIN 8", image: img_6},
        {id: 7, href: "/stekla_dlya_masok_i_ochkov_7", name: "Светофильтр 110х90 ТС-3 DIN 9", image: img_7},
        {id: 8, href: "/stekla_dlya_masok_i_ochkov_8", name: "Светофильтр 110х90 ТС-3 DIN 8", image: img_8},
        {id: 9, href: "/stekla_dlya_masok_i_ochkov_9", name: "Светофильтр 102х52 ТС-3 DIN 9", image: img_9},
        {id: 10, href: "/stekla_dlya_masok_i_ochkov_10", name: "Светофильтр 102х52 ТС-3 DIN 8", image: img_10},
        {id: 11, href: "/stekla_dlya_masok_i_ochkov_11", name: " Светофильтр 110х90 ТС-3 прозрачный", image: img_11},
        {id: 12, href: "/stekla_dlya_masok_i_ochkov_12", name: "Светофильтр 102х52 ТС-3 прозрачный", image: img_12},
        {id: 13, href: "/stekla_dlya_masok_i_ochkov_13", name: " Светофильтр 121х69 ТС-3 прозрачный", image: img_13},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1"> Стекла для масок и очков</h1>
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

export default Stekla_dlya_masok_i_ochkov;
