import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_prochie_aksessuary_1.jpg"
import img_2 from "../../../Components/Img/img_prochie_aksessuary_2.jpg"
import img_3 from "../../../Components/Img/img_prochie_aksessuary_3.jpg"
import img_4 from "../../../Components/Img/img_prochie_aksessuary_4.jpg"
import img_5 from "../../../Components/Img/img_prochie_aksessuary_5.jpg"
import img_6 from "../../../Components/Img/img_prochie_aksessuary_6.jpg"
import img_7 from "../../../Components/Img/img_prochie_aksessuary_7.jpg"
import img_8 from "../../../Components/Img/img_prochie_aksessuary_8.jpg"
import img_9 from "../../../Components/Img/img_prochie_aksessuary_9.jpg"
import img_10 from "../../../Components/Img/img_prochie_aksessuary_10.jpg"
import img_11 from "../../../Components/Img/img_prochie_aksessuary_11.jpg"
import img_12 from "../../../Components/Img/img_prochie_aksessuary_12.jpg"
import img_13 from "../../../Components/Img/img_prochie_aksessuary_13.jpg"
import img_14 from "../../../Components/Img/img_prochie_aksessuary_14.jpg"
import img_15 from "../../../Components/Img/img_prochie_aksessuary_15.jpg"
import img_16 from "../../../Components/Img/img_prochie_aksessuary_16.jpg"
import img_17 from "../../../Components/Img/img_prochie_aksessuary_17.jpg"
import img_18 from "../../../Components/Img/img_prochie_aksessuary_18.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Prochie_aksessuary_2 = () => {
    const products = [
        {id: 1, href: "/prochie_aksessuary_1", name: "Шаблон сварщика УШС-3 калиброванный", image: img_1},
        {id: 2, href: "/prochie_aksessuary_2", name: "Шаблон сварщика УШС-2 калиброванный", image: img_2},
        {id: 3, href: "/prochie_aksessuary_3", name: "Держатель мелка", image: img_3},
        {id: 4, href: "/prochie_aksessuary_4", name: "Набор для чистки мундштуков", image: img_4},
        {id: 5, href: "/prochie_aksessuary_5", name: "Зажигалка сварочная", image: img_5},
        {id: 6, href: "/prochie_aksessuary_6", name: "Молоток сварщика шлакоотбойный", image: img_6},
        {id: 7, href: "/prochie_aksessuary_7", name: "Фиксатор магнитный сварочный 25", image: img_7},
        {id: 8, href: "/prochie_aksessuary_8", name: "Фиксатор магнитный сварочный 50", image: img_8},
        {id: 9, href: "/prochie_aksessuary_9", name: " Фиксатор магнитный сварочный 75", image: img_9},
        {id: 10, href: "/prochie_aksessuary_10", name: "Фиксатор магнитный сварочный МФ 301", image: img_10},
        {id: 11, href: "prochie_aksessuary_11", name: "Фиксатор магнитный сварочный МФ 302", image: img_11},
        {id: 12, href: "prochie_aksessuary_12", name: "Фиксатор магнитный сварочный МФ 303", image: img_12},
        {id: 13, href: "prochie_aksessuary_13", name: "Фиксатор магнитный сварочный МФ 401", image: img_13},
        {id: 14, href: "prochie_aksessuary_14", name: "Фиксатор магнитный сварочный МФ 402", image: img_14},
        {id: 15, href: "prochie_aksessuary_15", name: "Фиксатор магнитный сварочный МФ 403", image: img_15},
        {id: 16, href: "prochie_aksessuary_16", name: "Фиксатор магнитный сварочный МФ 101", image: img_16},
        {id: 17, href: "prochie_aksessuary_17", name: "Фиксатор магнитный сварочный МФ 102", image: img_17},
        {id: 18, href: "prochie_aksessuary_18", name: "Фиксатор магнитный сварочный МФ 103", image: img_18},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Прочие аксессуары</h1>
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

export default Prochie_aksessuary_2;
