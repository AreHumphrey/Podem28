import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_lesa-stroitelnye.png"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Lesa_stroitelnye = () => {
    const products = [
        {id: 1,href: "/lesa_stroitelnye_1", name: "Леса строительные ЛСПР-40", image: img_1},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Леса строительные</h1>
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

export default Lesa_stroitelnye;
