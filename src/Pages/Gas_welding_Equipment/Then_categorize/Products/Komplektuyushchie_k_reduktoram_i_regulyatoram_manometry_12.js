import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_12.jpg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_12 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПРОКЛАДКА 19 БПО5-000-14 ПОД РЕЗЬБУ W21.8 (СП21,8) ПОЛИАМИДНАЯ</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Для пропановых редукторов.<br/>

                        Прокладка полиамидная диаметром 19 мм под гайку с резьбой W21.8 (Сп21,8) для уплотнения присоединения редуктора к вентилю.</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_12;