import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_10.jpg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_10 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>НИППЕЛЬ УНИВЕРСАЛЬНЫЙ 6/9 (ЛАТУНЬ)</h2>
                <p>Ниппель универсальный Ф6/Ф9 - запасная часть, предназначен под рукав Ф6, Ф9 и гайку М16.</p>
                <div className="container_foto">
                    <img src={img_3}></img>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_10;