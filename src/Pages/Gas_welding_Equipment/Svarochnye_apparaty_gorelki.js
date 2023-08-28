import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_gorelki-dlya-poluavtomatov.jpg"
import img_2 from "../../Components/Img/img_svarochnye-invertory.jpg"
import img_3 from "../../Components/Img/img_svarochnye-poluavtomaty.jpg"
import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Svarochnye_apparaty_gorelki = () => {
    const products = [
        {id: 1, href: "/Gorelki-dlya-poluavtomatov", name: "Горелки для полуавтоматов", image: img_1},
        {id: 2, href: "/Svarochnye-invertory", name: "Сварочные инверторы", image: img_2},
        {id: 3, href: "/Svarochnye-poluavtomaty", name: "Сварочные полуавтоматы", image: img_3},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">СВАРОЧНЫЕ АППАРАТЫ, ГОРЕЛКИ</h1>
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

export default Svarochnye_apparaty_gorelki;
