import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_rukav_svarochnyy_1.png"
import img_2 from "../../../Components/Img/img_rukav_svarochnyy_2.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
const Rukav_svarochnyy = () => {
    const products = [
        {id: 1, href: "/rukav_svarochnyy_1", name: "Рукав БРТ", image: img_1},
        {id: 2, href: "/rukav_svarochnyy_2", name: " Рукав ВРТ", image: img_2},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">РУКАВ СВАРОЧНЫЙ</h1>
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

export default Rukav_svarochnyy;
