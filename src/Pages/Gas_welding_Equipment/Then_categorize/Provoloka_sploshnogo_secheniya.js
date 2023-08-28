import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_1_provoloka_sploshnogo_secheniya.jpg"
import img_2 from "../../../Components/Img/img_2_provoloka_sploshnogo_secheniya.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Provoloka_sploshnogo_secheniya = () => {
    const products = [
        {id: 1, href: "/provoloka_sploshnogo_secheniya_1", name: " СВАРОЧНАЯ ПРОВОЛОКА ОМЕДНЕННАЯ ER70S-6", image: img_1},
        {id: 1, href: "/provoloka_sploshnogo_secheniya_2", name: "Проволока сварочная омедненная G3Si1", image: img_2},
    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Проволока сплошного сечения</h1>
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

export default Provoloka_sploshnogo_secheniya;
