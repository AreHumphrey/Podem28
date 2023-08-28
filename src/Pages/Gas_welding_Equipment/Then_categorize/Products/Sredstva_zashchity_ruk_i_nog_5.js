import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_5.jpg"

const Sredstva_zashchity_ruk_i_nog_5 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПЕРЧАТКИ СПИЛКОВЫЕ М1</h2>

                <div className="container_foto">
                    <img src={img_3}></img>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Sredstva_zashchity_ruk_i_nog_5;