import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_gorelki_svarochnye_1.jpg"
import img_2 from "../../../Components/Img/img_gorelki_svarochnye_2.jpg"
import img_3 from "../../../Components/Img/img_gorelki_svarochnye_3.jpg"

import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
import ButtonAppBar from "../../../Components/Header/Header";
const Gorelki_svarochnye = () => {
    const products = [
        {id: 1, href: "/gorelki_svarochnye_1", name: "Горелка ацетиленовая Г2-М", image: img_1},
        {id: 2, href: "/gorelki_svarochnye_2", name: "Горелка ацетиленовая Г2 \"MINI ДМ\"", image: img_2},
        {id: 3, href: "/gorelki_svarochnye_3", name: "Горелка пропановая ГЗУ-3-23 9/6", image: img_3},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Горелки сварочные</h1>
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

export default Gorelki_svarochnye;
