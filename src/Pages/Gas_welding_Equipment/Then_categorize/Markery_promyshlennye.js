import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_aksessuary_1_1.jpg"
import img_2 from "../../../Components/Img/img_aksessuary_1_2.jpg"
import img_3 from "../../../Components/Img/img_aksessuary_1_3.jpg"
import img_4 from "../../../Components/Img/img_aksessuary_1_4.jpg"
import img_5 from "../../../Components/Img/img_aksessuary_1_5.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Markery_promyshlennye = () => {
    const products = [
        {id: 1, href: "/aksessuary_1_1", name: "Мелок стеатитовый FM.400", image: img_1},
        {id: 2, href: "/aksessuary_1_2", name: "Мелок Markal Soapstone Flat 13х5х127", image: img_2},
        {id: 3, href: "/aksessuary_1_3", name: "Markal WS 3/8\" Paintstik", image: img_3},
        {id: 4, href: "/aksessuary_1_4", name: "Markal Dura-Ink 15", image: img_4},
        {id: 5, href: "/aksessuary_1_5", name: "Маркер EDDING E-790", image: img_5},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Маркеры промышленные</h1>
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

export default Markery_promyshlennye;
