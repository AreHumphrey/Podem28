import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_9.jpg"

const Sredstva_zashchity_ruk_i_nog_9 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <p>Отличные краги высокого качества, на х/б подкладке, кисть дополнительно утеплена флисом. Швы прошиты
                    кевларовой нитью.<br/>

                    Краги черно-желтые с усиленным наладонником удлиненные рекомендованы для тяжелых условий при
                    металлургическом производстве, ручной дуговой сварки, резки металлов газокислородным пламенем.</p>
                <h2>КРАГИ СПИЛКОВЫЕ ЖЕЛ./ЧЕРН. С УСИЛ. ЛАД. УДЛИН.</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                </div>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Sredstva_zashchity_ruk_i_nog_9;