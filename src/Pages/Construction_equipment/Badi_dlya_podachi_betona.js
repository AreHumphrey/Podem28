import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_1_badi-dlya-podachi-betona.jpg"
import img_2 from "../../Components/Img/img_2_badi-dlya-podachi-betona.jpg"
import img_3 from "../../Components/Img/img_3_badi-dlya-podachi-betona.jpg"

import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Badi_dlya_podachi_betona = () => {
    const products = [
        {id: 1,href: "/badi-dlya-podachi-betona_1", name: "Ящики под раствор 0,25 - 1,5 куб.", image: img_1},
        {id: 2,href: "/badi-dlya-podachi-betona_2", name: "Рюмка для подачи бетона 0,75куб", image: img_2},
        {id: 3,href: "/badi-dlya-podachi-betona_3", name: "Калоша для подачи бетона 0,75 - 2 куб.", image: img_3},

    ];

    return (
        <div>
            <ButtonAppBar/>
            <h1 className="h1"> Бадьи для подачи бетона</h1>
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

export default Badi_dlya_podachi_betona;
