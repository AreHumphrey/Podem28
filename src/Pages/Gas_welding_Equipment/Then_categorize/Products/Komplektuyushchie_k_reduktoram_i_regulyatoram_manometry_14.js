import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_14.jpg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_14 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПРОКЛАДКА ПАРОНИТОВАЯ 1/2</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Прокладка паронитовая 1/2" предназначена для герметизации и устанавливается в гайку бытового пропанового редуктора типа "Лягушка".</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_14;