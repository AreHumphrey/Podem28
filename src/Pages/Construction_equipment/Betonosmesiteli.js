import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_betonosmesiteli.png"
import img_2 from "../../Components/Img/img_2_betonosmesiteli.png"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Betonosmesiteli = () => {
    const products = [
        {id: 1,href: "/betonosmesiteli_1", name: " Бетоносмесители Патриот", image: img_1},
        {id: 2,href: "/betonosmesiteli_2", name: "Бетоносмеситель KITTORY\n", image: img_2},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Бетоносмесители</h1>
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

export default Betonosmesiteli;
