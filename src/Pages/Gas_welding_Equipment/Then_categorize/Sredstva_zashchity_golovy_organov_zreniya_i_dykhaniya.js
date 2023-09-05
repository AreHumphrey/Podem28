import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_1.jpg"
import img_2 from "../../../Components/Img/img_sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_2.jpg"
import img_3 from "../../../Components/Img/img_sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_3.png"
import img_4 from "../../../Components/Img/img_sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_4.jpg"
import img_5 from "../../../Components/Img/img_sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_5.jpg"
import img_6 from "../../../Components/Img/img_sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_6.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya = () => {
    const products = [
        {
            id: 1,
            href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_1",
            name: "Очки WG Хамелеон c АСФ",
            image: img_1
        },
        {
            id: 2,
            href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_2",
            name: "Очки защитные прозрачные «ПАНОРАМА»",
            image: img_2
        },
        {
            id: 3,
            href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_3",
            name: " Защитные очки затемненные",
            image: img_3
        },
        {
            id: 4,
            href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_4",
            name: " Очки защитные \"ТРУД\"",
            image: img_4
        },
        {
            id: 5,
            href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_5",
            name: "Очки газосварщика 3Н-56-Г",
            image: img_5
        },
        {
            id: 6,
            href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_6",
            name: " Очки защитные откидные арт.7070",
            image: img_6
        },

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Средства защиты головы, органов зрения и дыхания
            </h1>
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

export default Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya;
