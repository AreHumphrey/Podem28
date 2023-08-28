import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_stelazhi.png"
import img_2 from "../../Components/Img/img-2_stelazhi.png"
import img_3 from "../../Components/Img/img_3_stelazhi.png"
import img_4 from "../../Components/Img/img_4_stelazhi.png"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Stelazhi = () => {
    const products = [
        {id: 1, href: "/stelazhi_1", name: " Стеллаж в гараж", image: img_1},
        {id: 2, href: "/stelazhi_2", name: "Универсальные металлические стеллажи", image: img_2},
        {id: 3, href: "/stelazhi_3", name: "Паллетные фронтальные стеллажи", image: img_3},
        {id: 4, href: "/stelazhi_4", name: "Стеллаж архивный", image: img_4},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1"> Стеллажи</h1>
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

export default Stelazhi;
