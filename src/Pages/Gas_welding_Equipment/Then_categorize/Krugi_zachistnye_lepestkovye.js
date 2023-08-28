import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_krugi_zachistnye_lepestkovye_1.jpg"
import img_2 from "../../../Components/Img/img_krugi_zachistnye_lepestkovye_2.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Krugi_zachistnye_lepestkovye = () => {
    const products = [
        {id: 1, href: "/krugi_zachistnye_lepestkovye_1", name: "Круг зачистной лепестковый 125мм № 120 БАЗ", image: img_1},
        {id: 2, href: "/krugi_zachistnye_lepestkovye_2", name: "Круг зачистной лепестковый 125мм № 80 БАЗ", image: img_2},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Круги зачистные лепестковые</h1>
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

export default Krugi_zachistnye_lepestkovye;
