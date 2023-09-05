import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_gazovye_gorelki_i_payalniki_1.jpg"
import img_2 from "../../../Components/Img/img_gazovye_gorelki_i_payalniki_2.jpg"
import img_3 from "../../../Components/Img/img_gazovye_gorelki_i_payalniki_3.jpg"
import img_4 from "../../../Components/Img/img_gazovye_gorelki_i_payalniki_4.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
const Gazovye_gorelki_i_payalniki = () => {
    const products = [
        {id: 1, href: "/gazovye_gorelki_i_payalniki_1", name: "Горелка ГВ-811", image: img_1},
        {id: 2, href: "/gazovye_gorelki_i_payalniki_2", name: "Горелка паяльная ГВ-900", image: img_2},
        {id: 3, href: "/gazovye_gorelki_i_payalniki_3", name: "Горелка паяльная ГВ-915", image: img_3},
        {id: 4, href: "/gazovye_gorelki_i_payalniki_4", name: "Горелка паяльная ГВ-919", image: img_4},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Газовые горелки и паяльники</h1>
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

export default Gazovye_gorelki_i_payalniki;
