import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_telezhki-gidravlicheskie.png"
import img_2 from "../../Components/Img/img_2_telezhki-gidravlicheskie.png"
import img_3 from "../../Components/Img/img_3_telezhki-gidravlicheskie.png"
import img_4 from "../../Components/Img/img_4_telezhki-gidravlicheskie.png"
import img_5 from "../../Components/Img/img_5_telezhki-gidravlicheskie.png"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Telezhki_gidravlicheskie = () => {
    const products = [
        {id: 1, href: "/telezhki_1", name: " Тележка гидравлическая BF", image: img_1},
        {id: 2, href: "/telezhki_2", name: "Тележка двухколесная Р-1", image: img_2},
        {id: 3, href: "/telezhki_3", name: "Тележка двухколесная Р-3; Р-4; Р-5", image: img_3},
        {id: 4, href: "/telezhki_4", name: "Тележка платформенная ТПЛ", image: img_4},
        {id: 5, href: "/telezhki_5", name: " Тележки с сетчатыми бортами", image: img_5},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1"> Тележки</h1>
            <div className="catalog">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt="Product Image"/>
                        <a href={product.href}  className="product-name">{product.name}</a>
                    </div>
                ))}
            </div>
            <Gap/>
            <Basement/>

        </div>

    );
};

export default Telezhki_gidravlicheskie;
