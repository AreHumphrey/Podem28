import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_prochie_aksessuary_6.jpg"

const Aksessuary_2_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>МОЛОТОК СВАРЩИКА ШЛАКООТБОЙНЫЙ</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Молоток сварщика предназначен для отбивания шлака
                    </p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Aksessuary_2_6;