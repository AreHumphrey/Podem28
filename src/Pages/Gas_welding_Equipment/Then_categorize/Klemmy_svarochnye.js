import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_klemmy_svarochnye_1.jpg"
import img_2 from "../../../Components/Img/img_klemmy_svarochnye_2.jpg"
import img_3 from "../../../Components/Img/img_klemmy_svarochnye_3.jpg"
import img_4 from "../../../Components/Img/img_klemmy_svarochnye_4.jpg"
import img_5 from "../../../Components/Img/img_klemmy_svarochnye_5.jpg"
import img_6 from "../../../Components/Img/img_klemmy_svarochnye_6.jpg"
import img_7 from "../../../Components/Img/img_klemmy_svarochnye_7.jpg"
import img_8 from "../../../Components/Img/img_klemmy_svarochnye_8.jpg"
import img_9 from "../../../Components/Img/img_klemmy_svarochnye_9.jpg"
import img_10 from "../../../Components/Img/img_klemmy_svarochnye_10.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Klemmy_svarochnye = () => {
    const products = [
        {id: 1, href: "/klemmy_svarochnye_1", name: "Магнитная клемма заземления МКЗ-50У Сатурн", image: img_1},
        {id: 2, href: "/klemmy_svarochnye_2", name: "Клемма заземления ДОКА КЗ-200", image: img_2},
        {id: 3, href: "/klemmy_svarochnye_3", name: "Клемма заземления ДОКА КЗ-300", image: img_3},
        {id: 4, href: "/klemmy_svarochnye_4", name: "Клемма заземления ДОКА КЗ-500", image: img_4},
        {id: 5, href: "/klemmy_svarochnye_5", name: "Струбцина заземления КЗ-50 С (КОРД)", image: img_5},
        {id: 6, href: "/klemmy_svarochnye_6", name: "Клемма заземления КЗ-50 \"Сатурн Профи\"", image: img_6},
        {id: 7, href: "/klemmy_svarochnye_7", name: "Клемма заземления КЗ-40 \"Сатурн Профи\"", image: img_7},
        {id: 8, href: "/klemmy_svarochnye_8", name: "Клемма заземления КЗ-31 \"Сатурн Профи\"", image: img_8},
        {id: 9, href: "/klemmy_svarochnye_9", name: "Клемма заземления КЗ-25 \"Сатурн Профи\"", image: img_9},
        {id: 10, href: "/klemmy_svarochnye_10", name: "Клемма заземления КЗ-20 \"Сатурн Профи\"", image: img_10},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Клеммы сварочные</h1>
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

export default Klemmy_svarochnye;
