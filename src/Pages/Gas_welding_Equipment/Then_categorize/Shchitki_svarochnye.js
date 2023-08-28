import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_shchitki_svarochnye_1.jpg"
import img_2 from "../../../Components/Img/img_shchitki_svarochnye_2.jpg"
import img_3 from "../../../Components/Img/img_shchitki_svarochnye_3.jpg"
import img_4 from "../../../Components/Img/img_shchitki_svarochnye_4.jpg"
import img_5 from "../../../Components/Img/img_shchitki_svarochnye_5.jpg"
import img_6 from "../../../Components/Img/img_shchitki_svarochnye_6.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Shchitki_svarochnye = () => {
    const products = [
        {id: 1, href: "/shchitki_svarochnye_1", name: " Щиток защитный лицевой НБТ-ЕВРО-сталь", image: img_1},
        {id: 2, href: "/shchitki_svarochnye_2", name: "Щиток НБТ ЕВРО", image: img_2},
        {id: 3, href: "/shchitki_svarochnye_3", name: " Щиток сварщика ЕПК-АС", image: img_3},
        {id: 4, href: "/shchitki_svarochnye_4", name: " Щиток сварщика НН-У1", image: img_4},
        {id: 5, href: "/shchitki_svarochnye_5", name: "Маска сварщика ЕПК", image: img_5},
        {id: 6, href: "/shchitki_svarochnye_6", name: "Щиток сварщика пластиковый НН-С-701", image: img_6},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1"> Щитки сварочные</h1>
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

export default Shchitki_svarochnye;
