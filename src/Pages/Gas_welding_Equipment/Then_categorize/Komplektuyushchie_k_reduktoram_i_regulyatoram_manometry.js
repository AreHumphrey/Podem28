import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_1.png"
import img_2 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_2.jpg"
import img_3 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_3.jpg"
import img_4 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_4.jpg"
import img_5 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_5.jpg"
import img_6 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_6.jpg"
import img_7 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_7.jpg"
import img_8 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_8.jpg"
import img_9 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_9.jpg"
import img_10 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_10.jpg"
import img_11 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_11.jpg"
import img_12 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_12.jpg"
import img_13 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_13.jpg"
import img_14 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_14.jpg"
import img_15 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_15.jpeg"
import img_16 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_16.jpg"
import img_17 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_17.jpg"
import img_18 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_18.jpg"
import img_19 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_19.jpg"
import img_20 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_20.png"
import img_21 from "../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_21.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry = () => {
    const products = [
        {id: 1, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_1", name: "ГАЙКА 32/16 G 3/4 ДЛЯ БКО", image: img_1},
        {id: 2, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_2", name: "Цельнометалл. неразъем. штуцер-двойник универсал. под шланг д. 6/9мм (БЕЗ БЛИСТЕРА)", image: img_2},
        {id: 3, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_3", name: "Гайка накидная (S27 W21,8LH (Сп21,8LH) Левая и S27 W21,8(Сп21,8) Правая) БПО5-000-09", image: img_3},
        {id: 4, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_4", name: " Гайка накидная (S19 М16х1,5LH Левая, S19 М16х1,5 Правая) БПО5-000-11", image: img_4},
        {id: 5, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_5", name: "Переходник G3/4-Сп21,8 (для импортного редуктора)", image: img_5},
        {id: 6, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_6", name: "Переходник Сп21,8-G3/4 (для импортного баллона)", image: img_6},
        {id: 7, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_7", name: "Гайка накидная (S14 М12х1,25LH Левая, S14 М12х1,25 Правая) УН-100-03", image: img_7},
        {id: 8, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_8", name: "Ниппель Ø9 мм М16х1,5 (латунь)", image: img_8},
        {id: 9, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_9", name: "Ниппель Ø6 мм М16х1,5 (латунь)", image: img_9},
        {id: 10, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_10", name: "Ниппель универсальный 6/9 (латунь)", image: img_10},
        {id: 1, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_11", name: "Прокладка 23 БКО3-600-05 под резьбу G3/4 полиамидная", image: img_11},
        {id: 2, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_12", name: " Прокладка 19 БПО5-000-14 под резьбу W21.8 (Сп21,8) полиамидная", image: img_12},
        {id: 3, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_13", name: "Прокладка паронитовая 3/4", image: img_13},
        {id: 4, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_14", name: " Прокладка паронитовая 1/2", image: img_14},
        {id: 5, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_15", name: "Манометр пропановый 0,6 МПа", image: img_15},
        {id: 6, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_16", name: "Манометр кислородный 25 МПа", image: img_16},
        {id: 7, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_17", name: "Манометр кислородный 2.5 МПа", image: img_17},
        {id: 8, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_18", name: "Манометр ацетиленовый 4.0 МПа", image: img_18},
        {id: 9, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_19", name: " Манометр ацетиленовый 0.4 МПа", image: img_19},
        {id: 10, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_20", name: "Манометр газовый 1.0МПа", image: img_20},
        {id: 11, href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_21", name: "Манометр газовый 16.0 МПа", image: img_21},


    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">омплектующие к редукторам и регуляторам.</h1>
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

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry;
