import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_krugi_otreznye_1.jpg"
import img_2 from "../../../Components/Img/img_krugi_otreznye_2.jpg"
import img_3 from "../../../Components/Img/img_krugi_otreznye_3.jpg"
import img_4 from "../../../Components/Img/img_krugi_otreznye_4.jpg"
import img_5 from "../../../Components/Img/img_krugi_otreznye_5.jpg"
import img_6 from "../../../Components/Img/img_krugi_otreznye_5.jpg"
import img_7 from "../../../Components/Img/img_krugi_otreznye_7.jpg"
import img_8 from "../../../Components/Img/img_krugi_otreznye_8.jpg"
import img_9 from "../../../Components/Img/img_krugi_otreznye_9.jpg"
import img_10 from "../../../Components/Img/img_krugi_otreznye_10.jpg"
import img_11 from "../../../Components/Img/img_krugi_otreznye_11.jpg"
import img_12 from "../../../Components/Img/img_krugi_otreznye_12.jpg"
import img_13 from "../../../Components/Img/img_krugi_otreznye_13.jpg"
import img_14 from "../../../Components/Img/img_krugi_otreznye_14.jpg"
import img_15 from "../../../Components/Img/img_krugi_otreznye_15.jpg"
import img_16 from "../../../Components/Img/img_krugi_otreznye_16.jpg"

import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";

const Krugi_otreznye = () => {
    const products = [
        {id: 1, href: "/krugi_otreznye_1", name: "Круг отрезной 125х2,5х22,2 Russland", image: img_1},
        {id: 2, href: "/krugi_otreznye_2", name: "Круг отрезной 125х1,0х22,2 Russland", image: img_2},
        {id: 3, href: "/krugi_otreznye_3", name: "Круг отрезной 125 х 1,0 х 22 (TIGARBO)", image: img_3},
        {id: 4, href: "/krugi_otreznye_4", name: "Круг отрезной 115 х 1,2 х 22 (TIGARBO)", image: img_4},
        {id: 5, href: "/krugi_otreznye_5", name: "Круг отрезной 125 х 1,2 х 22 (TIGARBO)", image: img_5},
        {id: 6, href: "/krugi_otreznye_6", name: "Круг отрезной 115 х 1,6 х 22 (TIGARBO)", image: img_6},
        {id: 7, href: "/krugi_otreznye_7", name: "Круг отрезной 115 х 2,0 х 22 (TIGARBO)", image: img_7},
        {id: 8, href: "/krugi_otreznye_8", name: "Круг отрезной 115 х 2,5 х 22 (TIGARBO)", image: img_8},
        {id: 9, href: "/krugi_otreznye_9", name: "Круг отрезной 125 х 2,5 х 22 (TIGARBO)", image: img_9},
        {id: 10, href: "/krugi_otreznye_10", name: "Круг отрезной 115 х 2,0 х 22 ст (Луга)", image: img_10},
        {id: 11, href: "/krugi_otreznye_11", name: "Круг отрезной 150 х 2,0 х 22 (TIGARBO)", image: img_11},
        {id: 12, href: "/krugi_otreznye_12", name: "Круг отрезной 150 х 2,5 х 22 (TIGARBO)", image: img_12},
        {id: 13, href: "/krugi_otreznye_13", name: "Круг отрезной 230х2,5х22,2 Russland", image: img_13},
        {id: 14, href: "/krugi_otreznye_14", name: "Круг отрезной 230х1,8х22,2 Russland", image: img_14},
        {id: 15, href: "/krugi_otreznye_15", name: "Круг отрезной 230 х 2,5 х 22 (TIGARBO)", image: img_15},
        {id: 16, href: "/krugi_otreznye_16", name: "Круг отрезной 230 х 2,0 х 22 (TIGARBO)", image: img_16},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Круги отрезные</h1>
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

export default Krugi_otreznye;
