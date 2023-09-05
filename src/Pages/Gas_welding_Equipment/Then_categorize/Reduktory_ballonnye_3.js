import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_reduktory_ballonnye_3.1.png"



import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
const Reduktory_ballonnye_3 = () => {
    const products = [
        {id: 1, href: "/reduktory_ballonnye_3.1", name: "АР-40-КР1-м", image: img_1},
    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Редукторы аргоновые</h1>
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

export default Reduktory_ballonnye_3;
