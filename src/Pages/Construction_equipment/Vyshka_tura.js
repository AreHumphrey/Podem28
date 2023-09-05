import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img-1_vyshka-tura.png"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Vyshka_tura = () => {
    const products = [
        {id: 1,href: "/vyshka_tura_1", name: "Вышка тура ВСП 250", image: img_1},
    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1"> Вышка тура</h1>
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

export default Vyshka_tura;
