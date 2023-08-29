import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_rezaki_gazovye_2_1.jpg"
import img_2 from "../../../Components/Img/img_rezaki_gazovye_2_2.jpg"
import img_3 from "../../../Components/Img/img_rezaki_gazovye_2_3.jpg"
import img_4 from "../../../Components/Img/img_rezaki_gazovye_2_4.jpg"
import img_5 from "../../../Components/Img/img_rezaki_gazovye_2_5.jpg"
import img_6 from "../../../Components/Img/img_rezaki_gazovye_2_6.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
const Rukav_svarochnyy_2 = () => {
    const products = [
        {id: 1, href: "/rukav_svarochnyy_2_1", name: "Рукав бензостойкий Ø 6,3 мм, 2 класс, МБС", image: img_1},
        {id: 2, href: "/rukav_svarochnyy_2_2", name: "Рукав бензостойкий Ø 9,0 мм, 2 класс, МБС", image: img_2},
        {id: 3, href: "/rukav_svarochnyy_2_3", name: "Рукав газовый Ø 6,3 мм (черный с синей полосой)", image: img_3},
        {id: 4, href: "/rukav_svarochnyy_2_4", name: "Рукав газовый Ø 6,3 мм (синий)", image: img_4},
        {id: 5, href: "/rukav_svarochnyy_2_5", name: "Рукав газовый Ø 9,0 мм (синий)", image: img_5},
        {id: 6, href: "/rukav_svarochnyy_2_6", name: "Рукав ацетиленовый ф. 9,0 мм (красный)", image: img_6},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Рукав BРТ</h1>
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

export default Rukav_svarochnyy_2;
