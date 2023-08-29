import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_gorelki_gazovozdushnye_1.jpg"

const Gorelki_gazovozdushnye_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ГОРЕЛКА КРОВЕЛЬНАЯ ГВ-815-Р</h2>
                <p>Горелка кровельная ГВ-815-Р (рычажная, Фстакана=50мм, L=815мм)</p>
                <div className="container_foto">
                    <img src={img_3}></img>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Gorelki_gazovozdushnye_1;