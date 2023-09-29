import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_stropy-gruzovye-iz-stalnogo-kanata.png"
import img_2 from "../../Components/Img/img_2_stropy-gruzovye-iz-stalnogo-kanata.png"
import img_3 from "../../Components/Img/img_3_stropy-gruzovye-iz-stalnogo-kanata.jpg"
import img_4 from "../../Components/Img/img_4_stropy-gruzovye-iz-stalnogo-kanata.jpg"
import img_5 from "../../Components/Img/img_5_stropy-gruzovye-iz-stalnogo-kanata.jpg"
import img_6 from "../../Components/Img/img_6_stropy-gruzovye-iz-stalnogo-kanata.png"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";

const Stropy_gruzovye_iz_stalnogo_kanata = () => {
    const products = [
        {id: 1, href: "/stropy-gruzovye-iz-stalnogo-kanata_1", name: "Стропы комбиниро - ванные", image: img_1},
        {id: 2, href: "/stropy-gruzovye-iz-stalnogo-kanata_2", name: "Кольцевые", image: img_2},
        {id: 3, href: "/stropy-gruzovye-iz-stalnogo-kanata_3", name: "Стропы канатные четырех-ветвевые", image: img_3},
        {id: 4, href: "/stropy-gruzovye-iz-stalnogo-kanata_4", name: "Двухветвевые", image: img_4},
        {id: 5, href: "/stropy-gruzovye-iz-stalnogo-kanata_5", name: "Одноветвевые", image: img_5},
        {id: 6, href: "/stropy-gruzovye-iz-stalnogo-kanata_6", name: "Строп канатный петлевой (СКП)", image: img_6},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Стропы из стального каната</h1>
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

export default Stropy_gruzovye_iz_stalnogo_kanata;
