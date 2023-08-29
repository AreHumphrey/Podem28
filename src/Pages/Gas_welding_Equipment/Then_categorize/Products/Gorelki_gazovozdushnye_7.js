import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_gorelki_gazovozdushnye_7.jpg"

const Gorelki_gazovozdushnye_7 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ГОРЕЛКА КАБЕЛЬНАЯ ГВ-385</h2>
                <p>Горелка кабельная ГВ-385 (вентильная, Фстакана=35мм, L=385мм)</p>
                <div className="container_foto">
                    <img src={img_3}></img>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Gorelki_gazovozdushnye_7;