
import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_1.jpg"
import img_2 from "../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_2.jpg"
import img_3 from "../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_3.jpg"
import img_4 from "../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_4.jpg"
import img_5 from "../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_5.jpg"
import img_6 from "../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_6.jpg"
import img_7 from "../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_7.jpg"
import img_8 from "../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_8.jpg"
import img_9 from "../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_9.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Sredstva_zashchity_ruk_i_nog = () => {
    const products = [
        {id: 1, href: "/sredstva_zashchity_ruk_i_nog_1", name: "Перчатки спилковые желтые\"ДРАЙВЕР\"", image: img_1},
        {id: 2, href: "/sredstva_zashchity_ruk_i_nog_2", name: "Перчатки кожаные желтые\"ДРАЙВЕР\"", image: img_2},
        {id: 3, href: "/sredstva_zashchity_ruk_i_nog_3", name: "Перчатки комбинированные спилком \"Стандарт\"", image: img_3},
        {id: 4, href: "/sredstva_zashchity_ruk_i_nog_4", name: "Перчатки комбинированные спилком с 2-м наладонником", image: img_4},
        {id: 5, href: "/sredstva_zashchity_ruk_i_nog_5", name: "Перчатки спилковые М1", image: img_5},
        {id: 6, href: "/sredstva_zashchity_ruk_i_nog_6", name: "Краги спилковые черно-желтые", image: img_6},
        {id: 7, href: "/sredstva_zashchity_ruk_i_nog_7", name: "Краги спилковые синие усил. пал.", image: img_7},
        {id: 8, href: "/sredstva_zashchity_ruk_i_nog_8", name: "Краги спилковые 5-палые", image: img_8},
        {id: 9, href: "/sredstva_zashchity_ruk_i_nog_9", name: "Краги спилковые жел./черн. с усил. лад. удлин.", image: img_9},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Средства защиты рук и ног</h1>
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

export default Sredstva_zashchity_ruk_i_nog;
