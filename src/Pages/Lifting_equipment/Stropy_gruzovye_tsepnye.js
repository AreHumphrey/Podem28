import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_stropy-gruzovye-tsepnye.png"
import img_2 from "../../Components/Img/img_2_stropy-gruzovye-tsepnye.png"
import img_3 from "../../Components/Img/img_3_stropy-gruzovye-tsepnye.png"
import img_4 from "../../Components/Img/img_4_stropy-gruzovye-tsepnye.png"
import img_5 from "../../Components/Img/img_5_stropy-gruzovye-tsepnye.png"
import img_6 from "../../Components/Img/img_6_stropy-gruzovye-tsepnye.png"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";

const Stropy_gruzovye_tsepnye = () => {
    const products = [
        {id: 1, href: "/stropy-gruzovye-tsepnye_1", name: "Ветвь цепная", image: img_1},
        {id: 2, href: "/stropy-gruzovye-tsepnye_2", name: "Строп цепной одноветвевой", image: img_2},
        {id: 3, href: "/stropy-gruzovye-tsepnye_3", name: "Строп цепной 2-х ветвевой", image: img_3},
        {id: 4, href: "/stropy-gruzovye-tsepnye_4", name: "Строп цепной 4-х ветвевой", image: img_4},
        {id: 5, href: "/stropy-gruzovye-tsepnye_5", name: "Кольцевые", image: img_5},
        {id: 6, href: "/stropy-gruzovye-tsepnye_6", name: "С двумя замкнутыми ветвями", image: img_6},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Стропы цепные</h1>
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

export default Stropy_gruzovye_tsepnye;
