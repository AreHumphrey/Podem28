import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.1.jpg"
import img_2 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.2.jpg"
import img_3 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.3.png"
import img_4 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.4.jpg"
import img_5 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.5.jpg"
import img_6 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.6.jpg"
import img_7 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.7.jpg"
import img_8 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.8.jpg"
import img_9 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.9.png"
import img_10 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.10.jpg"
import img_11 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.11.png"
import img_12 from "../../Components/Img/img_gazosvarochnoe_oborudovanie_1.12.jpg"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Gazosvarochnoe_oborudovanie_1 = () => {
    const products = [
        {id: 1, href: "/gazosvarochnoe_oborudovanie_1.1", name: " Редукторы баллонные", image: img_1},
        {id: 2, href: "/komplektuyushchie-k-reduktoram-i-regulyatoram-manometry", name: "Комплектующие к редукторам и регуляторам", image: img_2},
        {id: 3, href: "/gazosvarochnoe_oborudovanie_1.3", name: "Баллоны, генераторы, колпаки", image: img_3},
        {id: 4, href: "/gazosvarochnoe_oborudovanie_1.4", name: "Вентили и запчасти к ним", image: img_4},
        {id: 5, href: "/gazosvarochnoe_oborudovanie_1.5", name: "Газовые горелки и паяльники", image: img_5},
        {id: 6, href: "/gazosvarochnoe_oborudovanie_1.6", name: "Горелки газовоздушные", image: img_6},
        {id: 7, href: "/gazosvarochnoe_oborudovanie_1.7", name: " Горелки сварочные", image: img_7},
        {id: 8, href: "/gazosvarochnoe_oborudovanie_1.8", name: "Жидкотопливное оборудование", image: img_8},
        {id: 9, href: "/gazosvarochnoe_oborudovanie_1.9", name: "Посты газосварочные", image: img_9},
        {id: 10, href: "/gazosvarochnoe_oborudovanie_1.10", name: " Резаки газовые", image: img_10},
        {id: 11, href: "/gazosvarochnoe_oborudovanie_1.11", name: " Рукав сварочный", image: img_11},
        {id: 12, href: "/gazosvarochnoe_oborudovanie_1.12", name: "Устройства предохранительные для газосварки", image: img_12},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">ГАЗОСВАРОЧНОЕ ОБОРУДОВАНИЕ</h1>
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

export default Gazosvarochnoe_oborudovanie_1;
