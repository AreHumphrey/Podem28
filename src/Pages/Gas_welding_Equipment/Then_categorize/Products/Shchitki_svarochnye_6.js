import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_shchitki_svarochnye_6.jpg"

const Shchitki_svarochnye_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЩИТОК СВАРЩИКА ПЛАСТИКОВЫЙ НН-С-701</h2>

                <div className="container_foto">
                    <img src={img_3}></img>

                </div>


            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Shchitki_svarochnye_6;