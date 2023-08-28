import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_gorelki_1.jpg"
import img_2 from "../../../Components/Img/img_gorelki_2.jpg"
import img_3 from "../../../Components/Img/img_gorelki_3.jpg"
import img_4 from "../../../Components/Img/img_gorelki_4.jpg"
import img_5 from "../../../Components/Img/img_gorelki_5.jpg"
import img_6 from "../../../Components/Img/img_gorelki_6.jpg"
import img_7 from "../../../Components/Img/img_gorelki_7.jpg"
import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
const Gorelki = () => {
    const products = [
        {id: 1, href: "/gorelki_1", name: "Держатель наконечника MP15AK", image: img_1},
        {id: 2, href: "/gorelki_2", name: "Наконечник E-Cu М8х30х0,8", image: img_2},
        {id: 3, href: "/gorelki_3", name: "Наконечник E-Cu М6х25х1,0", image: img_3},
        {id: 4, href: "/gorelki_4", name: "Наконечник E-Cu М6х25х0,8", image: img_4},
        {id: 5, href: "/gorelki_5", name: "Сопло МВ-25АК D=15 мм", image: img_5},
        {id: 6, href: "/gorelki_6", name: "Сопло МP-15АК D=12 мм", image: img_6},
        {id: 7, href: "/gorelki_7", name: "Наконечник E-Cu М6х25х1,2", image: img_7},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Горелки для полуавтоматов</h1>
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

export default Gorelki;
