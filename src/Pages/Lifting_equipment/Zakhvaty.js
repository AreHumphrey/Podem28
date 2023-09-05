import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_zakhvaty.png"
import img_2 from "../../Components/Img/img_2_zakhvaty.png"
import img_3 from "../../Components/Img/img_3_zakhvaty.png"
import img_4 from "../../Components/Img/img_4_zakhvaty.png"
import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Zakhvaty = () => {
    const products = [
        {id: 1, href: "/Zakhvat-dlya-trub-ZT", name: " Захват для труб ЗТ", image: img_1},
        {id: 2, href: "/Zakhvat-balochnyy-tip-JT", name: "Захват балочный, тип JT", image: img_2},
        {id: 3, href: "/Zakhvat-tip-DSQC", name: "Захват тип DSQC", image: img_3},
        {id: 4, href: "/Zakhvat-tip-DHQ", name: "Захват тип DHQ", image: img_4},


    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">Захваты</h1>
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

export default Zakhvaty;
