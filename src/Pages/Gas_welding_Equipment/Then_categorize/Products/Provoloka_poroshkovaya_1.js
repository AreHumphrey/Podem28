import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_provoloka_poroshkovaya.jpg"

const Provoloka_poroshkovaya_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПРОВОЛОКА ПОРОШКОВАЯ E-71T-GS</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p><b>Самозащитная сварочная проволока E71T-GS</b>, предназначена для сварки без среды защитных газов
                        тонких листов из гальванизированных углеродистых и низколегированных сталей во всех
                        пространственных положениях.</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Provoloka_poroshkovaya_1;