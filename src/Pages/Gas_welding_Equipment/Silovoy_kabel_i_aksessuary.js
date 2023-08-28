import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_kabelnye-razemy.jpg"
import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Silovoy_kabel_i_aksessuary = () => {
    const products = [
        {id: 1, href: "/kabelnye-razemy", name: "Кабельные разьемы", image: img_1},


    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">СИЛОВОЙ КАБЕЛЬ И АКСЕССУАРЫ</h1>
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

export default Silovoy_kabel_i_aksessuary;
