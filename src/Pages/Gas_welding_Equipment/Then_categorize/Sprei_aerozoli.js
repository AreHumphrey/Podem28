import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_sprei_aerozoli_1.jpg"
import img_2 from "../../../Components/Img/img_sprei_aerozoli_2.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Sprei_aerozoli = () => {
    const products = [
        {id: 1, href: "/sprei_aerozoli_1", name: " Спрей для сварочных работ AKFIX E90", image: img_1},
        {id: 2, href: "/sprei_aerozoli_2", name: "Спрей Binzel", image: img_2},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Спреи, аэрозоли</h1>
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

export default Sprei_aerozoli;
