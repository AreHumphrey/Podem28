import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_maski_khameleon_1.jpg"
import img_2 from "../../../Components/Img/img_maski_khameleon_2.jpg"
import img_3 from "../../../Components/Img/img_maski_khameleon_3.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Maski_khameleon = () => {
    const products = [
        {id: 1, href: "/maski-khameleon_1", name: "Маска сварщика РОССИЯ WH-ADF-9030G", image: img_1},
        {id: 2, href: "/maski-khameleon_2", name: " Маска сварщика Победа с АСФ WH-ADF-9030G", image: img_2},
        {id: 3, href: "/maski-khameleon_3", name: " Маска сварщика ДЕРЖАВА с АСФ WH-ADF-9030G", image: img_3},
    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Маски "Хамелеон"</h1>
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

export default Maski_khameleon;
