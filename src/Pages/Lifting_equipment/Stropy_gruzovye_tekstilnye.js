import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_stropy-gruzovye-tekstilnye.png"
import img_2 from "../../Components/Img/img_2_stropy-gruzovye-tekstilnye.jpg"
import img_3 from "../../Components/Img/img_3_stropy-gruzovye-tekstilnye.jpg"
import img_4 from "../../Components/Img/img_4_stropy-gruzovye-tekstilnye.jpg"
import img_5 from "../../Components/Img/img_5_stropy-gruzovye-tekstilnye.jpg"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";

const Stropy_gruzovye_tekstilnye = () => {
    const products = [
        {id: 1, href: "/stropy-gruzovye-tekstilnye_1", name: " Петлевые", image: img_1},
        {id: 2, href: "/stropy-gruzovye-tekstilnye_2", name: "Кольцевые", image: img_2},
        {id: 3, href: "/stropy-gruzovye-tekstilnye_3", name: "Одноветвевые", image: img_3},
        {id: 4, href: "/stropy-gruzovye-tekstilnye_4" ,name: "Двухветвевые", image: img_4},
        {id: 5, href: "/stropy-gruzovye-tekstilnye_5", name: " Четырех - ветвевые", image: img_5},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Стропы грузовые текстильные</h1>
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

export default Stropy_gruzovye_tekstilnye;
