import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_sredstva-krepleniya-gruzov.png"
import img_2 from "../../Components/Img/img_2_sredstva-krepleniya-gruzov.png"
import img_3 from "../../Components/Img/img_3_sredstva-krepleniya-gruzov.png"
import img_4 from "../../Components/Img/img_4_sredstva-krepleniya-gruzov.png"
import img_5 from "../../Components/Img/img_5_sredstva-krepleniya-gruzov.png"
import img_6 from "../../Components/Img/img_6_sredstva-krepleniya-gruzov.png"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";

const Sredstva_krepleniya_gruzov = () => {
    const products = [
        {id: 1, href: "/sredstva-krepleniya-gruzov_1",  name: "Крюки J-образные двойные", image: img_1},
        {id: 2, href: "/sredstva-krepleniya-gruzov_2",  name: "Стяжной механизм для стяжных ремней", image: img_2},
        {id: 3, href: "/sredstva-krepleniya-gruzov_3",  name: "Ремни буксировочные автомобильные (высокопрочные)", image: img_3},
        {id: 4, href: "/sredstva-krepleniya-gruzov_4",  name: "Талреп с трещеткой", image: img_4},
        {id: 5, href: "/sredstva-krepleniya-gruzov_5",  name: " Комплектующие для стяжных ремней", image: img_5},
        {id: 6, href: "/sredstva-krepleniya-gruzov_6",  name: " Ремни для стяжки груза", image: img_6},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Средства крепления грузов</h1>
            <div className="catalog">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt="Product Image"/>
                        <a href={product.href}  className="product-name">{product.name}</a>
                    </div>
                ))}
            </div>
            <Gap/>
            <Basement/>

        </div>

    );
};

export default Sredstva_krepleniya_gruzov;
