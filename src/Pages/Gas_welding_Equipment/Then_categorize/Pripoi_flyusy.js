import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_1_pripoi_flyusy.jpg"
import img_2 from "../../../Components/Img/img_2_1_pripoi_flyusy.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Pripoi_flyusy = () => {
    const products = [
        {id: 1, href: "/pripoi_flyusy_1", name: " Травильная паста ESAB Stain Clean", image: img_1},
        {id: 2, href: "/pripoi_flyusy_2", name: "Паста антипригарная Abicor Binzel", image: img_2},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Припои, флюсы</h1>
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

export default Pripoi_flyusy;
