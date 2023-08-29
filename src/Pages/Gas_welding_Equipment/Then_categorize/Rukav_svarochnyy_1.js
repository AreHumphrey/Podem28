import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_rezaki_gazovye_1_1.jpg"
import img_2 from "../../../Components/Img/img_rezaki_gazovye_1_2.jpg"
import img_3 from "../../../Components/Img/img_rezaki_gazovye_1_3.jpg"
import img_4 from "../../../Components/Img/img_rezaki_gazovye_1_4.jpg"
import img_5 from "../../../Components/Img/img_rezaki_gazovye_1_5.jpg"
import img_6 from "../../../Components/Img/img_rezaki_gazovye_1_6.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
const Rukav_svarochnyy_1 = () => {
    const products = [
        {id: 1, href: "/rukav_svarochnyy_1_1", name: "Рукав кислородный Ø9,0 мм ЧЕРНЫЙ (III кл., бухта 10 м)", image: img_1},
        {id: 2, href: "/rukav_svarochnyy_1_2", name: " Рукав кислородный Ø9мм СИНИЙ (III кл., бухта 10 м)", image: img_2},
        {id: 3, href: "/rukav_svarochnyy_1_3", name: "Рукав кислородный Ø6,3 мм СИНИЙ (III кл., бухта 10 м)", image: img_3},
        {id: 4, href: "/rukav_svarochnyy_1_4", name: "Рукав кислородный Ø6,3 мм СИНИЙ (III кл., бухта 40 м)", image: img_4},
        {id: 5, href: "/rukav_svarochnyy_1_5", name: "Рукав газовый Ø6,3 мм КРАСНЫЙ (I кл., бухта 40 м)", image: img_5},
        {id: 6, href: "/rukav_svarochnyy_1_6", name: " Рукав газовый Ø6,3 мм КРАСНЫЙ (I кл., бухта 10 м)", image: img_6},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Рукав БРТ</h1>
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

export default Rukav_svarochnyy_1;
