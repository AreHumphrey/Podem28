import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_11.jpg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_11 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПРОКЛАДКА 23 БКО3-600-05 ПОД РЕЗЬБУ G3/4 ПОЛИАМИДНАЯ</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Для кислородных (аргоновых, углекислотных и т.д.) редукторов.<br/>

                        Прокладка полиамидная диаметром 23 мм под гайку с резьбой G3/4 для уплотнения присоединения редуктора к вентилю.</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_11;