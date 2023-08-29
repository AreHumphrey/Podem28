import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_6.jpg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПЕРЕХОДНИК СП21,8-G3/4 (ДЛЯ ИМПОРТНОГО БАЛЛОНА)</h2>
                <p>Переходник резьбовой с резьбой W21.8 (Сп21,8) внутренняя и резьбой G3/4 наружная. Переходник
                    предназначен для присоединения редуктора к баллону в случае если резьба на вентиле и редукторе не
                    совпадают.</p>
                <div className="container_foto">
                    <img src={img_3}></img>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_6;