import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_2.jpg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЦЕЛЬНОМЕТАЛЛ. НЕРАЗЪЕМ. ШТУЦЕР-ДВОЙНИК УНИВЕРСАЛ. ПОД ШЛАНГ Д. 6/9ММ (БЕЗ БЛИСТЕРА)</h2>

                <div className="container_foto">
                    <img src={img_3}></img>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_2;