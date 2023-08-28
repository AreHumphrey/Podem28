import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_svarochnye_poluavtomaty_1.jpg"
import img_2 from "../../../Components/Img/img_svarochnye_poluavtomaty_2.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Svarochnye_poluavtomaty = () => {
    const products = [
        {id: 1, href: "/svarochnye_poluavtomaty_1", name: " Сварочный полуавтомат REDBO ExpertMIG-205 (MIG-MAG/MMA)", image: img_1},
        {id: 2, href: "/svarochnye_poluavtomaty_2", name: "Сварочный полуавтомат REDBO ExpertMIG-175 (MIG-MAG/MMA)", image: img_2},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Сварочные полуавтоматы</h1>
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

export default Svarochnye_poluavtomaty;
