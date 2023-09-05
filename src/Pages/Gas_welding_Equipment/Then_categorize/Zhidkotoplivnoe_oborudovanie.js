import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_zhidkotoplivnoe_oborudovanie_1.jpg"
import img_2 from "../../../Components/Img/img_zhidkotoplivnoe_oborudovanie_2.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Zhidkotoplivnoe_oborudovanie = () => {
    const products = [
        {id: 1, href: "/zhidkotoplivnoe_oborudovanie_1", name: "Бачок БГ-08-1ДМ", image: img_1},
        {id: 2, href: "/zhidkotoplivnoe_oborudovanie_2", name: " Резак \"Вогник\" 182 бензин", image: img_2},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Жидкотопливное оборудование</h1>
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

export default Zhidkotoplivnoe_oborudovanie;
