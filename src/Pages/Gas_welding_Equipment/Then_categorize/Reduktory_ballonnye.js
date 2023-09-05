import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_reduktory_ballonnye_1.jpg"
import img_2 from "../../../Components/Img/img_reduktory_ballonnye_2.jpg"
import img_3 from "../../../Components/Img/img_reduktory_ballonnye_3.jpg"
import img_4 from "../../../Components/Img/img_reduktory_ballonnye_4.jpg"
import img_5 from "../../../Components/Img/img_reduktory_ballonnye_5.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
const Reduktory_ballonnye = () => {
    const products = [
        {id: 1, href: "/reduktory_ballonnye_1", name: "Редукторы кислородные", image: img_1},
        {id: 2, href: "/reduktory_ballonnye_2", name: "Редукторы пропановые", image: img_2},
        {id: 3, href: "/reduktory_ballonnye_3", name: "Редукторы аргоновые", image: img_3},
        {id: 4, href: "/reduktory_ballonnye_4", name: "Редукторы углекислотные", image: img_4},
        {id: 5, href: "/reduktory_ballonnye_5", name: "Редукторы гелиевые", image: img_5},


    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">РЕДУКТОРЫ БАЛЛОННЫЕ</h1>
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

export default Reduktory_ballonnye;
