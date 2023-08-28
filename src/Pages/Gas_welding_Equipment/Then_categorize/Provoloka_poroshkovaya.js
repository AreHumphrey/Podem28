import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_provoloka_poroshkovaya.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Provoloka_poroshkovaya = () => {
    const products = [
        {id: 1, href: "/provoloka_poroshkovaya_1", name: "Проволока порошковая E-71T-GS", image: img_1},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Проволока порошковая</h1>
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

export default Provoloka_poroshkovaya;
