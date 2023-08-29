import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_ventili_i_zapchasti_k_nim_1.jpg"
import img_2 from "../../../Components/Img/img_ventili_i_zapchasti_k_nim_2.png"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Ventili_i_zapchasti_k_nim = () => {
    const products = [
        {id: 1, href: "/ventili_i_zapchasti_k_nim_1", name: "Вентиль балонный пропановый ВБ-2", image: img_1},
        {id: 2, href: "/ventili_i_zapchasti_k_nim_2", name: "Вентиль кислородный ВК-94", image: img_2},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Вентили и запчасти к ним</h1>
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

export default Ventili_i_zapchasti_k_nim;
