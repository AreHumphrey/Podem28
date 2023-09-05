import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_ruchnye-lebedki.png"
import img_2 from "../../Components/Img/img_2_ruchnye-lebedki.png"
import img_3 from "../../Components/Img/img_3_ruchnye-lebedki.png"
import img_4 from "../../Components/Img/img_4_ruchnye-lebedki.png"
import img_5 from "../../Components/Img/img_5_ruchnye-lebedki.png"
import img_6 from "../../Components/Img/img_6_ruchnye-lebedki.png"
import img_7 from "../../Components/Img/img_7_ruchnye-lebedki.png"
import img_8 from "../../Components/Img/img_8_ruchnye-lebedki.png"
import img_9 from "../../Components/Img/img_9_ruchnye-lebedki.png"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";

const Ruchnye_lebedki = () => {
    const products = [
        {id: 1, href: "/ruchnye_lebedki_1", name: " Лебедка ручная LHW (Китай)", image: img_1},
        {id: 2, href: "/ruchnye_lebedki_2", name: "Лебедка ручная с тормозом BHW (Китай)", image: img_2},
        {id: 3, href: "/ruchnye_lebedki_3", name: "Лебедка усиленная серии JHW (Китай)", image: img_3},
        {id: 4, href: "/ruchnye_lebedki_4", name: "Лебедка усиленная LRU", image: img_4},
        {id: 5, href: "/ruchnye_lebedki_5", name: "Лебедка рычажная (МТМ)", image: img_5},
        {id: 6, href: "/ruchnye_lebedki_6", name: "Лебедка рычажная гаражная SDB8020", image: img_6},
        {id: 7, href: "/ruchnye_lebedki_7", name: "Лебедка HWV тип VS, тип GR", image: img_7},
        {id: 8, href: "/ruchnye_lebedki_8", name: "Лебедка ручная с тормозом LRT", image: img_8},
        {id: 9, href: "/ruchnye_lebedki_9", name: "Лебедка ручная барабанная LRB", image: img_9},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Ручные лебедки</h1>
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
