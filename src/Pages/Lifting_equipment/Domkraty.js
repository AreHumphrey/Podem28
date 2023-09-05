import React from "react";
import "../Pages.css"
import img_1 from  "../../Components/Img/img_1_domkraty.png"
import img_2 from  "../../Components/Img/img_2_domkraty.png"
import img_3 from "../../Components/Img/img_3_domkraty.jpg"
import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Domkraty = () => {
    const products = [
        {id: 1, href: "/Domkrat-reechnyy-High-Jack-avtomobilnyy-1", name: " Домкрат реечный High-Jack (автомобильный)", image: img_1},
        {id: 2, href: "/Domkrat-reechnyy", name: "Домкрат реечный", image: img_2},
        {id: 3, href: "/Domkraty-gidravlicheskie-butylochnye", name: "Домкраты гидравлические бутылочные", image: img_3},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Домкаты</h1>
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

export default Domkraty;
