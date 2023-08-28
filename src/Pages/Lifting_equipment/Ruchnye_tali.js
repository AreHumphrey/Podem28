import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_ruchnye-tali.png"
import img_2 from "../../Components/Img/img_2_ruchnye-tali.png"
import img_3 from "../../Components/Img/img_3_ruchnye-tali.png"
import img_4 from "../../Components/Img/img_4_ruchnye-tali.png"
import img_5 from "../../Components/Img/img_5_ruchnye-tali.png"
import img_6 from "../../Components/Img/img_6_ruchnye-tali.png"
import img_7 from "../../Components/Img/img_7_ruchnye-tali.png"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";

const Ruchnye_lebedki = () => {
    const products = [
        {id: 1, href: "/ruchnye_tali_1", name: "Тележка для тали с цепным приводом", image: img_1},
        {id: 2, href: "/ruchnye_tali_2", name: "Таль ручная цепная HSZ-E (Китай)", image: img_2},
        {id: 3, href: "/ruchnye_tali_3",  name: "Тележка для тали с цепным приводом тип GCL610", image: img_3},
        {id: 4, href: "/ruchnye_tali_4",  name: "Шестеренная стационарная тип HSZ-С (Китай)", image: img_4},
        {id: 5, href: "/ruchnye_tali_5",  name: "Таль ручная цепная LB", image: img_5},
        {id: 6, href: "/ruchnye_tali_6",  name: "Рычажная тип HSH-C (Китай)", image: img_6},
        {id: 7, href: "/ruchnye_tali_7",  name: "Таль рычажная ручная LB", image: img_7},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Ручные тали</h1>
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

export default Ruchnye_lebedki;
