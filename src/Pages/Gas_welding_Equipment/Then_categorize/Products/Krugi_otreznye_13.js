import React from "react";
import "../../../Pages.css"
import img_1 from "../../../../Components/Img/img_krugi_otreznye_13.jpg"
import ButtonAppBar from "../../../../Components/Header/Header";
import Gap from "../../../../Components/Gap/Gap";
import Basement from "../../../../Components/Basement/Basement";

const Krugi_otreznye_13 = () => {


    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h1 className="h1">КРУГ ОТРЕЗНОЙ 230Х2,5Х22,2 RUSSLAND</h1>
                <p><b>Круги отрезные Russland</b> - это идеальное сочетание цены и качества. Точная балансировка круга и
                    посадочного кольца ощутимо снижает вибрации и шум углошлифовальной машинки во время работы.
                    Равномерный
                    износ круга позволяет производить качественный ровный рез практически без заусенцев. </p>
                <div className="container_foto">
                    <img src={img_1}></img>
                </div>
            </div>
            <Gap/>
            <Basement/>

        </div>

    );
};

export default Krugi_otreznye_13;
