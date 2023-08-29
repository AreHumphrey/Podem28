import React from "react";
import "../../Pages.css"
import img_1 from "../../../Components/Img/img_rezaki_gazovye_1.jpg"
import img_2 from "../../../Components/Img/img_rezaki_gazovye_2.jpg"
import img_3 from "../../../Components/Img/img_rezaki_gazovye_3.jpg"
import img_4 from "../../../Components/Img/img_rezaki_gazovye_4.jpg"
import img_5 from "../../../Components/Img/img_rezaki_gazovye_5.jpg"
import img_6 from "../../../Components/Img/img_rezaki_gazovye_6.jpg"
import img_7 from "../../../Components/Img/img_rezaki_gazovye_7.jpg"
import ButtonAppBar from "../../../Components/Header/Header";
import Gap from "../../../Components/Gap/Gap";
import Basement from "../../../Components/Basement/Basement";
const Rezaki_gazovye = () => {
    const products = [
        {id: 1, href: "/rezaki_gazovye_1", name: "Резак пропановый Р1П «Сталь»", image: img_1},
        {id: 2, href: "/rezaki_gazovye_2", name: "Резак комбинированный Р3П", image: img_2},
        {id: 3, href: "/rezaki_gazovye_3", name: "Резак пропановый Р3П-32-Р-У", image: img_3},
        {id: 4, href: "/rezaki_gazovye_4", name: "Резак пропановый Р3П-32", image: img_4},
        {id: 5, href: "/rezaki_gazovye_5", name: "Резак пропановый Р3П-02МУ", image: img_5},
        {id: 6, href: "/rezaki_gazovye_6", name: "Резак пропановый Р3П-02М", image: img_6},
        {id: 7, href: "/rezaki_gazovye_7", name: "Резак пропановый Р1П LATION", image: img_7},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1">Резаки газовые</h1>
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

export default Rezaki_gazovye;
