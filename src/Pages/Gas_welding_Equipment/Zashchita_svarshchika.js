import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_zashchita_svarshchika.jpg"
import img_2 from "../../Components/Img/img_2_zashchita_svarshchika.jpg"
import img_3 from "../../Components/Img/img_3_zashchita_svarshchika.jpg"
import img_4 from "../../Components/Img/img_4_zashchita_svarshchika.jpg"
import img_5 from "../../Components/Img/img_5_zashchita_svarshchika.jpg"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Zashchita_svarshchika = () => {
    const products = [
        {id: 1, href: "/maski-khameleon", name: "Маски Хамелеон", image: img_1},
        {id: 1, href: "/sredstva-zashchity-golovy-organov-zreniya-i-dykhaniya", name: " Средства защиты головы, органов зрения и дыхания", image: img_2},
        {id: 1, href: "/sredstva-zashchity-ruk-i-nog", name: "Средства защиты рук и ног", image: img_3},
        {id: 1, href: "/stekla-dlya-masok-i-ochkov", name: "Стекла для масок и очков", image: img_4},
        {id: 1, href: "/shchitki-svarochnye", name: "Щитки сварочные", image: img_5},


    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">ЗАЩИТА СВАРЩИКА</h1>
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

export default Zashchita_svarshchika;
