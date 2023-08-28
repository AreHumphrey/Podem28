import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_prisposobleniya_i_osnastka.jpg"
import img_2 from "../../Components/Img/img_2_prisposobleniya_i_osnastka.jpg"
import img_3 from "../../Components/Img/img_3_prisposobleniya_i_osnastka.jpg"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Prisposobleniya_i_osnastka__1 = () => {
    const products = [
        {id: 1, href: "/aksessuary", name: "Аксессуары", image: img_1},
        {id: 2, href: "/klemmy-svarochnye", name: "Клеммы сварочные", image: img_2},
        {id: 3, href: "/svarochnye-elektrododerzhateli", name: "Сварочные электрододержатели", image: img_3},


    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">ПРИСПОСОБЛЕНИЯ И ОСНАСТКА</h1>
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

export default Prisposobleniya_i_osnastka__1;
