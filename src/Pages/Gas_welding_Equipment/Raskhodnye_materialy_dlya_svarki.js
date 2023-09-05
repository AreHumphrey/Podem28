import React from "react";
import "../Pages.css"
import img_1 from "../../Components/Img/img_raskhodnye-materialy-dlya-svarki_1.jpeg"
import img_2 from "../../Components/Img/img_raskhodnye-materialy-dlya-svarki_2.jpg"
import img_3 from "../../Components/Img/img_raskhodnye-materialy-dlya-svarki_3.jpg"
import img_4 from "../../Components/Img/img_raskhodnye-materialy-dlya-svarki_4.jpg"
import ButtonAppBar from "../../Components/Header/Header";
import Gap from "../../Components/Gap/Gap";
import Basement from "../../Components/Basement/Basement";
const Svarochnye_apparaty_gorelki = () => {
    const products = [
        {id: 1, href: "/pripoi-flyusy", name: "Припои, флюсы", image: img_1},
        {id: 2, href: "/provoloka-poroshkovaya", name: "Проволока порошковая", image: img_2},
        {id: 3, href: "/provoloka-sploshnogo-secheniya", name: "Проволока сплошного сечения", image: img_3},
        {id: 3, href: "/sprei-aerozoli", name: "Спреи, аэрозоли", image: img_4},

    ];

    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <h1 className="h1">РАСХОДНЫЕ МАТЕРИАЛЫ ДЛЯ СВАРКИ</h1>
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

export default Svarochnye_apparaty_gorelki;
